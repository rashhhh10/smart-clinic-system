package com.smartclinic.controller;

import com.smartclinic.dto.AuthRequestDTO;
import com.smartclinic.dto.AuthResponseDTO;
import com.smartclinic.dto.RegisterRequestDTO;
import com.smartclinic.dto.ResponseDTO;
import com.smartclinic.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private IUserService userService;

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO<AuthResponseDTO>> register(@RequestBody RegisterRequestDTO request) {
        AuthResponseDTO response = userService.register(request);
        return ResponseEntity.ok(ResponseDTO.success("User registered successfully", response));
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO<AuthResponseDTO>> login(@RequestBody AuthRequestDTO request) {
        AuthResponseDTO response = userService.login(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(ResponseDTO.success("Login successful", response));
    }
}
