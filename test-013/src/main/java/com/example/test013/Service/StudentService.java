package com.example.test013.Service;

import com.example.test013.Entity.Students;
import com.example.test013.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private  StudentRepo studentRepo;

    public Students saveStudent(Students student) {
        return studentRepo.save(student);
    }


    public List<Students> getStudent() {
        return studentRepo.findAll();
    }

    public Students updateStudent(Students student) {
        Students updateStudent = studentRepo.findById(student.getId()).orElse(null);
        if (updateStudent!= null) {
            updateStudent.setName(student.getName());
            updateStudent.setMark(student.getMark());
            studentRepo.save(updateStudent);
            return updateStudent;
        }
        return null;
    }

    public String deleteStudent(int id) {
        studentRepo.deleteById(id);
        return id+ "--Student deleted  🗑️";
    }

}
