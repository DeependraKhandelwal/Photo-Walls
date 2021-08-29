package com.ops.in.service.impl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ops.in.entitie.Address;
import com.ops.in.entitie.Cart;
import com.ops.in.entitie.Customer;
import com.ops.in.entitie.Order;
import com.ops.in.entitie.Product;
import com.ops.in.exception.MyOrderException;
import com.ops.in.exception.OrderNotFoundException;
import com.ops.in.pojo.InputOrder;
import com.ops.in.pojo.OrderInfo;
import com.ops.in.pojo.ProductItem;
import com.ops.in.repository.IAddressRepository;
import com.ops.in.repository.ICartRepository;
import com.ops.in.repository.ICustomerRepository;
import com.ops.in.repository.IOrderRepository;
import com.ops.in.repository.IProductRepository;
import com.ops.in.service.ICartService;
import com.ops.in.service.IOrderService;

@Service
public class IOrderServiceImpl implements IOrderService {

	@Autowired
	IOrderRepository orderRepo;
	@Autowired
	ICustomerRepository customerRepo;
	@Autowired
	IAddressRepository addressRepo;
	@Autowired
	IProductRepository productRepo;
	@Autowired
	ICartService cartService;
	@Autowired
	ICartRepository cartRepo;
	Logger logger = LoggerFactory.getLogger(IOrderServiceImpl.class);

	//created function to avoid repetition of code
	public InputOrder rowMapperOrder(Order o) {
		InputOrder order = new InputOrder();
		order.setAddressId(o.getAddress().getAddressId());
		order.setCustomerId(o.getCustomer().getCustomerId());
		order.setOrderDate(o.getOrderDate());
		order.setOrderId(o.getOrderId());
		order.setOrderStatus(o.getOrderStatus());

		return order;
	}

	//To add order
	@Override
	public InputOrder addOrder(InputOrder order){
		logger.info("Order addOrder()");
		Order order1 = new Order();

		Customer cust = customerRepo.findById(order.getCustomerId()).orElse(null);
		Address add = addressRepo.findById(order.getAddressId()).orElse(null);
		Cart cart = cust.getCart();
		Map<Product,Integer>products=cart.getProducts();
		Map<Product,Integer>map = new HashMap<Product,Integer>();
		for(Product p: products.keySet()) {
			map.put(p, products.get(p));
		}

		order1.setOrderStatus("Confirmed");
		order1.setOrderDate(LocalDate.now());
		order1.setCustomer(cust);
		order1.setProducts(map);
		order1.setAddress(add);
		cust.getOrderlist().add(order1);

		order1= orderRepo.save(order1);

		cart.setProducts(new HashMap<Product,Integer>());
		cartRepo.save(cart);


		order.setOrderId(order1.getOrderId());
		order.setCustomerId(order1.getCustomer().getCustomerId());
		order.setAddressId(order1.getAddress().getAddressId());


		return order;		
	}


	//To remove order by id
	@Override
	public List<OrderInfo> removeOrder(Integer orderId){
		logger.info("Order removeOrder()" );
		Order order = orderRepo.findById(orderId).orElse(null);

		if(order!=null) {

			order.setOrderStatus("Canceled");
			orderRepo.save(order);

			InputOrder order1 = rowMapperOrder(order);
			return viewAllOrderByCustomerId(order.getCustomer().getCustomerId());

		}
		else {
			throw new OrderNotFoundException();
		}

	}



	//To view order by date
	@Override
	public List<InputOrder> viewAllOrderByDate(LocalDate date){
		logger.info("Order viewAllOrders" );
		List<Order> order = orderRepo.viewAllOrderByDate(date);
		if(order.isEmpty())

			throw new OrderNotFoundException();
		List<InputOrder> olist = new ArrayList<InputOrder>();
		for(Order o: order) {

			InputOrder order1 = rowMapperOrder(o);
			olist.add(order1);

		}
		return olist;
	}

	//To view order by location	
	@Override
	public List<InputOrder> viewAllOrdersByLocation(String location){
		logger.info("Order viewAllOrdersByLocation()" );
		List<Order> order = orderRepo.viewAllOrdersByLocation(location);
		System.out.println(order);
		if(order.isEmpty())
			throw new OrderNotFoundException();
		List<InputOrder> olist = new ArrayList<InputOrder>();
		for(Order o: order) {

			InputOrder order1 = rowMapperOrder(o);
			olist.add(order1);

		}
		return olist;
	}

	//view order by customer id
	@Override
	public List<OrderInfo> viewAllOrderByCustomerId(Integer customerId){
		logger.info("Order viewAllOrderByCustomerId" );
		List<Order> order = orderRepo.viewAllOrdersByCustomer(customerId);
		if(order== null)
			throw new OrderNotFoundException();
		else {
			List<OrderInfo> orderList = new ArrayList<OrderInfo>();
			for(Order o : order) {
				
				OrderInfo orderinfo=new OrderInfo();
				orderinfo.setOrderId(o.getOrderId());
				orderinfo.setOrderDate(o.getOrderDate());
				orderinfo.setOrderStatus(o.getOrderStatus());
				Map<Product, Integer> map=o.getProducts();
				for(Product p:map.keySet()) {

					ProductItem item=new ProductItem();
					item.setProductId(p.getProductId());
					item.setProductName(p.getProductName());
					item.setProductImage(p.getProductImage());;
					item.setPrice(p.getPrice());
					item.setQuantity(map.get(p));
					orderinfo.getProductList().add(item);
				}
				orderList.add(orderinfo);	
			}

			return orderList;
		}
	}
	@Override
	public List<InputOrder> getAllOrders(){
		logger.info("InputOrdre getAllOrders()");
		List<Order> order=orderRepo.findAll();
		if(order.isEmpty()) {
			throw new OrderNotFoundException();
		}
		else {
			List<InputOrder> olist=new ArrayList<InputOrder>();
			for(Order o: order) {

				InputOrder order1 = rowMapperOrder(o);
				olist.add(order1);
			}


			return olist;
		}

	}
}
