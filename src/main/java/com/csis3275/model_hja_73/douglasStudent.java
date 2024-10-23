package com.csis3275.model_hja_73;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="students")
public class douglasStudent {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id; 
	private int studentID; 
	private String studentFirstName; 
	private String studentLastName; 
	private String studentProgram;
	
	public douglasStudent() {}
	
	public douglasStudent( String studentFirstName, String studentLastName, String studentProgram) {
		super();
		this.studentFirstName = studentFirstName;
		this.studentLastName = studentLastName;
		this.studentProgram = studentProgram;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getStudentID() {
		return studentID;
	}
	public void setStudentID(int studentID) {
		this.studentID = studentID;
	}
	public String getStudentFirstName() {
		return studentFirstName;
	}
	public void setStudentFirstName(String studentFirstName) {
		this.studentFirstName = studentFirstName;
	}
	public String getStudentLastName() {
		return studentLastName;
	}
	public void setStudentLastName(String studentLastName) {
		this.studentLastName = studentLastName;
	}
	public String getStudentProgram() {
		return studentProgram;
	}
	public void setStudentProgram(String studentProgram) {
		this.studentProgram = studentProgram;
	} 
	
	

}
