//package com.ops.in.service.impl;
//
//import static org.assertj.core.api.Assertions.assertThat;
//import static org.junit.jupiter.api.Assertions.*;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.ops.in.entitie.Category;
//import com.ops.in.entitie.Product;
//import com.ops.in.repository.IProductRepository;
//import com.ops.in.service.impl.IProductServiceImpl;
//
//
//
//	@SpringBootTest
//	class IProductServiceImplTest {
//	    
//	    @InjectMocks
//	    IProductServiceImpl productServiceImpl;
//	    @Mock
//	    IProductRepository productRepo;
//
//	 
//
//	    @Test
//	    public void addProductMockTest() {
//	        Product product = Product.builder().productName("Ipone").productId(88).price(4334).quantity(33).build();
//	       
//	        
//	        
//	        Mockito.when(productRepo.save(product)).thenReturn(product);
//	        assertThat(productServiceImpl.addProduct(product)).isEqualTo(product);
//	    }
//	    
//	    @Test
//	    public void updateProducMockTest() {
//	    	  Product product = Product.builder().productName("Ipone").productId(88).price(4334).quantity(33).build();
//		       
//		        
//	       
//	        
//	        Mockito.when(productRepo.findById(product.getProductId())).thenReturn(Optional.of(product));
//	        
//	        product.setQuantity(10);
//	        Mockito.when(productRepo.save(product)).thenReturn(product);
//	        
//	        assertThat(productServiceImpl.updateProduct(product)).isEqualTo(product);        
//	    }
//	    
//	    @Test
//	    public void removeProductMockTest() {
//	    	  Product product = Product.builder().productName("Ipone").productId(88).price(4334).quantity(33).build();
//		       
//		        
//	        
//	        Mockito.when(productRepo.findById(product.getProductId())).thenReturn(Optional.of(product));
//	        Mockito.when(productRepo.existsById(product.getProductId())).thenReturn(false);
//	       assertFalse(productRepo.existsById(product.getProductId()));    
//	    }
//	    
//	    @Test
//	    public void viewProductMockTest() {
//	    	  Product product = Product.builder().productName("Ipone").productId(88).price(4334).quantity(33).build();
//		       
//		        
//	       
//	        
//	        Mockito.when(productRepo.findById(product.getProductId())).thenReturn(Optional.of(product));
//	        assertThat(productServiceImpl.viewProduct(product.getProductId())).isEqualTo(product);
//	    }
//	    
//	    @Test
//	    public void viewAllProductsMockTest() {
//	    	  Product product1 = Product.builder().productName("Ipone").productId(88).price(4334).quantity(33).build();
//		       
//		        
//	        
//	    	  Product product2 = Product.builder().productName("Iponxe").productId(8).price(434).quantity(33).build();
//		       
//		        
//	        
//	        List<Product> plist = new ArrayList<>();
//	        plist.add(product1); plist.add(product2);
//	        
//	        Mockito.when(productRepo.findAll()).thenReturn(plist);
//	        assertThat(productServiceImpl.viewAllProducts()).isEqualTo(plist);
//	        
//	    }
//
//	 
//
//	}