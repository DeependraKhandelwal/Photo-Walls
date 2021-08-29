package com.ops.in.service.impl;


import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ops.in.entitie.Order;
//import com.ops.in.entities.Orders;
//import com.ops.in.entities.Orders;
//import com.ops.in.exception.MyOrdersException;
import com.ops.in.pojo.InputOrder;
import com.ops.in.repository.IOrderRepository;
import com.ops.in.service.IOrderService;
import com.ops.in.service.impl.IOrderServiceImpl;


@SpringBootTest
class IOrderServiceImplTest {

	@Autowired
	IOrderRepository orderRepository;

	@Test
	void addOrderUnitTest()
	{       
		Order orders = Order.builder().orderId(23)
				.orderStatus("Confirmed").orderDate(LocalDate.of(2021, 04, 12))
				.build();

		Order savedOrder = orderRepository.save(orders);

		Assertions.assertThat(savedOrder).isNotNull();
	}

	@Test
	void updateOrderUnitTest()
	{        
		Order orders = Order.builder()
				.orderId(1).orderStatus("Heavy Drivers").orderDate(LocalDate.of(2021, 04, 12))
				.build();   	 	
		Order updatedOrders = orderRepository.save(orders);
		Assertions.assertThat(updatedOrders).isNotNull();
	}

	@Test
	void getAllCustomerUnitTest()
	{
		orderRepository.findAll();
		Assertions.assertThat(orderRepository.findAll()).isNotNull();
	}

	@Test
	void getCustomerByIdUnitTest()
	{

		assertFalse(orderRepository.findById(3).isPresent());

	}

	@Test
	void deleteCustomerUnitTest()
	{	
		orderRepository.deleteById(1);
	}

}
