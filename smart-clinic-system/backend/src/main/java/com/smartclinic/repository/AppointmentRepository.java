package com.smartclinic.repository;

import com.smartclinic.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByUserId(Long userId);

    List<Appointment> findByDoctorId(Long doctorId);
}
