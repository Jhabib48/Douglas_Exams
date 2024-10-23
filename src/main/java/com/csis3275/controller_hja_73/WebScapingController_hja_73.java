package com.csis3275.controller_hja_73;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.csis3275.model_hja_73.Exam;
import com.csis3275.model_hja_73.WebScrapingService_hja_73;

@RestController
@RequestMapping("/exam")
public class WebScapingController_hja_73 {
	
	@Autowired 
	WebScrapingService_hja_73 webScrapingService;
	
	@GetMapping("/schedule")
	public List<Exam> getExamSchedule()throws IOException{
		return webScrapingService.scapeExamData();
	}
}
