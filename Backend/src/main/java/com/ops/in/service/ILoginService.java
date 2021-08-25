package com.ops.in.service;

import com.ops.in.entities.User;
import com.ops.in.exception.UserException;

public interface ILoginService {
	
	public User addUser(User user) throws UserException;
	public User removeUser(String user) throws UserException;
	public User validateUser(String userId) throws UserException;
	public User signOut(User user) throws UserException;
	public User userLogin(String userId, String password) throws UserException;
}
