package com.example.test013.Controller;

import com.example.test013.Entity.Students;
import com.example.test013.Repository.StudentRepo;
import com.example.test013.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired
    private StudentService studentService;
    @Autowired
    private StudentRepo studentRepo;


    // studentsd add
    @PostMapping("/addStudents")
    public Students addStudent(@RequestBody Students student) {
        return studentService.saveStudent(student);
    }

    @GetMapping("/getStudent")
    public List<Students> getStudent() {
        return studentService.getStudent();
    }

    @PutMapping("/updateStudent")
   public Students updateStudentDetails(@RequestBody Students student) {
        return studentService.updateStudent(student);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteStudent(@PathVariable Integer id) {
        return studentService.deleteStudent(id);
    }



}
