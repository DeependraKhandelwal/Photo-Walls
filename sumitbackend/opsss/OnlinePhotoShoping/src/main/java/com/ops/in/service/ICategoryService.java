package com.ops.in.service;

import java.util.List;
import java.util.Optional;

import com.ops.in.entitie.Category;
import com.ops.in.entitie.Product;
import com.ops.in.pojo.CategoryInput;
import com.ops.in.pojo.OutputCategory;

public interface ICategoryService {
 
	public Category saveCategory(Category category);
	public Optional<Category> getSingleCategory(Integer categoryId);
	public void deleteCategory(Integer categoryId);
	public Category updateCategory(Category category,Integer categoryId);
	public List<Category> getCategoryList();
	public OutputCategory addProductToCategory(CategoryInput category);
	List<Product> viewProductListByCategoryName(String name);
}
