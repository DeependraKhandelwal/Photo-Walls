package com.ops.in.exception;

public class MyOrderException extends Exception {
private static final long serialVersionUID = 1L;
	
	public MyOrderException() {
		super();
	}

	public MyOrderException(String message) {
		super(message);

	}
}
