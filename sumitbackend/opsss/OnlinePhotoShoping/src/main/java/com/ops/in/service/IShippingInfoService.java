package com.ops.in.service;
import java.util.List;
import java.util.Optional;
import com.ops.in.entitie.ShippingInfo;
import com.ops.in.exception.ShippingInfoException;



public interface IShippingInfoService {

	public ShippingInfo saveShippingInfo(ShippingInfo shippinginfo) throws ShippingInfoException;
	
	public List<ShippingInfo> getShippingInfoList() throws ShippingInfoException;
	
	public Optional<ShippingInfo> getShippingInfoById(Integer shippingId) throws ShippingInfoException;
	
	public ShippingInfo updateShippingInfo(ShippingInfo shippinginfo, Integer shippingId) throws ShippingInfoException;//Throws ShippingInfo Exception

	public void deleteShippingInfo(Integer shippinginfo) throws ShippingInfoException;//Throws ShippingInfo Exception
	

}
