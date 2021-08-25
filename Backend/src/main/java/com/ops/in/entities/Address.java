package com.ops.in.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity						//Specify class is an entity and is mapped to a database table
@Data						//convenient shortcut annotation that bundles the features @toString @EqualsAndHashCode , @Getter / @Setter and @RequiredArgsConstructor together
@AllArgsConstructor         //generates a constructor with a parameter for each field in your class.
@NoArgsConstructor			//generate the default no-args constructor
@Builder
@Table(name = "ADDRESS")   //The builder pattern provides a build object which is used to construct a complex object called the product.
public class Address {
    
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "address_seq")
	@SequenceGenerator(sequenceName = "address_seq", allocationSize = 1, name = "address_seq")
	private int addressId;
	@NotEmpty(message="Street_no should not empty")
	private String streetNo;
	
	@NotEmpty(message="Building Name should not empty")
	private String buildingName;
	@NotEmpty(message="City should not empty")
	private String  city;
	
	@NotEmpty(message="State should not empty")
	private String state;
	@NotEmpty(message="Country should not empty")
	private String country;	
	@Size(min=6, max=10, message="Pincode should minimum be 6 and maximum 10")
	private String pincode;
	
	@OneToOne(mappedBy = "address")
	private Customer customer;
	
}
