package com.smartclinic.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class AppointmentRequestDTO {
    private Long doctorId;
    private String date; // ISO Date String
}
