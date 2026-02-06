package com.smartclinic.dto;

import com.smartclinic.model.Role;
import lombok.Data;

@Data
public class RegisterRequestDTO {
    private String name;
    private String email;
    private String password;
    private Role role;
    private String phone;

    // For Doctor registration
    private String specialization;
    private Integer experience;
    private Double consultationFee;
    private String availability;
}
