package com.test.purchaseinventory.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class Supplier {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int supplierId;
	
	private String supplierName;
	
	private String supplierAddress;
	
	private String supplierContact;
	
	@OneToMany(mappedBy = "supplier")
	@JsonIgnore
	private List<Purchase> purchases;

}
