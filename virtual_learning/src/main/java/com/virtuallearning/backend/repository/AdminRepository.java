package com.virtuallearning.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.virtuallearning.backend.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{

	@Query("FROM Admin a WHERE a.email = :email")
	Admin findByEmail(String email);
}
