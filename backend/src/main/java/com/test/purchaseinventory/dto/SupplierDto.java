package com.test.purchaseinventory.dto;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class SupplierDto {
	
	private String supplierName;
	
	private String supplierAddress;
	
	private String supplierContact;
	

}
