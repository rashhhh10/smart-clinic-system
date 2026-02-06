package com.smartclinic.service;

import com.smartclinic.dto.AuthResponseDTO;
import com.smartclinic.dto.RegisterRequestDTO;

public interface IUserService {
    AuthResponseDTO register(RegisterRequestDTO request);

    AuthResponseDTO login(String email, String password);
}
