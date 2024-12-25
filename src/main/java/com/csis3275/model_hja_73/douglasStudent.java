package com.csis3275.model_hja_73;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="students")
public class DouglasStudent {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id; 
	private String studentFirstName; 
	private String studentLastName; 
	private String studentPassword; 
	private String studentEmail; 
	
	public DouglasStudent() {}
	
	public DouglasStudent( String studentFirstName, String studentLastName, String password, String studentEmail) {
		super();
		this.studentFirstName = studentFirstName;
		this.studentLastName = studentLastName;
		this.studentEmail = studentEmail; 
		this.studentPassword = password; 
	}

	public String getStudentPassword() {
		return studentPassword;
	}

	public void setStudentPassword(String studentPassword) {
		this.studentPassword = studentPassword;
	}

	public String getStudentEmail() {
		return studentEmail;
	}

	public void setStudentEmail(String studentEmail) {
		this.studentEmail = studentEmail;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
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
	
}
