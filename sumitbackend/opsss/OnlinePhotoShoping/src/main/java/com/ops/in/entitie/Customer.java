package com.ops.in.entitie;

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
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Builder;
import lombok.Data;
@Entity

public class Customer {
	    @Id
	    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "customer_seq")
	    @SequenceGenerator(sequenceName = "customer_seq", allocationSize = 1, name = "customer_seq")
		private Integer customerId;
	 
//		@NotEmpty(message= "First Name can not be null")
		private String firstName;
		
//		@NotEmpty(message= "Last Name can not be null")
		private String lastName;
		
//		@NotEmpty(message= "mobileNumber can not be null")
//		@Size(min = 10, message="Mobile no should be in 10 digits")
		private String mobileNumber;
		
//		@NotEmpty(message= "email can not be null")
		@Column(unique = true)
		private String email;
		
//		@NotEmpty(message= "Password can not be null")
		private String password;
		
		@OneToOne(cascade = CascadeType.ALL)
		@JoinColumn(name = "address")
		private Address address;
		
		@OneToMany(cascade = CascadeType.ALL,mappedBy = "customer")
		private List<Order> orderlist = new ArrayList<Order>();
		
		@OneToOne(cascade = CascadeType.ALL,mappedBy = "customer")
		private Cart cart;
		
		
		
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public Integer getCustomerId() {
			return customerId;
		}
		public void setCustomerId(Integer customerId) {
			this.customerId = customerId;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public String getMobileNumber() {
			return mobileNumber;
		}
		public void setMobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		@JsonManagedReference
		public Address getAddress() {
			return address;
		}
		public void setAddress(Address address) {
			this.address = address;
		}
				public Cart getCart() {
			return cart;
		}
		public void setCart(Cart cart) {
			this.cart = cart;
		}
		public List<Order> getOrderlist() {
			return orderlist;
		}
		public void setOrderlist(List<Order> orderlist) {
			this.orderlist = orderlist;
		}
		
		
	
}

	