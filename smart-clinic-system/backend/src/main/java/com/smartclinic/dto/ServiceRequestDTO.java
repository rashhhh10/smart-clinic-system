package com.smartclinic.dto;

import lombok.Data;

@Data
public class ServiceRequestDTO {
    private String name;
    private String description;
    private Double price;
    private Boolean available;
    private String imageUrl;
}
