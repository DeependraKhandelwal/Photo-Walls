package com.ops.in.service.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ops.in.entitie.ShippingInfo;
import com.ops.in.exception.ShippingInfoException;
import com.ops.in.pojo.ShippingType;
import com.ops.in.repository.IShippingInfoRepository;
import com.ops.in.service.IShippingInfoService;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



@Service
public class IShippingInfoServiceImpl implements IShippingInfoService
{
	private static final Logger logger = LoggerFactory.getLogger(IShippingInfoService.class);
	
	 /*
     * shippingInfoRepository Injection
	*/
	@Autowired
	private IShippingInfoRepository shippingInfoRepo;
	
	
	
	@Override
	public ShippingInfo saveShippingInfo(ShippingInfo shippinginfo) throws ShippingInfoException
	{
		logger.info("Trying to add shippingInfo in service layer "+ shippinginfo);
	
		if(shippinginfo.getShippingType().equals(ShippingType.FAST)) {
			shippinginfo.setShippingCost(60D);
		}else {
			shippinginfo.setShippingCost(0D);
		}
		
		return shippingInfoRepo.save(shippinginfo);
	}

	@Override
	public List<ShippingInfo> getShippingInfoList() throws ShippingInfoException {
		logger.info("Trying to fetch all Customer in service layer ");
		
		return shippingInfoRepo.findAll();
	} 

	@Override
	public Optional<ShippingInfo> getShippingInfoById(Integer shippingId) throws ShippingInfoException {
		logger.info("Trying to fetch Customer in service layer ");

		return shippingInfoRepo.findById(shippingId);
		
	}
		
	//Deleting order by Providing ShippingId
	@Override
	public void deleteShippingInfo(Integer shippinginfo) throws ShippingInfoException
	{
		
				logger.info("Trying to delete User in service layer ");
				shippingInfoRepo.deleteById(shippinginfo);
		}

	@Override
	public ShippingInfo updateShippingInfo(ShippingInfo shippinginfo, Integer shippingId) throws ShippingInfoException {
		logger.info("Trying to update ShippngInfo in service layer ");
	     Integer shippinginfoId = shippinginfo. getShippingId();
	     shippinginfo.setShippingId(shippingId);
	 		return shippingInfoRepo.save(shippinginfo);	
	}
		
	}






	




	

	



