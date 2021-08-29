package com.ops.in.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class OrderExceptionController {
	@ExceptionHandler(value = OrderNotFoundException.class)
	   public ResponseEntity<Object> exception(OrderNotFoundException exception) {
	      return new ResponseEntity<>("Order not found", HttpStatus.NOT_FOUND);
	   }
	   @ExceptionHandler(value = MyOrderException.class)
	   public ResponseEntity<Object> exception(MyOrderException exception) {
	      return new ResponseEntity<>("Orders Bad request", HttpStatus.BAD_REQUEST);
	   }

}
