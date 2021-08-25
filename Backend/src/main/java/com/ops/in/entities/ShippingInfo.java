package com.ops.in.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;


import com.ops.in.pojo.ShippingType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "SHIPPING_INFO")
public class ShippingInfo 
{
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	private Integer shippingId;
	
	//@NotEmpty(message="shippingType should not empty")
	@Column(name = "SHIPPING_TYPE")
	@Enumerated(EnumType.STRING)
    private ShippingType shippingType;
	
	//@NotNull(message="Shippingcost should not empty")
	@Column(name = "SHIPPING_COST")
	private Double shippingCost;
	
}

