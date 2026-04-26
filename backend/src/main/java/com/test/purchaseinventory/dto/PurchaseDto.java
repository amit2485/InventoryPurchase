package com.test.purchaseinventory.dto;

import java.sql.Date;

import com.test.purchaseinventory.model.Product;
import com.test.purchaseinventory.model.Supplier;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
public class PurchaseDto {

    private Integer purchasedQuantity;
    private Date purchaseDate;

    private String productName;  
    private String supplierName;  

    private Double purchasePrice;
}