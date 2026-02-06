package com.smartclinic.service;

import com.smartclinic.dto.AuthResponseDTO;
import com.smartclinic.dto.RegisterRequestDTO;
import com.smartclinic.model.Doctor;
import com.smartclinic.model.Role;
import com.smartclinic.model.User;
import com.smartclinic.repository.DoctorRepository;
import com.smartclinic.repository.UserRepository;
import com.smartclinic.security.JwtUtil;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    @Transactional
    public AuthResponseDTO register(RegisterRequestDTO request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole());
        user.setPhone(request.getPhone());

        user = userRepository.save(user);

        if (request.getRole() == Role.DOCTOR) {
            Doctor doctor = new Doctor();
            doctor.setUser(user);
            doctor.setSpecialization(request.getSpecialization());
            doctor.setExperience(request.getExperience());
            doctor.setConsultationFee(request.getConsultationFee());
            doctor.setAvailability(request.getAvailability());
            doctorRepository.save(doctor);
        }

        String token = jwtUtil.generateToken(user.getEmail());
        return new AuthResponseDTO(token, user.getRole(), user.getId(), user.getName());
    }

    @Override
    public AuthResponseDTO login(String email, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        String token = jwtUtil.generateToken(user.getEmail());
        return new AuthResponseDTO(token, user.getRole(), user.getId(), user.getName());
    }
}
