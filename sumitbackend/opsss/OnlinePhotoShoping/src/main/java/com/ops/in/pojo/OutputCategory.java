package com.ops.in.pojo;

import java.util.List;

import com.ops.in.entitie.Product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OutputCategory {

	public Integer categoryid;
	public List<Product> productlist;
	
	
	
}
