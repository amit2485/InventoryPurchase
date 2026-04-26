package com.test.purchaseinventory.dto;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class ProductDto {
	
	
	private String productName;
	
	private String productCategory;
	
	private Double productPrice;
	
	private Integer productQuantity;

}
