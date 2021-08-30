package com.ops.in.service.impl;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ops.in.entitie.Cart;
import com.ops.in.entitie.Category;
import com.ops.in.entitie.Product;
import com.ops.in.exception.CategorycNotfoundException;
import com.ops.in.exception.MyCategoryException;
import com.ops.in.exception.ProductNotFoundException;
import com.ops.in.pojo.CategoryInput;
import com.ops.in.pojo.OutputCategory;
import com.ops.in.pojo.ProductItem;
import com.ops.in.repository.ICategoryRepository;
import com.ops.in.repository.IProductRepository;
import com.ops.in.service.ICategoryService;
@Service
public class CategoryServiceImpl implements ICategoryService {
	private static final Logger logger = LoggerFactory.getLogger(CategoryServiceImpl.class);
	@Autowired
	private ICategoryRepository crepo;
	@Autowired
	private IProductRepository prepo;
	@Override
	public Category saveCategory(Category category) 
	throws MyCategoryException {
		logger.info("Trying to add Category in service layer "+ category);
		Category cat = crepo.save(category);
		return cat;
	}

	@Override
	public Optional<Category> getSingleCategory(Integer categoryId) 
	throws MyCategoryException {
		logger.info("Trying to fetch User in service layer ");
		Optional<Category> findId = crepo.findById(categoryId);
		return findId;
	}

	@Override
	public void deleteCategory(Integer categoryId) 
	throws MyCategoryException {
		logger.info("Trying to remove Category in service layer ");
		 crepo.deleteById(categoryId);
	}


	@Override	
	public Category updateCategory(Category category,Integer categoryId)  
	throws MyCategoryException{
		logger.info("Trying to Update Category in service layer ");
		category.setCategoryId(categoryId);
		return crepo.save(category); 
	}
	@Override
	public List<Category> getCategoryList() 
	throws MyCategoryException{
		logger.info("Trying to fetch all the categorys in service layer");
		return crepo.findAll();
	}

	@Override
	public OutputCategory addProductToCategory(CategoryInput categoryip) {
		logger.info("Trying to fetch all the categorys in service layer");
		Category category = crepo.findById(categoryip.getCategoryId()).orElse(null);
		Product product = prepo.findById(categoryip.getProductId()).orElse(null);
		
		List<Product>list=category.getProducts();
		list.add(product);
		category= crepo.save(category);
		OutputCategory op = new OutputCategory();
		op.setCategoryid(categoryip.getCategoryId());
		list=category.getProducts();
		op.setProductlist(list);
		return op;
	}

	@Override
	@Transactional
	public List<Product> viewProductListByCategoryName(String name) {
		logger.info("Product viewProductByName()");
		Category viewProductList = crepo.viewProductListByCategoryName(name).orElse(null);
//		if(viewproduct==null)
//			throw new CategorycNotfoundException();
//		else
//			return 
			
		return viewProductList.getProducts();
	
	}
	
	
	
}
