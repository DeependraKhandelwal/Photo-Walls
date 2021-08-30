package com.ops.in.service;


import java.util.List;

import java.util.Optional;

import com.ops.in.entitie.Payment;
import com.ops.in.exception.OrderDetailsException;

public interface IPaymentService {
	
		
		public Payment saveOrderDetails(Integer cartId)throws OrderDetailsException;
		public List<Payment> getOrderDetailsList()throws OrderDetailsException;
		public Optional<Payment> getOrderDetailsById(Integer orderDetailsId)throws OrderDetailsException;
		public Payment updateOrderDetails(Payment orderdeatails) throws OrderDetailsException;
	    public void deleteOrderDetails(Integer orderDetailsId)throws OrderDetailsException;
		
		//public OrderDetails getSingleOrderDetails(Integer orderDetailsId);
	}	   


