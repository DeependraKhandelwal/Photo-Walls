package com.ops.in.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ops.in.entitie.Customer;


public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

	/*public Customer addCustomer(Customer cust);
	public Customer updateCustomer(Customer cust);
	public Customer removeCustomer(Customer cust);
	public Customer viewCustomer(Customer cust);
	public List<Customer> ViewAllCustomers(String location);*/
	@Query("select c from Customer c where  c.email=:email and c.password=:password")
    public Customer findValidateCustomer(@Param("email")String email, @Param("password")String password);
	
	@Query("select c.password from Customer c where c.email=:email")
	public String getPassword(@Param("email")String email );
	@Query("select c from Customer c where c.address.city=:location")
	public List<Customer> viewAllCustomer(@Param("location")String location);
}
