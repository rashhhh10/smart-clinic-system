package com.rkmart.service;

import com.rkmart.model.User;
import com.rkmart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User register(User user) {
        return userRepository.save(user);
    }

    public User login(String email, String password) {
        // Simple password check (In real app, use BCrypt)
        return userRepository.findByEmail(email)
                .filter(u -> u.getPassword().equals(password))
                .orElse(null);
    }

    public List<User> getAllVendors() {
        return userRepository.findByRole(User.Role.VENDOR);
    }
}
