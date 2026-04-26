package com.test.purchaseinventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.purchaseinventory.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	Product findByProductName(String name);

}
