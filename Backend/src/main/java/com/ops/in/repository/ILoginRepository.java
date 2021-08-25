package com.ops.in.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ops.in.entities.User;


public interface ILoginRepository extends JpaRepository<User, String> {

	/*public User addUser(User user);
	public User removeUser(User user);
	public User validateUser(User user);
	public User signOut(User user);*/

	
	@Query("select u from User u where u.userId=:userId and u.password=:password")
    public User findValidateUser(@Param("userId")String userId, @Param("password")String password);


	@Query("select u.password from User u where u.userId=:userId")
	public String getPassword(@Param("userId") String userId);
	
	

}