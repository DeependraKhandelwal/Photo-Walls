package com.ops.in.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ops.in.entitie.Category;
import com.ops.in.entitie.Product;

public interface ICategoryRepository extends JpaRepository<Category,Integer>{
//	@Query("select p from Product p where p.productName=:productName")
//	public Optional<Product> viewProductByName(@Param("productName")String productName);
	@Query("select c from Category c where c.categoryName=:categoryName")
	public Optional<Category>viewProductListByCategoryName(@Param("categoryName")String categoryname);
	

}
