package com.smartclinic.controller;

import com.smartclinic.service.DoctorService;
import com.smartclinic.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/doctors")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private TokenService tokenService;

    @GetMapping("/{id}/availability")
    public ResponseEntity<List<LocalDateTime>> getDoctorAvailability(
            @PathVariable Long id,
            @RequestParam String date,
            @RequestHeader("Authorization") String token) {

        if (!tokenService.validateToken(token)) {
            return ResponseEntity.status(401).build();
        }

        List<LocalDateTime> times = doctorService.getAvailableTimeSlots(id, date);
        return ResponseEntity.ok(times);
    }
}
