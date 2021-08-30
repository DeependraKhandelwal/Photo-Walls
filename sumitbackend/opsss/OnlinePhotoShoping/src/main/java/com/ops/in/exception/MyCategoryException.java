package com.ops.in.exception;


public class MyCategoryException extends RuntimeException{

		/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

		public MyCategoryException() {
			super();
		}
		
		public MyCategoryException(String msg)
		{
			super(msg);
		}
}
