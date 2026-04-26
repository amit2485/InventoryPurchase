package com.test.purchaseinventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.purchaseinventory.model.Purchase;

public interface PurchaseRepository extends JpaRepository<Purchase, Integer> {

}
