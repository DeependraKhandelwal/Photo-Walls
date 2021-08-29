package com.ops.in.service.impl;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ops.in.entitie.Cart;
import com.ops.in.entitie.Payment;
import com.ops.in.entitie.Product;
import com.ops.in.entitie.ShippingInfo;
import com.ops.in.exception.CartNotFoundException;
import com.ops.in.exception.OrderDetailsException;
import com.ops.in.exception.OrderDetailsNotFoundException;
import com.ops.in.pojo.CartInfo;
import com.ops.in.pojo.ProductItem;
import com.ops.in.repository.ICartRepository;
import com.ops.in.repository.IOrderDetailsRepository;
import com.ops.in.repository.IShippingInfoRepository;
import com.ops.in.service.IPaymentService;

@Service
public class IPaymentServiceImpl implements IPaymentService {
	
	private static final Logger Logger =LoggerFactory.getLogger(IPaymentServiceImpl.class);
	@Autowired
	private IOrderDetailsRepository orderdetailRepository;
	
	@Autowired
	ICartRepository  cartRepo;
	
	@Autowired
	IShippingInfoRepository shippingInfoRepo;
	
	
	
	@Override
	public Payment saveOrderDetails(Integer cartId)throws OrderDetailsException  {
		
		
			Logger.info("Cart viewAllProducts()");
			Cart cart = cartRepo.findById(cartId).orElse(null);
			if(cart==null) {
				throw new CartNotFoundException();
			}
			else {

				CartInfo cartinfo=new CartInfo();
				
				Map<Product, Integer> map=cart.getProducts();
				
				Double total =map.entrySet().stream().mapToDouble(p->p.getKey().getPrice()*p.getValue()).sum();
				
				System.out.println(total);
				
				/*
				 * for(Product p:map.keySet()) {
				 * 
				 * ProductItem item=new ProductItem(); item.setProductId(p.getProductId());
				 * item.setProductName(p.getProductName());
				 * item.setProductImage(p.getProductImage()); item.setPrice(p.getPrice());
				 * item.setQuantity(map.get(p)); cartinfo.getProductList().add(item);
				 * cartinfo.setTotal(total); }
				 */				
				
				Payment payment=new Payment();
				payment.setSubTotal(total);
//				payment.setShippingInfo(shippingInfoRepo.getById(d));
				return orderdetailRepository.save(payment);
				
				
				
				
			
			
			 
		    }
			}
	@Override
	public List<Payment> getOrderDetailsList()throws OrderDetailsException{
		
			Logger.info("Trying to fetch all OrderDetails in service layer ");
			return orderdetailRepository.findAll();
		}
	@Override
	public Optional<Payment> getOrderDetailsById(Integer orderDetailsId) throws OrderDetailsException{
		
			Logger.info("Trying to fetch OrderDetails in service layer ");
			return orderdetailRepository.findById(orderDetailsId);
		}
	@Override
	public Payment updateOrderDetails(Payment orderdeatails)throws OrderDetailsException {
		
			Logger.info("Trying to update OrderDetails in service layer ");
			
		    Integer orderDetailsId=orderdeatails.getPaymentId();
		    orderdeatails.setPaymentId(orderDetailsId);
			return orderdetailRepository.save(orderdeatails);
		}
	@Override
	public void deleteOrderDetails(Integer orderDetailsId) throws OrderDetailsException{
		
			Logger.info("Trying to delete OrderDetails in service layer");
			orderdetailRepository.deleteById(orderDetailsId);
			
		}
	}
	

