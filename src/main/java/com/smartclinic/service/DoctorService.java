package com.smartclinic.service;

import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;

@Service
public class DoctorService {

    public List<LocalDateTime> getAvailableTimeSlots(Long doctorId, String date) {
        // Mock logic
        List<LocalDateTime> slots = new ArrayList<>();
        slots.add(LocalDateTime.parse(date + "T09:00:00"));
        slots.add(LocalDateTime.parse(date + "T10:00:00"));
        return slots;
    }

    public Map<String, Object> validateLogin(String email, String password) {
        // Mock logic
        if ("doctor@test.com".equals(email) && "pass".equals(password)) {
            return Map.of("status", "success", "role", "DOCTOR");
        }
        return Map.of("status", "error", "message", "Invalid credentials");
    }
}
