package com.virtuallearning.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.virtuallearning.backend.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long>{

}


