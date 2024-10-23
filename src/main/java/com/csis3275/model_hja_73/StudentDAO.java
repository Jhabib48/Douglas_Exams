package com.csis3275.model_hja_73;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentDAO {
	
	@Autowired
	IStudentRepository studentRepo; 
	
	//Read
	public List<DouglasStudent> readDouglasStudent(){
		return (List<DouglasStudent>) studentRepo.findAll();
	}
	
	//CREATE 
	public DouglasStudent addDouglasStudent(DouglasStudent student) {
		return studentRepo.save(student);
	}
	
	//DELETE
	public void deleteDouglasStudent(Long id) {
		studentRepo.deleteById(id);
	}
	
	//FIND
	public DouglasStudent findDouglasStudent(Long id) {
		Optional<DouglasStudent> foundStudent = studentRepo.findById(id);
		DouglasStudent student = foundStudent.get();
		return student; 
	}
	
	//UPDATE
	public DouglasStudent updateDouglasStudent( DouglasStudent data) {
		Long id = data.getId(); 
		//this is the student we update
		Optional<DouglasStudent> optionalStudent = studentRepo.findById(id);
		
		if(optionalStudent.isPresent()) {
			DouglasStudent studentToUpdate = optionalStudent.get(); 
			studentToUpdate.setStudentEmail(data.getStudentEmail());
			studentToUpdate.setStudentFirstName(data.getStudentFirstName());
			studentToUpdate.setStudentLastName(data.getStudentLastName());
			studentToUpdate.setStudentProgram(data.getStudentProgram());
			return studentRepo.save(studentToUpdate);
		}
		else
	        throw new IllegalArgumentException("Student cannot be null or empty");
	}

}
