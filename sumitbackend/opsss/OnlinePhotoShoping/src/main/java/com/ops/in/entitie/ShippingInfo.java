package com.ops.in.entitie;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

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
	
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name ="orderId_fk")
//	private Order order;

//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name ="Address_fk")
//	private Address Address;
//	

	
	
	
	
	
	
/*
	public Integer getShippingId() {
		return shippingId;
	}

	public void setShippingId(Integer shippingId) {
		this.shippingId = shippingId;
	}



	public String getShippingType() {
		return shippingType;
	}



	public void setShippingType(String shippingType) {
		this.shippingType = shippingType;
	}



	public Double getShippingCost() {
		return shippingCost;
	}



	public void setShippingCost(Double shippingCost) {
		this.shippingCost = shippingCost;
	}



	public Order getOrder() {
		return order;
	}



	public void setOrder(Order order) {
		this.order = order;
	}



	@Override
	public String toString() {
		return "ShippingInfo [shippingId=" + shippingId + ", shippingType=" + shippingType + ", shippingCost="
				+ shippingCost + ", getShippingId()=" + getShippingId() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}



	public ShippingInfo() {
		super();
		this.shippingId = shippingId;
		this.shippingType = shippingType;
		this.shippingCost = shippingCost;
	}



	public ShippingInfo(Integer shippingId, @NotEmpty(message = "shippingType should not empty") String shippingType,
			@NotEmpty(message = "Shippingcost should not empty") Double shippingCost) {
		super();
		this.shippingId = shippingId;
		this.shippingType = shippingType;
		this.shippingCost = shippingCost;
	}


*/
	
	









	






	
}

