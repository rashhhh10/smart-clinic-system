package com.smartclinic.dto;

import com.smartclinic.model.Role;
import lombok.Data;

@Data
public class AuthRequestDTO {
    private String email;
    private String password;
}
