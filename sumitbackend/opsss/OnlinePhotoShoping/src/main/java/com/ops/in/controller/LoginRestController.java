package com.ops.in.controller;


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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ops.in.entitie.User;
import com.ops.in.exception.UserNotFoundException;
import com.ops.in.service.ILoginService;


@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*")
public class LoginRestController {
	

	@Autowired
	ILoginService loginService;
	Logger logger = LoggerFactory.getLogger(LoginRestController.class);

	
	/*
	 * To add user
	 
	 http://localhost:8082/userLogin
	  
	 {
     "password": "string",
     "role": "string",
     "userId": "string"
      }
	 */
	
	@PostMapping(value="/addUser")
	public ResponseEntity<User> addUser(@Valid @RequestBody User user) throws UserNotFoundException {
		logger.info("User addUser()");
		try {
			logger.info("Trying to add Record  : " + user);
			loginService.addUser(user);
			return new ResponseEntity<>(user, HttpStatus.CREATED);//201
		} catch (Exception e) {
			logger.error("Record NOT Added  : " + user);
			return new ResponseEntity<>(user, HttpStatus.EXPECTATION_FAILED);
			
		}
		
		
	}


	/*
	 * To validate user
	 
	 http://localhost:8082/userLogin/{userId}
	  
	 */
	
	@GetMapping("/{userId}")
	public ResponseEntity<User> validateUser(@PathVariable String userId) throws UserNotFoundException {
		logger.info("User validateUser()");
		try {
			loginService.validateUser(userId);
			logger.info("Trying to validate User with Id : " + userId);
			return new ResponseEntity<>(loginService.validateUser(userId),HttpStatus.OK);
		} catch (Exception e) {
			logger.error("User NOT validate with Id : " + userId);
			return new ResponseEntity<>(loginService.validateUser(userId),HttpStatus.EXPECTATION_FAILED);
		}
		
	}
	

	/*
	 * To user SignIn
	 
	 http://localhost:8082/userLogin/{userId}/{password}
	 
	 */
	
	@GetMapping("/{userId}/{password}")
	public ResponseEntity<User> userSignIn(@PathVariable String password,@PathVariable String userId) throws UserNotFoundException {
		logger.info("User userLogin()");
		try {
			loginService.userLogin(userId,password);
			logger.info("Trying to validate User with Id : " + userId);
			return new ResponseEntity<>(loginService.userLogin(userId,password),HttpStatus.OK);
		} catch (Exception e) {
			logger.error("User NOT validate with Id : " + userId);
			return new ResponseEntity<>(loginService.userLogin(userId,password),HttpStatus.EXPECTATION_FAILED);
		}
	}


	/*
	 * To remove user
	 
	 http://localhost:8082/userLogin/{userId}
	 */
	
	@DeleteMapping("{userId}")
	public ResponseEntity<String> removeUser(@PathVariable String  userId) throws UserNotFoundException {
		logger.info("User removeUser()");
		try {
			loginService.removeUser(userId);
//			Optional<User> delUser = loginService.getUserById(userId);
			logger.info("Record Deleted with Id : " + userId);
			return new ResponseEntity<>(userId,HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Record NOT Deleted with Id : " + userId);
			return new ResponseEntity<>(userId,HttpStatus.EXPECTATION_FAILED);
		}
	}
}