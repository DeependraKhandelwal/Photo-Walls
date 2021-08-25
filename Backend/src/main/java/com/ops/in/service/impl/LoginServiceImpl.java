package com.ops.in.service.impl;

import java.util.Optional;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ops.in.entities.User;
import com.ops.in.exception.UserException;
import com.ops.in.exception.UserNotFoundException;
import com.ops.in.repository.ILoginRepository;
import com.ops.in.service.ILoginService;

@Service
public class LoginServiceImpl implements ILoginService {

	//ILoginRepository Injection
	@Autowired
	ILoginRepository loginRepo;
	Logger logger = LoggerFactory.getLogger(LoginServiceImpl.class);


	@Override
	public User addUser(User user) throws UserException{
		logger.info("User addUser()");
		if(user == null)
			throw new UserNotFoundException();
		else {
			loginRepo.save(user);
			return user;
		}
	}

	@Override
	public User removeUser(String userId) throws UserException{
		logger.info("User removeUser()");
		Optional<User> users = loginRepo.findById(userId);
		if(!users.isPresent())
			throw new UserNotFoundException();
		else {
			loginRepo.deleteById(userId);
			return users.get();
		}
	}

	@Override
	public User validateUser(String userId) throws UserException{
		logger.info("User validateUser()");
		String pass = loginRepo.getPassword(userId);
		User u = loginRepo.findValidateUser(userId,pass);
		if(u == null)
			throw new UserNotFoundException();
		else
			return u;	
		}
	
	
	@Override
	public User userLogin(String userId, String password) throws UserException{
		
		logger.info("User userLogin()");
		
		User user=loginRepo.findValidateUser(userId,password) ;
		if(user==null) {
			throw new UserNotFoundException();
		}
		else
		return user;	
	
	}


	@Override
	public User signOut(User user) throws UserException{
		
				return null;
	}
}
	