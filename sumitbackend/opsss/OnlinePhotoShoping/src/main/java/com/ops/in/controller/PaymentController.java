package com.ops.in.controller;

import java.util.List;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ops.in.entitie.Payment;
import com.ops.in.exception.OrderDetailsNotFoundException;
//import com.ops.in.repository.IOrderDetailsRepository;

import com.ops.in.service.IPaymentService;

@RestController
@RequestMapping(value ="/orderdetails")
public class PaymentController {
	private static final Logger logger = LoggerFactory.getLogger(PaymentController.class);	

	@Autowired
	private IPaymentService orderDetails;
		
	// http://localhost:8080/orderdetails/saveOrderDetails
	
	@PostMapping(path = "/{cartId}")
	public ResponseEntity<Integer> saveOrderDetails(@PathVariable Integer cartId) throws OrderDetailsNotFoundException {
		try {
			logger.info("Trying to save Record  : " + cartId);
			Optional<Payment> savedOrderDetails = orderDetails.getOrderDetailsById(cartId);
			return new ResponseEntity<>(cartId, HttpStatus.CREATED);//201
		} catch (Exception e) {
			logger.error("Record NOT Saved  : " + cartId);
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
			
		}
	}
	// http://localhost:8080/orderdetails/1
			@DeleteMapping("/{orderDetailsId}")
			public ResponseEntity<String> deleteOrderDetails(@PathVariable Integer orderDetailsId) throws OrderDetailsNotFoundException {
				
				try {
					orderDetails.deleteOrderDetails(orderDetailsId);
					Optional<Payment> delOrderDetails = orderDetails.getOrderDetailsById(orderDetailsId);
					logger.info("Record Deleted with orderDetailsId : " + orderDetailsId);
					return new ResponseEntity<>("Record Deleted...with orderDetailsId : "+orderDetailsId,HttpStatus.OK);
				} catch (Exception e) {
					logger.error("Record NOT Deleted with orderDetailsId : " + orderDetailsId);
					return new ResponseEntity<>("Record not found with orderDetailsId : "+orderDetailsId,HttpStatus.EXPECTATION_FAILED);
				}
			}
			
        // http://localhost:8080/orderdetails/1
			@PutMapping("/{orderDetailsId}")
			public ResponseEntity<Object> updateOrderDetails(@RequestBody Payment orderdeatails, @PathVariable Integer orderDetailsId)
					throws OrderDetailsNotFoundException {
				logger.info("trying to update user : " + orderdeatails);
				try {
					Optional<Payment> orderdetailsFound = orderDetails.getOrderDetailsById(orderDetailsId);

					if (orderdetailsFound.isPresent()) {
						orderdeatails.setPaymentId(orderDetailsId);
						System.out.println("Record Updated : " + orderdeatails);
						return ResponseEntity.ok(orderdeatails);
					} else {
						return new ResponseEntity<>("Record NOT updated with orderDetailsId : " + orderDetailsId,HttpStatus.NO_CONTENT);
					}
				} catch (Exception e) {
					logger.error("Record NOT updated with orderDetailsId : " + orderdeatails);
					return new ResponseEntity<>("Record NOT updated with orderDetailsId : " + orderdeatails, HttpStatus.EXPECTATION_FAILED);
				}
}
			// http://localhost:8080/orderdetails

			@GetMapping(produces = "application/json")
			public ResponseEntity<List<Payment>> getAllOrderDetails() throws OrderDetailsNotFoundException {
				logger.info("Trying to fetch User list ");
				try {
					List<Payment> orderdeatails = orderDetails.getOrderDetailsList();

					if (orderdeatails.isEmpty()) {
						return new ResponseEntity<>(HttpStatus.NO_CONTENT);
					}
					return new ResponseEntity<>(orderdeatails, HttpStatus.OK);
				} catch (Exception e) {
					logger.error("Record NOT found : ");
					return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
				}
			}
				// http://localhost:8080/orderdetails/1	
				// value passed along with url ,variable passed along with path
					@GetMapping(path = "/{orderDetailsId}", produces = "application/json")
					
					public ResponseEntity<Payment> getUserById(@PathVariable Integer orderDetailsId) throws OrderDetailsNotFoundException {
						Optional<Payment> orderdeatails = null;
						logger.info("Trying to search Record with orderDetailsId : " + orderDetailsId);
						try {
							orderdeatails = orderDetails.getOrderDetailsById(orderDetailsId);

							if (orderdeatails.isPresent()) {
								return new ResponseEntity<>(orderdeatails.get(), HttpStatus.OK);
							} else {
								return new ResponseEntity<>(HttpStatus.NOT_FOUND);
							}
						} catch (Exception e) {
							logger.error("Record NOT Found with orderDetailsId : " + orderDetailsId);
							return new ResponseEntity<Payment>(new Payment(), HttpStatus.EXPECTATION_FAILED);
						}
			
}
}