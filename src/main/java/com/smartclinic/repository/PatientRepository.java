package com.smartclinic.repository;

import com.smartclinic.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

    // Derived query method
    Optional<Patient> findByEmail(String email);

    // Custom query looking up by email or phone
    Optional<Patient> findByEmailOrPhoneNumber(String email, String phoneNumber);
}
