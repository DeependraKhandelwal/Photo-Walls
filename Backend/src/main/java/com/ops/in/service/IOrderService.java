package com.ops.in.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.repository.query.Param;

import com.ops.in.exception.MyOrderException;
import com.ops.in.pojo.InputOrder;
import com.ops.in.pojo.OrderInfo;

public interface IOrderService {
	
	public InputOrder addOrder(InputOrder order);
	public List<OrderInfo> removeOrder(Integer orderId);
	public List<InputOrder> viewAllOrdersByLocation(String location);
	public List<OrderInfo> viewAllOrderByCustomerId(Integer customerId);
	public List<InputOrder> viewAllOrderByDate(@Param("orderDate")LocalDate localdate);
	public List<InputOrder> getAllOrders();
	

}
