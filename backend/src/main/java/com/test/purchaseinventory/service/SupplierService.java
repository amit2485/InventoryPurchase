package com.test.purchaseinventory.service;

import java.util.List;

import com.test.purchaseinventory.dto.SupplierDto;
import com.test.purchaseinventory.model.Supplier;

public interface SupplierService {
	
	public Supplier addSupplier(SupplierDto supplierDto);
	
	public List<Supplier> getAllSuppliers();
	
	public Supplier getSupplierById(Integer id);
	
	public Supplier updateSupplierById(Integer id, Supplier supplier);
	
	public Supplier deleteSupplier(Integer id);
	
	

}
