//package com.ops.in.service.impl;
//
//import static org.assertj.core.api.Assertions.assertThat;
//import static org.junit.jupiter.api.Assertions.*;
//
//import java.util.Optional;
//
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.ops.in.entitie.User;
//import com.ops.in.repository.ILoginRepository;
//import com.ops.in.service.impl.ILoginServiceImpl;
//
//
//@SpringBootTest
//public class ILoginServiceImplTest {
//	
//        @InjectMocks
//	    ILoginServiceImpl loginServiceImpl;
//	    
//	    @Autowired
//	    ILoginRepository loginRepo;
//	    
//	    @Test
//	    public void addUserMockTest()
//	    {
//	    	 User user =User.builder().password("password").role("User Plus").build();
//      
//	    	 User addedUser=loginRepo.save(user);
//	         assertNotNull(addedUser);
//	    }
//	    
//	    @Test
//	    public void removeUserMockTest()
//	    {
//	    	loginRepo.deleteById("Deep");
//	    }
//	    
//	    @Test
//	    public void validateUserMockTest()
//	    {
//	        User user =User.builder().password("password").role("User Plus").build();
//	        Mockito.when(loginRepo.findValidateUser(user.getUserId(), user.getPassword())).thenReturn(user);
//	        Mockito.when(loginRepo.existsById(user.getUserId())).thenReturn(true);
//	        Mockito.when(loginRepo.getPassword(user.getUserId())).thenReturn(user.getPassword());
//	        assertThat(loginServiceImpl.validateUser(user.getUserId())).isEqualTo(user);
//	        
//	    }
//
//	 
//
//
//	} 