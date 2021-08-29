//package com.ops.in.service.impl;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//import static org.mockito.Mockito.when;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//
//import com.ops.in.entitie.Category;
//import com.ops.in.repository.ICategoryRepository;
//import com.ops.in.service.ICategoryService;
//
//@SpringBootTest
//public class CategoryServiceTest {
//
//	
//	
//	@Autowired
//	private ICategoryService catService;
//	@MockBean
//	private ICategoryRepository crepo;
//	
//	
//	@Test
//	public void testSaveCategory() {
//		Category c1 = new Category(2,"blue","colour in blue",null);
//		when(crepo.save(c1)).thenReturn(c1);
//		assertEquals(2,catService.saveCategory(c1).getCategoryId());
//		assertEquals(c1,catService.saveCategory(c1));
//		assertNotNull(catService.saveCategory(c1));
//	}
//	@Test
//	public void testUpdateCategory() {
//		
//		
//		Category c1 = new Category(2,"blue","colour in blue",null);
//		when(crepo.save(c1)).thenReturn(c1);
//		assertEquals(2,catService.updateCategory(c1, 2).getCategoryId());
//		assertEquals(c1,catService.saveCategory(c1));
//		assertNotNull(catService.saveCategory(c1));
//		
//		
//	}
//	@Test
//	public void testGetCategory() {
//		Category c1 = new Category(3,"Red","colour in Red",null);
//		crepo.save(c1);
//		when(crepo.getById(3)).thenReturn(c1);
////    	assertEquals(c1,catService.saveCategory(c1).getSingleCategory(3));
//		assertNotNull(catService.getSingleCategory(3));
//	}
//	
//	
//	
//	
//	
//	
//}
