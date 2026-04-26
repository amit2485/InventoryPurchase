package com.test.purchaseinventory.service;

import java.util.List;

import com.test.purchaseinventory.dto.PurchaseDto;
import com.test.purchaseinventory.model.Purchase;
import com.test.purchaseinventory.model.Supplier;

public interface PurchaseService {
	
	public Purchase addPurchase(PurchaseDto purchaseDto);
	
	public List<Purchase> getAllPurchase();
	
	public Purchase getPurchaseById(Integer id);
	
	public Purchase deletePurchase(Integer id);
	
	public Purchase updatePurchaseById(Integer id, Purchase purchase);

}
