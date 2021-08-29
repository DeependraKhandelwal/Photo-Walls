package com.ops.in.repository;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import com.ops.in.entitie.Category;

@SpringBootTest
//@DataJpaTest
public class ICategoryRepositoryTest {
	@Autowired
	private ICategoryRepository catrepo;

	@SuppressWarnings("deprecation")
	@Test
	@Order(1)
	public void testSaveCategory()
	{
		Category category = Category.builder().categoryName("Black Frame").categoryDescription("Polised with primeum black stain").build();
		Category savedCategoryObject= catrepo.save(category);
		System.out.println(savedCategoryObject);
		Assert.notNull(savedCategoryObject);
	}
	
	
	
	@Test
	@Order(2)
	public void testUpdateCategory()
	{
		Category category = Category.builder().categoryId(1).categoryName("Testupdate").categoryDescription("testdesupdate").build();
		Category updatedCategoryObject = catrepo.save(category);
		System.out.println(updatedCategoryObject);
		Assert.notNull(updatedCategoryObject);
	
	}
	
	@Test
	@Order(3)
	public void testDeleteCategory() 
	{
		
		catrepo.deleteById(3);
		
	}
	
	@Test
	@Order(4)
    public void getAllCategoryUnitTest()
    {
    	catrepo.findAll();
        assertNotNull(catrepo.findAll(), "Category Found!!");
    }
    
    @Test
    @Order(5)
    public void getCategoryByIdUnitTest()
    {
    	
        assertTrue(catrepo.findById(1).isPresent());

    }
	
}
