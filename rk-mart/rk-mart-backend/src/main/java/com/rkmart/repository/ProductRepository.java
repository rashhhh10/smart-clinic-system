package com.rkmart.repository;

import com.rkmart.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByVendorId(Long vendorId);

    List<Product> findByCategory(String category);

    List<Product> findByNameContainingIgnoreCase(String name);
}
