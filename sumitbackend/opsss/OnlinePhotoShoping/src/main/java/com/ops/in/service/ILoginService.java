package com.ops.in.service;

import com.ops.in.entitie.User;

public interface ILoginService {
	
	public User addUser(User user);
	public User removeUser(String user);
	public User validateUser(String userId);
	public User signOut(User user);
	public User userLogin(String userId, String password);
}
