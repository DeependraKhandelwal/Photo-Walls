package com.ops.in.service.impl;

import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ops.in.entitie.User;
import com.ops.in.exception.UserNotFoundException;
import com.ops.in.repository.ILoginRepository;
import com.ops.in.service.ILoginService;

@Service
public class ILoginServiceImpl implements ILoginService {

	//ILoginRepository Injection
	@Autowired
	ILoginRepository loginRepo;
	Logger logger = LoggerFactory.getLogger(ILoginServiceImpl.class);


	@Override
	@Transactional
	public User addUser(User user) {
		logger.info("User addUser()");
		if(user == null)
			throw new UserNotFoundException();
		else {
			loginRepo.save(user);
			return user;
		}
	}

	@Override
	@Transactional
	public User removeUser(String userId) {
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
	@Transactional
	public User validateUser(String userId) {
		logger.info("User validateUser()");
		String pass = loginRepo.getPassword(userId);
		User u = loginRepo.findValidateUser(userId,pass);
		if(u == null)
			throw new UserNotFoundException();
		else
			return u;	
		}
	
	
	@Override
	@Transactional
	public User userLogin(String userId, String password) {
		
		logger.info("User userLogin()");
		
		User user=loginRepo.findValidateUser(userId,password) ;
		if(user==null) {
			throw new UserNotFoundException();
		}
		else
		return user;	
	
	}


	@Override
	@Transactional
	public User signOut(User user) {
		
				return null;
	}
}
	