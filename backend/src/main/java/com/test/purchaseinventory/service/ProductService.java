package com.test.purchaseinventory.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.test.purchaseinventory.dto.ProductDto;
import com.test.purchaseinventory.model.Product;


public interface ProductService {
	
	public Product addProduct(ProductDto productDto);
	
	public List<Product> getAllProducts();
	
	public Product getProductById(Integer id);
	
	public Product updateProduct(Integer id, Product product);
	
	public Product deleteProduct(Integer id);
	


}
