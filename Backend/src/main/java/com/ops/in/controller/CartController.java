package com.ops.in.controller;

import javax.validation.Valid;
//import
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ops.in.pojo.CartInfo;
import com.ops.in.pojo.InputCart;
import com.ops.in.pojo.OutputCart;
import com.ops.in.service.ICartService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;


@RestController
@RequestMapping("/shoppingcart")
@Api(description = "This is CartController used to perform operation on Cart.")
public class CartController {
	@Autowired(required=true)
	ICartService cartService;
	Logger logger = LoggerFactory.getLogger(CartController.class);
	
	
	/*  To Add Cart
	 *  http://localhost:8082/shoppingcart/addcart
	 */
	
	@PostMapping("/addcart")
	@ApiOperation(value = "This is addProductToCart() method to add product to cart")
	public OutputCart addProductToCart1(@Valid @RequestBody InputCart cart)
	{
		logger.info("Cart addProductToCart()");
		return cartService.addProductToCart(cart);
	}
	
	
	/*  To Update Cart
	 *  http://localhost:8082/shoppingcart/updatecart/1/2/18
	 */

	@PutMapping("/{cartId}/{productId}/{quantity}")
	@ApiOperation(value = "This is updateProductQuantity() method to update product in cart")
	public OutputCart updateProductQuantity(@Valid @PathVariable Integer cartId, @PathVariable Integer productId, @PathVariable int quantity)
	{
		logger.info("Cart updateProductToCart()");
		return cartService.updateProductQuantity(cartId, productId, quantity);
	}
	
	/*  To delete Cart by id
	 *  http://localhost:8082/shoppingcart/1/2
	 */

	@DeleteMapping("/{productId}/{cartId}")
	@ApiOperation(value = "This is removeProductFromCart() method to remove product to cart")
	public CartInfo removeProductFromCart(@Valid @PathVariable Integer cartId,@PathVariable Integer productId)
	{
		logger.info("Cart removeProductFromCart()");
		return cartService.removeProductFromCart(cartId, productId);
	}
	
	/*  To empty Cart by cartid
	 *  http://localhost:8082/shoppingcart/emptycart/1
	 */
	
	@DeleteMapping("/{cartId}")
	@ApiOperation(value = "This is makeCartEmpty() method to make cart empty")
	public OutputCart makeCartEmpty(@Valid @PathVariable Integer cartId)
	{
		logger.info("Cart makeCartEmpty()");
		return cartService.makeCartEmpty( cartId);
	}
	
	/*  To empty Cart by cartid
	 *  http://localhost:8082/getcartproducts/emptycart/1
	 */
	
	@GetMapping("/{cartId}")
	@ApiOperation(value = "This is viewAllProducts() method to make cart empty")
	public CartInfo viewAllProducts(@Valid @PathVariable Integer cartId)
	{
		logger.info("Cart viewAllProducts()");
		return cartService.viewAllProducts(cartId);
		
	}

}
