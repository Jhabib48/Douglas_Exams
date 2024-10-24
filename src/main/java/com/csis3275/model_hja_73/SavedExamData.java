package com.csis3275.model_hja_73;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="saved_exams_data")
public class SavedExamData {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id; 
	
	@ManyToOne
	private DouglasStudent student; 
	
	private String courseName; 
    private String section; 
    private String instructor; 
    private String date; 
    private String startTime; 
    private String endTime; 
    private String building; 
    private String room;
    
	public SavedExamData() {
		super();
	}
	
	public SavedExamData(Long id, DouglasStudent student, String courseName, String section, String instructor,
			String date, String startTime, String endTime, String building, String room) {
		super();
		this.id = id;
		this.student = student;
		this.courseName = courseName;
		this.section = section;
		this.instructor = instructor;
		this.date = date;
		this.startTime = startTime;
		this.endTime = endTime;
		this.building = building;
		this.room = room;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public DouglasStudent getStudent() {
		return student;
	}
	public void setStudent(DouglasStudent student) {
		this.student = student;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getSection() {
		return section;
	}
	public void setSection(String section) {
		this.section = section;
	}
	public String getInstructor() {
		return instructor;
	}
	public void setInstructor(String instructor) {
		this.instructor = instructor;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public String getBuilding() {
		return building;
	}
	public void setBuilding(String building) {
		this.building = building;
	}
	public String getRoom() {
		return room;
	}
	public void setRoom(String room) {
		this.room = room;
	}  
}
