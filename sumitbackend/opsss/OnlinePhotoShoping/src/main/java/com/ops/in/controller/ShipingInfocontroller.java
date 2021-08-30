package com.ops.in.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ops.in.entitie.ShippingInfo;
import com.ops.in.exception.ShippingInfoNotFoundException;
import com.ops.in.repository.IShippingInfoRepository;
import com.ops.in.service.IShippingInfoService;



import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping(value = "/ShippingInfo")

public class ShipingInfocontroller {
	private static final Logger logger = LoggerFactory.getLogger(ShipingInfocontroller.class);	

	@Autowired
	private IShippingInfoService shippinginfoService;
	
	// http://localhost:8082/ShippingInfo/saveShippingInfo
	@PostMapping(path = "/saveShippingInfo")
	public ResponseEntity<ShippingInfo> saveShippingInfo( @RequestBody ShippingInfo shippinginfo) throws ShippingInfoNotFoundException {
		try {
			logger.info("Trying to add Record  : " + shippinginfo);
			ShippingInfo saveShippingInfo = shippinginfoService.saveShippingInfo(shippinginfo);
			return new ResponseEntity<>(shippinginfo, HttpStatus.CREATED);
		} catch (Exception e) {
			logger.error("Record NOT Added  : " + shippinginfo);
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
			
		}
	}
		
    // http://localhost:8082/ShippingInfo

	@GetMapping(produces = "application/json")
	public ResponseEntity<List<ShippingInfo>> getAllshippingInfo() throws ShippingInfoNotFoundException {
		logger.info("Trying to fetch User list ");
		try {
			List<ShippingInfo> shippingInfo =  shippinginfoService.getShippingInfoList();

			if (shippingInfo.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		  	}
			return new ResponseEntity<>(shippingInfo, HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Record NOT found : ");
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}

	// http://localhost:8082/ShippingInfo/1	
	// value passed along with url ,variable passed along with path
		@GetMapping(path = "/{id}", produces = "application/json")
		
		public ResponseEntity<ShippingInfo> getUserById(@PathVariable Integer id) throws ShippingInfoNotFoundException {
			Optional<ShippingInfo> shippingInfo = null;
			logger.info("Trying to search Record with Id : " + id);
			try {
				shippingInfo = shippinginfoService.getShippingInfoById(id);

				if (shippingInfo.isPresent()) {
					return new ResponseEntity<>(shippingInfo.get(), HttpStatus.OK);
				} else {
					return new ResponseEntity<>(HttpStatus.NOT_FOUND);
				}
			} catch (Exception e) {
				logger.error("Record NOT Found with Id : " + id);
				return new ResponseEntity<ShippingInfo>(new ShippingInfo(), HttpStatus.EXPECTATION_FAILED);
			}
		}
		
		
		// http://localhost:8082/ShippingInfo/1
		@PutMapping("/{id}")
		public ResponseEntity<Object> updateCustomer(@RequestBody ShippingInfo shippinginfo, @PathVariable Integer id)
				throws ShippingInfoNotFoundException {
			logger.info("trying to update user : " + shippinginfo);
			try {
				Optional<ShippingInfo> shippingInfoFound = shippinginfoService.getShippingInfoById(id);

				if (shippingInfoFound.isPresent()) {
					shippinginfoService.updateShippingInfo(shippinginfo,id);
					System.out.println("Record Updated : " + shippinginfo);
					return ResponseEntity.ok(shippinginfo);
				} else {
					return new ResponseEntity<>("Record NOT updated with Id : " + shippinginfo,HttpStatus.NO_CONTENT);
				}
			} catch (Exception e) {
				logger.error("Record NOT updated with Id : " + shippinginfo);
				return new ResponseEntity<>("Record NOT updated with Id : " + shippinginfo, HttpStatus.EXPECTATION_FAILED);
			}

		}
		
		// http://localhost:8082/ShippingInfo/1
		@DeleteMapping("/{id}")
		public ResponseEntity<String> deleteCustomer(@PathVariable Integer id) throws ShippingInfoNotFoundException {
			
			try {
				shippinginfoService.deleteShippingInfo(id);
				Optional<ShippingInfo> deleteShippingInfo = shippinginfoService.getShippingInfoById(id);
				logger.info("Record Deleted with Id : " + id);
				return new ResponseEntity<>("Record Deleted...with id : "+id,HttpStatus.OK);
			} catch (Exception e) {
				logger.error("Record NOT Deleted with Id : " + id);
				return new ResponseEntity<>("Record not found with id : "+id,HttpStatus.EXPECTATION_FAILED);
			}
		}

	

}