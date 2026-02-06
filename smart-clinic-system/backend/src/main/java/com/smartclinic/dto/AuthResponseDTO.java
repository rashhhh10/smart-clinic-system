package com.smartclinic.dto;

import com.smartclinic.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponseDTO {
    private String token;
    private Role role;
    private Long userId;
    private String name;
}
