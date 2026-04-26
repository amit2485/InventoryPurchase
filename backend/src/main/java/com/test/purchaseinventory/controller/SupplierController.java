package com.test.purchaseinventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.purchaseinventory.dto.SupplierDto;
import com.test.purchaseinventory.model.Supplier;
import com.test.purchaseinventory.service.SupplierService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class SupplierController {
	
	@Autowired
	SupplierService supplierService;
	
	@PostMapping("/supplier")
	public ResponseEntity<Supplier> addSupplierController(@RequestBody SupplierDto supplierDto ) {
		//TODO: process POST request
		Supplier supplier = supplierService.addSupplier(supplierDto);
		return new ResponseEntity<Supplier>(supplier,HttpStatus.CREATED);
	}
	
	
	@GetMapping("/supplier")
	public List<Supplier> getAllSupplierController() {
		
		List<Supplier> suppliers = supplierService.getAllSuppliers();
		
		return  suppliers;
		
	}
	
	@GetMapping("/supplier/{id}")
	public Supplier getSupplierByIdController(@PathVariable Integer id) {
		Supplier supplier = supplierService.getSupplierById(id);
		
		return supplier;
	}
	
	@PutMapping("/supplier/{id}")
	public ResponseEntity<Supplier> updateSupplierController(@PathVariable Integer id, @RequestBody Supplier supplier){
		Supplier supplier1 = supplierService.updateSupplierById(id, supplier);
		
		return new ResponseEntity<Supplier>(supplier1, HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/supplier/{id}")
	public ResponseEntity<String> deleteSupplierController(@PathVariable Integer id) {
		supplierService.deleteSupplier(id);
		
		return new ResponseEntity<>("Supplier deleted successfully", HttpStatus.OK);
	}
	

}
