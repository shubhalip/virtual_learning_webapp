package com.virtuallearning.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.virtuallearning.backend.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long>{

}