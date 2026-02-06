package com.smartclinic.exception;

import com.smartclinic.dto.ResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ResponseDTO<Void>> handleRuntimeException(RuntimeException ex) {
        return ResponseEntity.badRequest().body(ResponseDTO.error(ex.getMessage()));
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ResponseDTO<Void>> handleBadCredentials(BadCredentialsException ex) {
        return ResponseEntity.status(401).body(ResponseDTO.error("Invalid email or password"));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ResponseDTO<Void>> handleException(Exception ex) {
        return ResponseEntity.status(500).body(ResponseDTO.error("Internal Server Error: " + ex.getMessage()));
    }
}
