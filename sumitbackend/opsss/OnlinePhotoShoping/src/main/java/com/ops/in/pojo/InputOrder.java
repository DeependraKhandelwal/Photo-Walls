package com.ops.in.pojo;

import java.time.LocalDate;
import java.util.Map;

import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ops.in.entitie.Address;
import com.ops.in.entitie.Customer;
import com.ops.in.entitie.Order;
import com.ops.in.entitie.Product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
 * this is a pojo class to provide input
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InputOrder {
	private Integer orderId;

	private String orderStatus;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate orderDate;
	private Integer addressId;
	private Integer customerId;

}
