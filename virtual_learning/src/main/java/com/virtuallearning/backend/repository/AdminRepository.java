package com.virtuallearning.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.virtuallearning.backend.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{

}
