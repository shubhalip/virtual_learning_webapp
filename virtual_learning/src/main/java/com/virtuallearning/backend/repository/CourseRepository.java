package com.virtuallearning.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.virtuallearning.backend.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long>{

}