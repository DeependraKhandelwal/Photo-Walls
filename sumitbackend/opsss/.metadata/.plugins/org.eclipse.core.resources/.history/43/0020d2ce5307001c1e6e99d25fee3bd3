package com.ops.in.entitie;



import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
@Id	
@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "product_seq")
@SequenceGenerator(sequenceName = "product_seq", allocationSize = 1, name = "product_seq")
private Integer productId;
@NotEmpty(message="Product name should not be null")
private String productName;
@NotNull(message ="Price should not be empty")
@Min(value=1,message="price should be greater than zero")
private Double price;
@NotEmpty(message="color should not be null")
private String color;
@NotEmpty(message="dimension should not be null")
private String dimension;
@NotEmpty(message="specification name should not be null")
private String specification;
@NotEmpty(message="manufacturer should not be null")
private String manufacturer;
@NotNull(message =" quantity should not be empty")
@Min(value=1,message="Quantity should be greater than zero")
private int quantity;
@Column(name = "product_img")
private String productImage;


}
