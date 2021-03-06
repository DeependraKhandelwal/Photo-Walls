package com.ops.in.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.ops.in.service.ICategoryService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.val;

import com.ops.in.entitie.Category;
import com.ops.in.entitie.Product;
import com.ops.in.exception.CategorycNotfoundException;
import com.ops.in.pojo.CategoryInput;
import com.ops.in.pojo.InputCart;
import com.ops.in.pojo.OutputCart;
import com.ops.in.pojo.OutputCategory;

@CrossOrigin(origins="*")
@RestController							//used to build rest api and provide restful web services
@RequestMapping(value = "/category")    //specify the request path
@Api(description = "This is CategoryController used to perform oprations on Category.")
public class CategoryController {
	private static final Logger logger = LoggerFactory.getLogger(CategoryController.class);
	
	@Autowired
	private ICategoryService categoryService;
	
	//http://localhost:8082/swagger-ui.html#/
	// http://localhost:8082/category
	
	//   {
    //     "categoryName":"green",
    //     "categoryDescription":"natural color"
    //   }

	@PostMapping(produces = "application/json",consumes = "application/json")
	@ApiOperation(value = "This is saveCategory() method, to save category in database table")
	public ResponseEntity<String> saveCategory( @Valid @RequestBody Category category) throws CategorycNotfoundException
	{
		
		try {
			logger.info("Trying to save new category"+ category);
			Category savedCat=categoryService.saveCategory(category);
			return new ResponseEntity<String>("Created",HttpStatus.CREATED);
		}
		catch(Exception e){
			logger.error("Category Not Added :"+ category);
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
			
		}
		
		// ResponseEntity represents whole http response status code ,headers, body.
	}
	
	/*
	 * http://localhost:8080/category
	 * 
	 */
	@GetMapping(produces = "application/json")
	@ApiOperation(value = "This is getAllCategory() method, to fetch all categorys from database table")
	public ResponseEntity<List<Category>> getAllCategory() throws CategorycNotfoundException {
		logger.info("Trying to fetch User list ");
		try {
			List<Category> category = categoryService.getCategoryList();
			if (category.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(category, HttpStatus.OK);
		    } 
		catch (Exception e) {
			logger.error("Record NOT found : ");
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		    }
	
	}
	
	//  http://localhost:8080/category/2
	//  value passed along with url ,variable passed along with path
	@GetMapping(value = "/{id}")
	@ApiOperation(value = "This is getCategoryById() method, to fetch single cateory based on id form Databale.")
	public ResponseEntity<Category> getCategoryById(@PathVariable("id") Integer categoryid) throws CategorycNotfoundException {
		try {
			logger.info("Trying to search Record with Id : %s",categoryid);
		Optional<Category> category = categoryService.getSingleCategory(categoryid);
		return new ResponseEntity<>(category.get(), HttpStatus.OK);
		}
		catch(Exception e) {
			logger.error("Record NOT found with Id : " + categoryid);
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
		
	}
	//  http://localhost:8080/category/2		
	@DeleteMapping("/{id}")
	@ApiOperation(value = "This is deleteCategory() method , provide input id to delete the category.")
	public ResponseEntity<Integer> deleteCategory(@PathVariable ("id") Integer categoryid) throws CategorycNotfoundException {
		
		try {
			categoryService.deleteCategory(categoryid);
			logger.info("Record Deleted with Id : " + categoryid);
			return new ResponseEntity<>(categoryid,HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Record NOT Deleted with Id : " + categoryid);
			return new ResponseEntity<>(500,HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	
	//  http://localhost:8080/category/2
	@PutMapping("/{id}")
	@ApiOperation(value = "This is updateCategory() method, to update category in database table for given id.")
	public ResponseEntity<Object> updateCategory( @Valid @RequestBody Category category, @PathVariable("id")Integer categoryId)
			throws CategorycNotfoundException {
		logger.info("trying to update user : " + category);
		try {
			Optional<Category> categoryfound = categoryService.getSingleCategory(categoryId);

			if (categoryfound.isPresent()) {
				categoryService.updateCategory(category,categoryId);
				logger.info("Record Updated : " + category);
				return ResponseEntity.ok(category);
			} else {
				return new ResponseEntity<>("Record NOT updated with Id : " + category,HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			logger.error("Record NOT updated with Id : %s",category);
			return new ResponseEntity<>("Record NOT updated with Id : " + category, HttpStatus.EXPECTATION_FAILED);
		}

	}
	
	@PostMapping("/addcategory")
	public OutputCategory addProductTOCategory(@Valid @RequestBody CategoryInput catip)
	{
		logger.info("Cart addProductToCategory()");
		return categoryService.addProductToCategory(catip);
	}
	
	
	@GetMapping("/getProductsByCategory/{name}")
	public List<Product>viewProductListByCategoryName(@PathVariable String name)
	throws CategorycNotfoundException{
		
		
		logger.info("Cart getProductByCategory()");
		return categoryService.viewProductListByCategoryName(name);
		
	}
	
	
}
