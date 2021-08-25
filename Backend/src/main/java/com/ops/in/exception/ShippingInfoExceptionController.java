package com.ops.in.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class ShippingInfoExceptionController 
{
	   @ExceptionHandler(value = ShippingInfoNotFoundException.class)
	   public ResponseEntity<Object> exception(ShippingInfoNotFoundException exception) {
	      return new ResponseEntity<>("Shippinginfo not found", HttpStatus.NOT_FOUND);
	   }
	   @ExceptionHandler(value = ShippingInfoException.class)
	   public ResponseEntity<Object> exception(ShippingInfoException exception) {
	      return new ResponseEntity<>("Shippinginfo Bad request", HttpStatus.BAD_REQUEST);
	   }
}
