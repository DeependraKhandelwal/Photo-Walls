package com.ops.in.pojo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ops.in.entitie.Address;
import com.ops.in.entitie.Customer;
import com.ops.in.entitie.Order;
import com.ops.in.entitie.Product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderInfo {

	private Integer orderId;
	private String orderStatus;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate orderDate;

	List<ProductItem> productList= new ArrayList<ProductItem>();

}
