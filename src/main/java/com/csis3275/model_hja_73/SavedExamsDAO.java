package com.csis3275.model_hja_73;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SavedExamsDAO {
	
	@Autowired
	ISavedExamRepository examRepo; 
	
	//READ
	public List<SavedExamData> readSavedExams(){
		return (List<SavedExamData>) examRepo.findAll();
	}
	
}
