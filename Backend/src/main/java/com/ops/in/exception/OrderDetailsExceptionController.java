package com.ops.in.exception;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice

public class OrderDetailsExceptionController {
	 @ExceptionHandler(value = OrderDetailsNotFoundException.class)
	   public ResponseEntity<Object> exception(OrderDetailsNotFoundException exception) {
	      return new ResponseEntity<>("OrderDetails Not Found", HttpStatus.NOT_FOUND);
	   }
	   @ExceptionHandler(value = OrderDetailsException.class)
	   public ResponseEntity<Object> exception(OrderDetailsException exception) {
	      return new ResponseEntity<>("Customer Bad request", HttpStatus.BAD_REQUEST);
	   }
	

}
