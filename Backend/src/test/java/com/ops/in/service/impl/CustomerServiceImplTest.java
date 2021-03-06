package com.ops.in.service.impl;

import static org.junit.jupiter.api.Assertions.*;


import java.util.List;


import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ops.in.pojo.InputCustomer;
import com.ops.in.repository.ICustomerRepository;
import com.ops.in.service.ICustomerService;
import com.ops.in.service.impl.CustomerServiceImpl;

@SpringBootTest
class CustomerServiceImplTest {

 

    @InjectMocks
    CustomerServiceImpl customerServiceimpl;
    
    @Mock
    ICustomerRepository customerRepo;
    
    @Autowired
    ICustomerService service;
    @Test
    public void addCustomerUnitTest()
    {
       
        InputCustomer cust = new InputCustomer();
       
        cust.setFirstName("Pampari");
        cust.setLastName("Narender");
        cust.setMobileNumber("5878455448");
        cust.setEmail("abc@g.com");
        cust.setBuildingName("BK block");
        cust.setCity("Delhi");
        cust.setCountry("India");
        cust.setPincode("986573");
        cust.setState("NewDelhi");
        cust.setStreetNo("3H");
       
        cust=service.addCustomer(cust);
        assertNotNull(cust,"Customer is added");
       
    }
   
    @Test
    public void deleteCustomerUnitTest()
    {
        InputCustomer cust =service.removeCustomer(13);
        assertNotNull(cust, "Customer deleted !!");
    }
   
    @Test
    public void updateCustomerUnitTest()
    {
        InputCustomer cust = new InputCustomer();
        cust.setAddressId(34);
        cust.setFirstName("Vineeth");
        cust.setLastName("Sai");
        cust.setMobileNumber("5878455448");
        cust.setEmail("vinni1@g.com");
        cust.setBuildingName("BK block");
        cust.setCity("Delhi");
        cust.setCountry("India");
        cust.setPincode("986573");
        cust.setState("NewDelhi");
        cust.setStreetNo("3H");
        cust.setCartId(14);
        cust.setCustomerId(14);
        InputCustomer cust1 = new InputCustomer();
        cust1=service.updateCustomer(cust);
        assertNotNull(cust1,"Customer is added");
       
    }
   
    @Test
    public void viewAllCustomersUnitTest()
    {
        InputCustomer cust = service.viewCustomer(2);
        assertNotNull(cust, "Customer Found!!");
    }
   
    @Test
    public void viewCustomerUnitTest()
    {
        List<InputCustomer> cust = service.viewAllCustomers("Delhi");
        assertNotNull(cust, "Address removed !!");
       
    }
   
   
}