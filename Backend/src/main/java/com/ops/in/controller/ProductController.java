package com.ops.in.controller;

import java.util.List;

import javax.validation.Valid;

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

import com.ops.in.entities.Product;
import com.ops.in.service.IProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	IProductService productService;
	Logger logger = LoggerFactory.getLogger(ProductController.class);


	//To add product
	@PostMapping(path="/createproduct")
    public Product addProduct(@Valid @RequestBody Product product) {
        logger.info("Product addProduct");
        return productService.addProduct(product);
    }
	//To update product details
	@PutMapping(path="/updateproduct")
    public Product updateProduct( @RequestBody Product product) {
		logger.info("Product updateProduct");
        return productService.updateProduct(product);
    }
	//To delete product by id
	@DeleteMapping(path="/deleteproductById/{productId}")
    public Product removeProduct( @PathVariable Integer productId) {
		logger.info("Product removeProduct");
        return productService.removeProduct(productId);
    }
	//To get all products
	@GetMapping(path = "/getallproduct")
    public List<Product> viewAllProducts(){
        logger.info("product viewAllProducts");
        
        return productService.viewAllProducts();
    }
	//To get products by id
	@GetMapping(path = "/getproductById/{productId}")
    public Product viewProduct(@PathVariable Integer productId){
        logger.info("product viewProduct");
        
        return productService.viewProduct(productId);
    }

	@GetMapping(path = "/getproductByName/{name}")
    public Product viewProductByName(@PathVariable String name){
        logger.info("product viewProduct");
        
        return productService.viewProductByName(name);
    }

}