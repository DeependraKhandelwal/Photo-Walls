package com.ops.in.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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
@Builder					//The builder pattern provides a build object which is used to construct a complex object called the customer.
@Table(name = "CUSTOMER")
public class Customer {
	    
		@Id					//primary key
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private Integer customerId;
	 
		@NotEmpty(message= "First Name can not be null")
		private String firstName;
		
		@NotEmpty(message= "Last Name can not be null")
		private String lastName;
		
		@NotEmpty(message= "mobileNumber can not be null")
		@Size(min = 10, message="Mobile no should be in 10 digits")
		private String mobileNumber;
		
		@NotEmpty(message= "email can not be null")
		@Column(unique = true)
		private String email;
		
		@NotEmpty(message= "Password can not be null")
		private String password;
		

		@OneToOne(cascade = CascadeType.ALL)
		@JoinColumn(name = "address")
		private Address address;
		
		@OneToMany(cascade = CascadeType.ALL,mappedBy = "customer")
		private List<Order> orderlist = new ArrayList<Order>();
		
		@OneToOne(cascade = CascadeType.ALL,mappedBy = "customer")
		private Cart cart;
	
}

	