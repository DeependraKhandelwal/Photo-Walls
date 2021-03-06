package com.ops.in.entities;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity						//Specify class is an entity and is mapped to a database table
@Data						//convenient shortcut annotation that bundles the features @toString @EqualsAndHashCode , @Getter / @Setter and @RequiredArgsConstructor together
@AllArgsConstructor         //generates a constructor with a parameter for each field in your class.
@NoArgsConstructor			//generate the default no-args constructor
@Builder
@Table(name = "CATEGORY")   //The builder pattern provides a build object which is used to construct a complex object called the category.
public class Category {

	@Id					    //it will act as a primary key
	@GeneratedValue(strategy =GenerationType.AUTO)         // all tables and only one sequence value can be consumed at a time 
	@Column(name="CATEGORY_ID")   						   // to create a column with a name in database
	private Integer categoryId;
	
	@NotEmpty(message="categoryname should not be null")   // to validate if input is empty
	@Column(name="CATEGORY_NAME")		
	private String categoryName;
	
	@NotEmpty(message="category discripition should not be null")
	@Column(name="CATEGORY_DESCRIPTION")
	private String categoryDescription;
	
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "Category_fk",referencedColumnName = "CATEGORY_ID")
    private List<Product> products;
    
    
}
