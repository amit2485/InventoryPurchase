package com.test.purchaseinventory.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.purchaseinventory.dto.ProductDto;
import com.test.purchaseinventory.model.Product;
import com.test.purchaseinventory.repository.ProductRepository;

@Service
public class ProductServiceImplementation implements ProductService {
	
	@Autowired
	ProductRepository productRepo;

	@Override
	public Product addProduct(ProductDto productDto) {
		
		Product product = new Product();
		product.setProductName(productDto.getProductName());
		product.setProductCategory(productDto.getProductCategory());
		product.setProductPrice(productDto.getProductPrice());
		product.setProductQuantity(productDto.getProductQuantity());
		// TODO Auto-generated method stub
		return productRepo.save(product);
	}

	@Override
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		List<Product> products = productRepo.findAll();
		return products;
	}

	@Override
	public Product getProductById(Integer id) {
		// TODO Auto-generated method stub
		Product product = productRepo.findById(id).orElseThrow( () -> new RuntimeException("There is no product with id "+ id) );
		return product;
	}

	@Override
	public Product updateProduct(Integer id, Product product) {
		// TODO Auto-generated method stub
		Product product1 = getProductById(id);
		
		if(product.getProductName()!= null) {
			product1.setProductName(product.getProductName());
		}
		
		if(product.getProductCategory()!= null) {
			product1.setProductCategory(product.getProductCategory());
		}
		if(product.getProductPrice() != 0) {
			product1.setProductPrice(product.getProductPrice());
		}
		
		if(product1.getProductQuantity()!= 0) {
			product1.setProductQuantity(product.getProductQuantity());
		}
		return productRepo.save(product1);
	}

	@Override
	public Product deleteProduct(Integer id) {
		// TODO Auto-generated method stub
		Product product1 = getProductById(id);
		productRepo.delete(product1);
		return product1;
	}

}
