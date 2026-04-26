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
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	
	private String productName;
	
	private String productCategory;
	
	private double productPrice;
	
	private int productQuantity;
	
	@OneToMany(mappedBy = "product")
	@JsonIgnore
	private List<Purchase> purchases;
	
	

}
