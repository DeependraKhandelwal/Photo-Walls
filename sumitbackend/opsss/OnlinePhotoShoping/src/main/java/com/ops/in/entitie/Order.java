package com.ops.in.entitie;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)						//generating Id's automatically
	@Column(name = "ORDER_ID")
	private Integer orderId;

	@NotEmpty(message="orderStatus should not be empty")				//performing JSR validation
	@Column(name = "ORDER_STATUS")										//column name in database will be ORDER_STATUS
	private String orderStatus;

	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Calcutta")
	@Column(name = "ORDER_DATE")										//column name in database will be ORDER_DATE
	private LocalDate orderDate;

	@ManyToOne
	@JoinColumn(name="addressId")			//new column with addressId as a foreign key will be created in the order table
	private Address address;

	@ManyToOne
	@JoinColumn(name="customerId")
	private Customer customer;

	@ElementCollection
	private Map<Product, Integer> products = new HashMap<Product, Integer>();	//Used Map to represent product with quantity 

}
