package com.ops.in.service;



import java.math.BigDecimal;

import com.ops.in.pojo.CartInfo;
import com.ops.in.pojo.InputCart;
import com.ops.in.pojo.OutputCart;


public interface ICartService {

	
	public  CartInfo removeProductFromCart(Integer cartId,Integer productId);
	public  OutputCart makeCartEmpty(Integer cartId);
	public OutputCart updateProductQuantity(Integer cartId, Integer productId,int quantity);
	public  CartInfo  viewAllProducts(Integer cartId);
	public OutputCart addProductToCart(InputCart cart);
	
}
