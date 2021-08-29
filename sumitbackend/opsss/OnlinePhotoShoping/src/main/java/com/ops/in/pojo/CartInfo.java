package com.ops.in.pojo;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;
@Data
public class CartInfo {
	List<ProductItem> productList= new ArrayList<ProductItem>();
//	Double total;
}

