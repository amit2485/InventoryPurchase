package com.test.purchaseinventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.purchaseinventory.dto.ProductDto;
import com.test.purchaseinventory.model.Product;
import com.test.purchaseinventory.service.ProductService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class ProductController {
	
	@Autowired
	public ProductService productService;
	
	@PostMapping("/product")
	public ResponseEntity<Product> addProductController(@RequestBody ProductDto productDto){
		
		Product product = productService.addProduct(productDto);
		
		return new ResponseEntity<Product> (product,HttpStatus.CREATED);
	}
	
	@GetMapping("/product")
	public List<Product> getAllProductController(){
		
		List<Product> products = productService.getAllProducts();
		
		return products;
	}
	
	@GetMapping("/product/{id}")
	public Product getProductById(@PathVariable Integer id) {
		
		Product product = productService.getProductById(id);
		
		return product;
		
	}
	
	@PutMapping("/product/{id}")
	public ResponseEntity<Product> updateProductControllerById(@PathVariable Integer id, @RequestBody Product product){
		Product product1 = productService.updateProduct(id, product);
		
		return new ResponseEntity<Product>(product1,HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/product/{id}")
	public Product deleteProductController(@PathVariable Integer id) {
		Product product = productService.deleteProduct(id);
		
		return product;
	}

}
