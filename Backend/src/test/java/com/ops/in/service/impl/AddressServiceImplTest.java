package com.ops.in.service.impl;

import static org.junit.jupiter.api.Assertions.*;


import java.util.List;


import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ops.in.pojo.InputAddress;
import com.ops.in.service.IAddressService;
import com.ops.in.service.impl.AdressServiceImpl;


@SpringBootTest
class AddressServiceImplTest {

 

     @InjectMocks
     AdressServiceImpl addressServiceImpl;
     
    
        
     @Autowired
     IAddressService service;
     
      
        
        
      //Functionality Level Test
    
     @Test
     public void addAddressUnitTest()
     {
         InputAddress add = new InputAddress();
         add.setStreetNo("131D");
         add.setBuildingName("SrujanaComplex");
         add.setCity("Hyderabad");
         add.setState("Telangana");
         add.setCountry("INDIA");
         add.setPincode("500042");
        
         add=service.addAddress(add);
         assertNotNull(add,"Address is added");
     }
    
    
     @Test
     public void updateAddressUnitTest()
     {
         InputAddress add = new InputAddress();
         add.setAddressId(add.getAddressId());
         add.setStreetNo("131D");
         add.setBuildingName("SrujanaComplex");
         add.setCity("Hyderabad");
         add.setState("Telangana");
         add.setCountry("INDIA");
         add.setPincode("500042");
         add=service.updateAddress(add);
        
        
         assertNotNull(add,"Address is Updated");
     }
    
     @Test
     public void removeAddressUnitTest()
     {
         InputAddress add=service.removeAddress(3);
         assertNotNull(add, "Address removed !!");
     }
    
    
     @Test
     public void viewAddressByIdUnitTest()
     {
         InputAddress add = service.viewAddress(100);
         assertNotNull(add,"Address found!");
        
     }
    
     @Test
     public void viewAllAddressUnitTest()
     {
         List<InputAddress> add=service.viewAllAddress();
         assertNotNull(add,"Address List Displayed");
        
     }
}
 
 