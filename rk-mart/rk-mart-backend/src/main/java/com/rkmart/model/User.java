package com.rkmart.model;

import javax.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    private String password;
    private String name;
    private String phone;
    private String address;

    @Enumerated(EnumType.STRING)
    private Role role; // ADMIN, VENDOR, CUSTOMER

    private boolean isVerified = false; // For Vendors

    // For Vendors: Store specific details like "Shop Name" in a JSON string or
    // separate field
    private String shopName;

    public enum Role {
        ADMIN, VENDOR, CUSTOMER
    }
}
