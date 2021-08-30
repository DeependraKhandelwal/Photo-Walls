package com.ops.in.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ops.in.entitie.ShippingInfo;

public interface IShippingInfoRepository extends JpaRepository<ShippingInfo,Integer>
{

}
