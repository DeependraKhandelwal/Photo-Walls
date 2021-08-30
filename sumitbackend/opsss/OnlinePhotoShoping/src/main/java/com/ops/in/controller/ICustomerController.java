package com.ops.in.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

import com.ops.in.entitie.Category;
import com.ops.in.entitie.Customer;
import com.ops.in.exception.CustomerNotFoundException;
import com.ops.in.pojo.InputCustomer;
import com.ops.in.service.ICustomerService;

import io.swagger.annotations.ApiOperation;


@CrossOrigin(origins="*")
@RestController
@RequestMapping(value = "/customer")
public class ICustomerController {

	Logger logger = LoggerFactory.getLogger(ICustomerController.class);
	
	@Autowired
	ICustomerService customerService;
	
	
	@PostMapping(produces = "application/json",consumes = "application/json")
	@ApiOperation(value = "This is addCustomer() method, to add customer in database table")
    public ResponseEntity<String> addCustomer(@Valid @RequestBody InputCustomer customer) throws CustomerNotFoundException{
        
		try {
			logger.info("Trying to add new customer"+ customer);
			InputCustomer savedCus=customerService.addCustomer(customer);
			return new ResponseEntity<String>("Created",HttpStatus.CREATED);
		}
		catch(Exception e){
			logger.error("Category Not Added :"+ customer);
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
			
		}
		
//		logger.info("Customer addCustomer");
//        return customerService.addCustomer(customer) ;
    }
	
	
	@GetMapping(produces = "application/json")
	@ApiOperation(value = "This is getAllCustomer() method, to fetch all customers from database table")
	public ResponseEntity<List<InputCustomer>> getAllCustomers() throws CustomerNotFoundException {
		logger.info("InputCustomer getAllCustomer()");
		try {
			List<InputCustomer> customer = customerService.getAllCustomers();
			if (customer.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(customer, HttpStatus.OK);
		    } 
		catch (Exception e) {
			logger.error("Record NOT found : ");
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		    }
		
		//		return customerService.getAllCustomers();
	}
	
	
	@DeleteMapping("/{id}")
	@ApiOperation(value = "This is deleteCustomer() method , provide input id to delete the customer.")
    public ResponseEntity<Integer> removeCustomer( @PathVariable ("id") Integer customerId) throws CustomerNotFoundException{

		try {
			customerService.removeCustomer(customerId);
			logger.info("Record Deleted with Id : " + customerId);
			return new ResponseEntity<>(customerId,HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Record NOT Deleted with Id : " + customerId);
			return new ResponseEntity<>(500,HttpStatus.EXPECTATION_FAILED);
		}
		
//		logger.info("Customer removeCustomer");
//        return customerService.removeCustomer(customerId) ;
    }
	
	
	//  http://localhost:8080/customer/2
	@PutMapping("/{id}")
	@ApiOperation(value = "This is updateCustomer() method, to update customer in database table for given id.")
    public ResponseEntity<Object> updateCustomer(@Valid @RequestBody InputCustomer customer, @PathVariable("id")Integer customerId) throws CustomerNotFoundException{
		
		logger.info("Customer addCustomer");
		try {
			InputCustomer customerfound = customerService.viewCustomer(customerId);

			if (customerfound.getFirstName().length()>0) {
				customerService.updateCustomer(customer);
				logger.info("Record Updated : " + customer);
				return ResponseEntity.ok(customer);
			} else {
				return new ResponseEntity<>("Record NOT updated with Id : " + customer,HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			logger.error("Record NOT updated with Id : %s",customer);
			return new ResponseEntity<>("Record NOT updated with Id : " + customer, HttpStatus.EXPECTATION_FAILED);
		}
		
//        return customerService.updateCustomer(customer);
    }

	
	@GetMapping(path = "/{location}")
    public List<InputCustomer> viewAllCustomers(@PathVariable String location){
		logger.info("Customer viewAllCustomer");
        return customerService.viewAllCustomers(location) ;
        
    }

	
	@GetMapping(path = "/{customerId}")
    public InputCustomer viewCustomer(@PathVariable Integer customerId){
		logger.info("Customer viewCustomer");
        return customerService.viewCustomer(customerId) ;
    }
	
	@GetMapping("/{email}/{password}")
	public InputCustomer validateCustomer(@PathVariable String email,@PathVariable String password) {
		logger.info("Customer validateCustomer()");
		return customerService.findValidateCustomer(email,password);
	}


}