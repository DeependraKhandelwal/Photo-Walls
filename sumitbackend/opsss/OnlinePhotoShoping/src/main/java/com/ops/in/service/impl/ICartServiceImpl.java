package com.ops.in.service.impl;


import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ops.in.entitie.Cart;
import com.ops.in.entitie.Customer;
import com.ops.in.entitie.Product;
import com.ops.in.exception.CartNotFoundException;
import com.ops.in.pojo.CartInfo;
import com.ops.in.pojo.InputCart;
import com.ops.in.pojo.OutputCart;
import com.ops.in.pojo.ProductItem;
import com.ops.in.repository.ICartRepository;
import com.ops.in.repository.ICustomerRepository;
import com.ops.in.repository.IProductRepository;
import com.ops.in.service.ICartService;
@Service
public class ICartServiceImpl implements ICartService{
	
	@Autowired
	ICartRepository  cartRepo;
	@Autowired
	IProductRepository productRepo;
	Logger logger = LoggerFactory.getLogger(ICartServiceImpl.class);
	@Autowired
	ICustomerRepository custRepo;

	
	

	@Override
	@Transactional
	public CartInfo removeProductFromCart(Integer cartId, Integer productId ) {
		
		 logger.info("Cart removeProductFromCart()");
		  Cart cart=cartRepo.findById(cartId).orElse(null);
	        Map<Product,Integer> productmap=cart.getProducts();
	        for(Product p:productmap.keySet()) {
	            if(p.getProductId().equals(productId)) {
	                productmap.remove(p);
	                cart.setProducts(productmap);
	               
	            }
	        }
	        
	        cart = cartRepo.save(cart);
	        OutputCart c = new OutputCart();
			c.setCartId(cart.getCartId());
			Map<Product,Integer> map = cart.getProducts();
			for(Product p : map.keySet()) {
				c.getMap().put(p.getProductId(), map.get(p));
			}
			return viewAllProducts(cartId);
				
	        }
	       
	        
	    
	


	@Override
	@Transactional
	public OutputCart updateProductQuantity(Integer cartId, Integer productId, int quantity) {
		
		 logger.info("Cart updateProductToCart()");
			
			Cart cart1 = cartRepo.findById(cartId).orElse(null);
			Product pr=productRepo.findById(productId).orElse(null);
			pr.setQuantity(quantity);
			productRepo.save(pr);
			cartRepo.save(cart1);
			OutputCart c = new OutputCart();
			c.setCartId(cart1.getCartId());
			Map<Product,Integer> map = cart1.getProducts();
				//for(Product p : map.keySet()) {
					c.getMap().put(pr.getProductId(), map.get(pr.getQuantity()));
				return c;
			
	}
	

	
	@Override
	@Transactional
	public CartInfo  viewAllProducts(Integer cartId) {
	
		logger.info("Cart viewAllProducts()");
		Cart cart = cartRepo.findById(cartId).orElse(null);
		if(cart==null) {
			throw new CartNotFoundException();
		}
		else {

			CartInfo cartinfo=new CartInfo();
			
			Map<Product, Integer> map=cart.getProducts();
			
//			Double total =map.entrySet().stream().mapToDouble(p->p.getKey().getPrice()*p.getValue()).sum();
			
//			System.out.println(total);
			
			for(Product p:map.keySet()) {
				
				ProductItem item=new ProductItem();
				item.setProductId(p.getProductId());
				item.setProductName(p.getProductName());
				item.setProductImage(p.getProductImage());
				item.setPrice(p.getPrice());
				item.setQuantity(map.get(p));
				cartinfo.getProductList().add(item);
//				cartinfo.setTotal(total);
			}
			
			
			
			
			
			return cartinfo;
			
			
			
			
		}
		
		 
	    }
	

	@Override
	@Transactional
	public OutputCart addProductToCart(InputCart cart) {
		
		logger.info("Cart addProductToCart1()");
		Cart cart1 = cartRepo.findById(cart.getCartId()).orElse(null);
		if(cart1==null) {
			cart1= new Cart();
		}
		Product product = productRepo.findById(cart.getProductId()).orElse(null);
		
		Map<Product,Integer> map = cart1.getProducts();
		map.put(product, cart.getQuantity());
		Customer cust = custRepo.findById(cart.getCustomerId()).orElse(null);
		cart1.setCustomer(cust);
		
		cart1= cartRepo.save(cart1);
		
//		
//		 map.entrySet().stream()
//                .map(entry -> entry.getKey().getPrice().multiply(Double.valueOf(entry.getValue())))
//                .reduce(Double::add)
//                .orElse(0.00);
//		
		
		
		
		
		
		OutputCart c = new OutputCart();
		c.setCartId(cart1.getCartId());
		map= cart1.getProducts();
		for(Product p : map.keySet()) {
			c.getMap().put(p.getProductId(), map.get(p));
		}
		return c;
			
		
		
	}


	@Override
	@Transactional
	public OutputCart makeCartEmpty(Integer cartId) {
	
		Cart cart = cartRepo.findById(cartId).orElse(null);
		if(cart==null) {
			throw new CartNotFoundException();
		}
		else {
			cart.setProducts(new HashMap<Product,Integer>());
			cart =cartRepo.save(cart);
			
			OutputCart c = new OutputCart();
			c.setCartId(cart.getCartId());
			Map<Product,Integer> map = cart.getProducts();
			for(Product p : map.keySet()) {
				c.getMap().put(p.getProductId(), map.get(p));
			}
			return c;
		}

		
		
	}


}