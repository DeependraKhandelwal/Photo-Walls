package com.ops.in.service;

import java.util.List;

import com.ops.in.pojo.InputCustomer;



public interface ICustomerService {
	
	public InputCustomer addCustomer(InputCustomer cust);
	public InputCustomer updateCustomer(InputCustomer cust);
	public InputCustomer removeCustomer(Integer cutomerId);
	public InputCustomer viewCustomer(Integer customerId);
	public List<InputCustomer> viewAllCustomers(String location);
	public InputCustomer findValidateCustomer(String email,String password);
	public List<InputCustomer> getAllCustomers();
	
}
