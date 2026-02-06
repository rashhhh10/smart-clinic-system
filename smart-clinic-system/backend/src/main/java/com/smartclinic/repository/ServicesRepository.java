package com.smartclinic.repository;

import com.smartclinic.model.Services;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicesRepository extends JpaRepository<Services, Long> {
}
