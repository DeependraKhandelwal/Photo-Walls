package com.ops.in.entitie;

import java.util.List;
import java.util.Map;
import java.util.Set;



import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.ops.in.pojo.CartInfo;
import com.ops.in.pojo.InputCart;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
//@Builder
@Table(name="PAYMENT")
public class Payment extends InputCart {

	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	@Column(name="PAYMENT_ID")
	private Integer paymentId;
	
	private Integer shippingCost;
	
	
//	@NotNull(message="quantity should not empty")
//	@Column(name="QUANTITY")
//	private Integer quantity;
	
//	@NotNull(message="unitCost should not empty")
//	@Column(name="UNIT_COST")
//	private Double unitCost;
	@OneToOne
	@JoinColumn(name="SHIPPING_INFO_ID")
	private ShippingInfo shippingInfo;
	
	@NotNull(message="subTotal should not empty")
	@Column(name="SUB_TOTAL")
	private Double subTotal;
	
	//@OneToMany(cascade = CascadeType.ALL)
	//@JoinColumn(name = "PRODUCT_ID")
	//private Set<Product> product;

	
	
//	@ManyToMany
//	@JoinColumn(name= "ORDERED_PRODUCTS")
//	private Map<Product,Integer>products;
	
	
//	@Embedded
//	private InputCart cartIp;
	

	
}
