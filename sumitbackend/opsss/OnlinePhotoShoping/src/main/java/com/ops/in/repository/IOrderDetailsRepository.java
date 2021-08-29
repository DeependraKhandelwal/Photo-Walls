package com.ops.in.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ops.in.entitie.Payment;


public interface IOrderDetailsRepository extends JpaRepository<Payment,Integer> {

	

}