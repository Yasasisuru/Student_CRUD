package com.example.test013.Repository;

import com.example.test013.Entity.Students;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Students,Integer> {

}
