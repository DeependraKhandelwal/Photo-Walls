package com.ops.in.controller;

import java.time.LocalDate;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonFormat;

import com.ops.in.exception.OrderNotFoundException;
import com.ops.in.pojo.InputOrder;
import com.ops.in.pojo.OrderInfo;
import com.ops.in.repository.IOrderRepository;
import com.ops.in.service.IOrderService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = "/orders")
@Api(description = "This is an OrderController class")
public class IOrderController {

	@Autowired
	IOrderService orderService;
	@Autowired
	IOrderRepository orderRepo;
	Logger logger = LoggerFactory.getLogger(IOrderController.class);

	/*
	To place order
	http://localhost:8082/orders/addorder
	 */
	@PostMapping(value = "/addorder")
	@ApiOperation(value = "This is a method to add order")
	public InputOrder addOrder(@Valid @RequestBody InputOrder order) 
	{

		logger.info("order addOrder()");

		return orderService.addOrder(order);

	}

	/*
	To delete order by id
	http://localhost:8082/orders/orderbyid/{orderId}
	 */
	@DeleteMapping(value ="/orderbyid/{orderId}")
	@ApiOperation(value = "This is a method to delete an order")
	public List<OrderInfo> removeOrder(@PathVariable Integer orderId) {
		logger.info(" Order removeOrder()");
		return orderService.removeOrder(orderId);
	}


	/*
	To get order details by customer id
	http://localhost:8082/orders/orderbycustomerid/{customerId}
	 */
	@GetMapping(value = "/orderbycustomerid/{customerId}")
	@ApiOperation(value = "This is a method to display single order by customer ID")
	public List<OrderInfo> viewAllOderByCustomerId(@PathVariable("customerId") Integer customerId){
		return orderService.viewAllOrderByCustomerId(customerId);
	}


	/*
	 * To get order details by order date
	 * http://localhost:8082/orders/orderbydate/{date}
	 */
	@GetMapping(value = "/orderbydate/{date}")
	@ApiOperation(value = "This is a method to display single order by date")
	public List<InputOrder> viewAllOrders(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) {
		logger.info("Order viewAllOrders");
		return orderService.viewAllOrderByDate(date);
	}

	/*
	To get order details by customer location
	http://localhost:8082/orders/orderbylocation/{location}
	 */
	@GetMapping(value = "/orderbylocation/{location}")
	@ApiOperation(value = "This is a method to display single order by location")
	public List<InputOrder> viewOrdersByLocation(@PathVariable String location) {
		logger.info("Order viewOrdersByLocation");
		return orderService.viewAllOrdersByLocation(location);

	}

	/*
	To display all orders
	http://localhost:8082/orders/allorders
	 */
	@GetMapping(value = "/allorders")
	@ApiOperation(value = "This is a method to display all orders")
	public List<InputOrder> getAllOrders(){
		logger.info("InputOrder getAllOrders()");
		return orderService.getAllOrders();

	}




}