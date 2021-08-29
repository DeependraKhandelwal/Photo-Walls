package com.ops.in.service.impl;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.ops.in.entitie.Cart;
import com.ops.in.entitie.Category;
import com.ops.in.entitie.Customer;
import com.ops.in.entitie.Product;
import com.ops.in.pojo.CartInfo;
import com.ops.in.repository.ICartRepository;
import com.ops.in.repository.ICategoryRepository;
import com.ops.in.repository.ICustomerRepository;
import com.ops.in.repository.IProductRepository;
import com.ops.in.service.ICartService;
import com.ops.in.service.ICategoryService;
import com.ops.in.service.impl.ICartServiceImpl;

class ICartServiceImplTest {


     
    @Autowired
 	private ICartService cartService;
 	@MockBean
 	private ICartRepository cartrepo;
 	@MockBean
 	private IProductRepository prepo;
 	@MockBean
 	private ICustomerRepository crepo;
 	
// 	@Test
// 	private void addProductToCartTest() {
// 		
// 		Category c1 = new Category(2,"blue","colour in blue",null);
//		when(crepo.save(c1)).thenReturn(c1);
//		assertEquals(2,catService.saveCategory(c1).getCategoryId());
//		assertEquals(c1,catService.saveCategory(c1));
//		assertNotNull(catService.saveCategory(c1));
// 		
 	
//		Product p = Product.builder()
//				.quantity(9)
//				.productId(22)
//				.productName("fhdjf")
//				.dimension("dfj")
//				.manufacturer("dfd")
//				.price(34).build();
//		Customer c = Customer.builder()
//				.customerId(33)
//				.firstName("dkjf")
//				.mobileNumber("1234567898").email("dfjh").address(null).build();
//		Cart c =new Cart(44,Map<p.getProductId(22),23>,c.getCustomer(33));
//				
 				
 //}
     
//     @Test 
//        public void removeProductFromCartUnitTest()
//        {
//            CartInfo cart =service.removeProductFromCart(3,1);
//            assertNotNull(cart, "Product removed from cart !!");
//        }
//        
//        @Test
//        public void makeCartEmptyUnitTest()
//        {
//            Cart cart =service.makeCartEmpty(1);
//            assertNotNull(cart, "Products removed from cart !!");
//        }
//        @Test
//        public void viewAllProductsByIdUnitTest()
//        {
//            Map<Integer,Integer> cart =service.viewAllProducts(1);
//            assertNotNull(cart, "Product removed from cart !!");
//        }
        
        
}