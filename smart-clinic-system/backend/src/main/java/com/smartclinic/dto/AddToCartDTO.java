package com.smartclinic.dto;

import lombok.Data;

@Data
public class AddToCartDTO {
    private Long serviceId;
    private Integer quantity;
}
