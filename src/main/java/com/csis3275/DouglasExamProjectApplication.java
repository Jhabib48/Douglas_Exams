package com.csis3275;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.csis3275.model_hja_73.DouglasStudent;
import com.csis3275.model_hja_73.FirebaseUserService;
import com.csis3275.model_hja_73.StudentDAO;

@SpringBootApplication
public class DouglasExamProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(DouglasExamProjectApplication.class, args);
	}
	
	@Bean
	CommandLineRunner douglasStudentData( StudentDAO doa) {
		return (args) -> {
			doa.addDouglasStudent( new DouglasStudent("John", "Doe", "CSIS", "test@hotmail.ca")); 
		}; 
	}
	

//	@Bean
//	CommandLineRunner douglasStudentLoadData(FirebaseUserService student) {
//		return (args)->{
//			try {
//				student.createUserWithDetails("asd@outlook.com", "asd123", "Habib Javed", "10000");
//			}
//			catch(Exception e) {
//				e.printStackTrace();
//				throw new RuntimeException("Error while adding new student to firebase: " + e.getMessage()); 
//			}
//		};
//	}

}
