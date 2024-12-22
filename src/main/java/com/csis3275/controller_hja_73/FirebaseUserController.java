package com.csis3275.controller_hja_73;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.csis3275.model_hja_73.DouglasStudent;
import com.csis3275.model_hja_73.FirebaseUserService;
import com.google.firebase.auth.UserRecord;

@RestController
@RequestMapping("/students")
public class FirebaseUserController {
	
	@Autowired
	private FirebaseUserService students; 
	
	@GetMapping("/createStudent")
	public UserRecord createUser(DouglasStudent student) {
		try {
			return students.createUserWithDetails(student.getStudentEmail(),
					student.getStudentPassword(), 
					student.getStudentFirstName() + " " + student.getStudentLastName(),
					String.valueOf(student.getStudentID())); 
		}
		catch(Exception e) {
			throw new RuntimeException("Error when creating student: " + e.getMessage()); 
		}
	}
	

}
