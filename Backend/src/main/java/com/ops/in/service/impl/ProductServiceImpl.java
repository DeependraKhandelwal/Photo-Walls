package com.ops.in.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ops.in.entities.Product;
import com.ops.in.exception.ProductNotFoundException;
import com.ops.in.repository.IProductRepository;
import com.ops.in.service.IProductService;


@Service
public class ProductServiceImpl implements IProductService{
	@Autowired
	IProductRepository proRepo;
	Logger logger = LoggerFactory.getLogger(ProductServiceImpl.class);
	
	
	//To add product
	@Override
	@Transactional
	public Product addProduct(Product product) {
		logger.info("Product addProduct");
		if(product == null)
			throw new ProductNotFoundException();
		else
			proRepo.save(product);
		return product;
	}

    //To view all products
	@Transactional
	@Override
	public List<Product> viewAllProducts() {
		logger.info("Product ProductviewAllProducts");
		List<Product> list = proRepo.findAll();
		if(list.isEmpty())
			throw new ProductNotFoundException();
		else
		return list;
	}

	
    //To update product details
	@Override
	@Transactional
	public Product updateProduct(Product product) {
		logger.info("Product updateProduct");
		if(product == null)
			throw new ProductNotFoundException();
		else
			proRepo.save(product);
		return product;
	}
    
	//To view products by id
	@Override
	@Transactional
	public Product viewProduct(Integer productId) {
		logger.info("Product viewProduct");
		Optional<Product> viewproduct = proRepo.findById(productId);
		if(viewproduct.isPresent())
			return viewproduct.get();
		else
			throw new ProductNotFoundException();
	}
	
//    //To view products by category
//	@Override
//	@Transactional
//	public List<Product> viewProductsByCategory(String category) {
//		logger.info("Product viewProduct");
//		List<Product> viewproduct = proRepo.viewAllProductsByCategory(category);
//		if(viewproduct.isEmpty())
//			 throw new ProductNotFoundException();
//		else
//			return viewproduct;
//			
//	}


    //To remove products by id
	@Override
	@Transactional
	public Product removeProduct(Integer productId) {
		logger.info("Product removeProduct");
		Optional<Product> pro = proRepo.findById(productId);
		if(pro.isPresent()) {
			proRepo.deleteById(productId);
			return pro.get();
		}
		else {
			throw new ProductNotFoundException();
		}
			
	}
	@Override
	@Transactional
	public Product viewProductByName(String name) {
		logger.info("Product viewProductByName()");
		Optional<Product> viewproduct = proRepo.viewProductByName(name);
		if(viewproduct==null)
			throw new ProductNotFoundException();
		else
			return viewproduct.get();
			
	
	}
	

}