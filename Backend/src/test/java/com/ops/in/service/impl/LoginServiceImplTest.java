package com.ops.in.service.impl;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ops.in.entities.User;
import com.ops.in.repository.ILoginRepository;


@SpringBootTest
public class LoginServiceImplTest {
	
        @InjectMocks
	    LoginServiceImpl loginServiceImpl;
	    
        @Mock
	    ILoginRepository loginRepo;
	    
	    @Test
	    public void addUserMockTest()
	    {
	    	 User user =User.builder().password("password").role("User Plus").build();
      
	    	 when(loginRepo.save(user)).thenReturn(user);
		     assertThat(loginServiceImpl.addUser(user)).isEqualTo(user);
	    }
	    
	    @Test
	    public void removeUserMockTest()
	    {
	    	loginRepo.deleteById("Deep");
	    }
	    
	    @Test
	    public void validateUserMockTest()
	    {
	        User user =User.builder().password("password").userId("userId").build();
	        when(loginRepo.findValidateUser(user.getUserId(), user.getPassword())).thenReturn(user);
	        when(loginRepo.getPassword(user.getUserId())).thenReturn(user.getPassword());
	        assertThat(loginServiceImpl.validateUser(user.getUserId())).isEqualTo(user);
	        
	    }

	 


	} 