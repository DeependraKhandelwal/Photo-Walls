package com.ops.in.entitie;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "USERS")
public class User {
	
	
//    @Id
//  @GeneratedValue(strategy = GenerationType.AUTO)
//    @NotNull(message="User Id should not empty")
//    @Column(name="USER_ID")
//	private String userName
//    
//    private String userRole;
////    @NotEmpty(message="password should not empty")
////    @Column(name="PASSWORD")
//	private String password
    
//    @NotEmpty(message="role should not empty")
//    @Column(name="ROLE")
	 @Id
	@Column
	@NotNull(message="User Id should not empty")
	private String userName;
	

	@Column
	@NotNull(message="User Id should not empty")
	private String userRole;
	
	@Column
	@NotNull(message="User Id should not empty")
	private String password;
		
}
