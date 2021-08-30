package com.ops.in.service;

import java.util.List;

import com.ops.in.entitie.Product;


public interface IProductService {
 public List<Product> viewAllProducts();
 public Product addProduct(Product product);
 public Product updateProduct(Product product);
 public Product viewProduct(Integer id);
// public List<Product> viewProductsByCategory(String cat); 
 public Product removeProduct(Integer prodid);
 public Product viewProductByName(String name);
}
