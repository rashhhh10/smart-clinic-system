package com.rkmart.controller;

import com.rkmart.model.Review;
import com.rkmart.model.Complaint;
import com.rkmart.repository.ReviewRepository;
import com.rkmart.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/support")
@CrossOrigin(origins = "*")
public class SupportController {
    @Autowired
    private ReviewRepository reviewRepo;
    @Autowired
    private ComplaintRepository complaintRepo;

    // Reviews
    @PostMapping("/reviews")
    public Review addReview(@RequestBody Review review) {
        return reviewRepo.save(review);
    }

    @GetMapping("/reviews/product/{productId}")
    public List<Review> getProductReviews(@PathVariable Long productId) {
        return reviewRepo.findByProductId(productId);
    }

    // Complaints
    @PostMapping("/complaints")
    public Complaint raiseComplaint(@RequestBody Complaint complaint) {
        return complaintRepo.save(complaint);
    }

    @GetMapping("/complaints")
    public List<Complaint> getAllComplaints() {
        return complaintRepo.findAll();
    }
}
