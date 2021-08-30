package com.ops.in.service;

import java.util.List;

import com.ops.in.pojo.InputAddress;

public interface IAddressService {

	public InputAddress addAddress(InputAddress add);
	public InputAddress updateAddress(InputAddress add);
	public InputAddress removeAddress(int addressId);
	public List<InputAddress> viewAllAddress();
	public InputAddress viewAddress(int addressId);	
	
	
}
