package com.csis3275.model_hja_73;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


import org.jsoup.Jsoup;
import org.springframework.stereotype.Service;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

@Service
public class WebScrapingService_hja_73 {
	
	public List<Exam> scapeExamData() throws IOException{
		
		String url = "https://www.douglascollege.ca/current-students/important-dates-information/exam-schedule";
		List<Exam> examList = new ArrayList<>(); 
		
		org.jsoup.nodes.Document document = Jsoup.connect(url).get();
		Elements exams = document.select("tr"); 
		
		for( Element row : exams ) {
			Elements columns = row.select("td"); 
			
			 if(columns.size() > 0) {
                 String courseCode = columns.get(0).text();  // First column (e.g., ACCT1110)
                 String section = columns.get(1).text();      // Second column (e.g., 002)
                 String instructor = columns.get(2).text();   // Third column (e.g., Tan-Tompkins)
                 String date = columns.get(3).text();         // Fourth column (e.g., Mon, Aug 12, 2024)
                 String startTime = columns.get(4).text();    // Fifth column (e.g., 15:30)
                 String dash = columns.get(5).text();         // Sixth column (dash "-")
                 String endTime = columns.get(6).text();      // Seventh column (e.g., 18:30)
                 String building = columns.get(7).text();     // Eighth column (e.g., NWN)
                 String room = columns.get(8).text();     
                 
                 
                 Exam exam = new Exam(courseCode, section, instructor, date, startTime, endTime, building, room);
                 examList.add(exam);
			 }
			 
		}
		
		return examList; 
		
	}		
}
