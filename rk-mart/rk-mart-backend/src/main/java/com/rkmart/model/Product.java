package com.rkmart.model;

import javax.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Double price;
    private Integer stock;
    private String category;

    @ElementCollection
    private List<String> imageUrls; // Multiple images

    private String videoUrl; // Single video

    private boolean isActive = true;

    @ManyToOne
    @JoinColumn(name = "vendor_id")
    private User vendor; // The vendor who created this
}
