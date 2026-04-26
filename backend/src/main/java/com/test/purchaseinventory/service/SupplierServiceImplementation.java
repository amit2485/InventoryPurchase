package com.test.purchaseinventory.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.purchaseinventory.dto.SupplierDto;
import com.test.purchaseinventory.model.Supplier;
import com.test.purchaseinventory.repository.SupplierRepository;

@Service
public class SupplierServiceImplementation implements SupplierService {
	
	@Autowired
	public SupplierRepository supplierRepo;

	@Override
	public Supplier addSupplier(SupplierDto supplierDto) {
		Supplier supplier = new Supplier();
		supplier.setSupplierName(supplierDto.getSupplierName());
		supplier.setSupplierAddress(supplierDto.getSupplierAddress());
		supplier.setSupplierContact(supplierDto.getSupplierContact());
		// TODO Auto-generated method stub
		return supplierRepo.save(supplier) ;
	}

	@Override
	public List<Supplier> getAllSuppliers() {
		// TODO Auto-generated method stub
		List<Supplier> suppliers = supplierRepo.findAll();
		return suppliers;
	}

	@Override
	public Supplier getSupplierById(Integer id) {
		// TODO Auto-generated method stub
		Supplier supplier = supplierRepo.findById(id).orElseThrow( () -> new RuntimeException("There is no supplier with id "+ id) );
		
		return supplier;
	}

	@Override
	public Supplier updateSupplierById(Integer id, Supplier supplier) {
		
		Supplier supplier1 = getSupplierById(id);
		
		if(supplier.getSupplierName() != null) {
			supplier1.setSupplierName(supplier.getSupplierName());
		}
		if(supplier.getSupplierContact() != null) {
			supplier1.setSupplierContact(supplier.getSupplierContact());
		}
		if(supplier.getSupplierAddress() != null) {
			supplier1.setSupplierAddress(supplier.getSupplierAddress());
		}
		// TODO Auto-generated method stub
		return supplierRepo.save(supplier1);
	}

	@Override
	public Supplier deleteSupplier(Integer id) {
		Supplier supplier = getSupplierById(id);
		supplierRepo.delete(supplier);
		return supplier;
	}

}
