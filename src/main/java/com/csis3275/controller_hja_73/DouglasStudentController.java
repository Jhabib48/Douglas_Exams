package com.csis3275.controller_hja_73;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.csis3275.model_hja_73.DouglasStudent;
import com.csis3275.model_hja_73.StudentDAO;

// This is for student data stored for login 

@RestController
@RequestMapping("/users")
public class DouglasStudentController {

	@Autowired
	StudentDAO studentDAO;
	
	// List student
	@GetMapping("/list")
	public List<DouglasStudent> studentList() {
		return studentDAO.readDouglasStudent();
	}
	
	//Check if the user being created exist - email 
	//Add student
	@GetMapping("/add")
	public DouglasStudent addStudent( DouglasStudent student) {
		return studentDAO.addDouglasStudent(student); 
	}
	
	//Delete
	@GetMapping("/delete")
	public void deleteStudent( DouglasStudent student) {
		 studentDAO.deleteDouglasStudent(student.getId());
	}
	
	//Find
	@GetMapping("/find")
	public DouglasStudent findStudent(DouglasStudent student) {
		return studentDAO.findDouglasStudent(student.getId());
	}
	
	//Update
	@GetMapping("/update")
	public DouglasStudent updateDouglasStudent(DouglasStudent student) {
		return studentDAO.updateDouglasStudent(student); 
	}
}
