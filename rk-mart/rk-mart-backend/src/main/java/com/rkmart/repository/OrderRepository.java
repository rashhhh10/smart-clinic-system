package com.rkmart.repository;

import com.rkmart.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomerId(Long customerId);
    // Complex query might be needed to find orders containing products from a
    // specific vendor
}
