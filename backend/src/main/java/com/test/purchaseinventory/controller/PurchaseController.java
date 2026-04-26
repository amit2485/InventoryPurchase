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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.purchaseinventory.dto.PurchaseDto;
import com.test.purchaseinventory.model.Purchase;
import com.test.purchaseinventory.model.Supplier;
import com.test.purchaseinventory.service.PurchaseService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class PurchaseController {
	
	@Autowired
	PurchaseService purchaseService;
	
	@PostMapping("/purchase")
	public ResponseEntity<Purchase> addPurchaseController(@RequestBody PurchaseDto purchaseDto){
		
		Purchase purchase = purchaseService.addPurchase(purchaseDto);
		
		return new ResponseEntity<Purchase>(purchase,HttpStatus.CREATED);
		
	}
	
	@GetMapping("/purchase")
	public List<Purchase> getAllPurchaseController(){
		List<Purchase> purchases = purchaseService.getAllPurchase();
		
		return purchases;
	}
	
	@GetMapping("/purchase/{id}")
	public Purchase getPurchaseByIdController(@PathVariable Integer id) {
		Purchase purchase = purchaseService.getPurchaseById(id);
		
		return purchase;
	}
	
	@DeleteMapping("/purchase/{id}")
	public ResponseEntity<String> deletePurchaseController(@PathVariable Integer id) {
		purchaseService.deletePurchase(id);
		
		return new ResponseEntity<>("purchase deleted successfully", HttpStatus.OK);
	}
	


}
