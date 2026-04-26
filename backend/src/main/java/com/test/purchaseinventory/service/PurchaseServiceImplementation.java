package com.test.purchaseinventory.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.purchaseinventory.dto.PurchaseDto;
import com.test.purchaseinventory.model.Product;
import com.test.purchaseinventory.model.Purchase;
import com.test.purchaseinventory.model.Supplier;
import com.test.purchaseinventory.repository.ProductRepository;
import com.test.purchaseinventory.repository.PurchaseRepository;
import com.test.purchaseinventory.repository.SupplierRepository;

@Service
public class PurchaseServiceImplementation implements PurchaseService {
	
	@Autowired
	PurchaseRepository purchaseRepo;
	
	@Autowired
	ProductRepository productRepo;
	
	@Autowired
	SupplierRepository supplierRepo;

	@Override
	public Purchase addPurchase(PurchaseDto purchaseDto) {
		
		Product product = productRepo.findByProductName(purchaseDto.getProductName());
		if(product == null) {
			throw new RuntimeException("Product not found: " + purchaseDto.getProductName());
		}
		
		Supplier supplier = supplierRepo.findBySupplierName(purchaseDto.getSupplierName());
		
		if(supplier == null) {
			throw new RuntimeException("Supplier not found: " + purchaseDto.getSupplierName());
		}
		
		Purchase purchase = new Purchase();
		purchase.setPurchasedQuantity(purchaseDto.getPurchasedQuantity());
		purchase.setPurchaseDate(purchaseDto.getPurchaseDate());
		purchase.setPurchasePrice(purchaseDto.getPurchasePrice());
		
		purchase.setProduct(product);
		purchase.setSupplier(supplier);
		
		product.setProductQuantity(product.getProductQuantity() + purchaseDto.getPurchasedQuantity());
		
		return purchaseRepo.save(purchase);
	}

	@Override
	public List<Purchase> getAllPurchase() {
		
		List<Purchase> purchases = purchaseRepo.findAll();
		// TODO Auto-generated method stub
		return purchases;
	}
	
	@Override
	public Purchase getPurchaseById(Integer id) {
		Purchase purchase = purchaseRepo.findById(id).orElseThrow( () -> new RuntimeException("There is no puchase with id "+ id) );
		
		return purchase;
	}

	@Override
	public Purchase deletePurchase(Integer id) {
		  Purchase purchase = getPurchaseById(id);

		    Product product = purchase.getProduct();
		    int updatedQty = product.getProductQuantity() - purchase.getPurchasedQuantity();
		    if (updatedQty < 0) {
		        updatedQty = 0;
		    }
		    product.setProductQuantity(updatedQty);
		   // productRepo.save(product);
		    purchaseRepo.delete(purchase);
		    return purchase;
	}

	@Override
	public Purchase updatePurchaseById(Integer id, Purchase purchase) {
		// TODO Auto-generated method stub
		return null;
	}



}
