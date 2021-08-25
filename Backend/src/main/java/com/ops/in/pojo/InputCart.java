package com.ops.in.pojo;

import javax.persistence.Embeddable;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table

public class InputCart {
	@NotNull(message =" quantity should not be empty")
	@Min(value=1,message="Quantity should be greater than zero")
	private int quantity;
	 private Integer customerId;
	 private Integer cartId;
	 private Integer productId;
}
