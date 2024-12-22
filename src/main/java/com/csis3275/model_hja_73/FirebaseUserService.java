package com.csis3275.model_hja_73;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.UserRecord;

@Service
public class FirebaseUserService {
	
    private Firestore firestore;
    
    public void FirebaseUserSevice(Firestore firestore) {
    	this.firestore = firestore; 
    }
	
	public UserRecord createUser(String email, String password) throws Exception {
		UserRecord.CreateRequest request = new UserRecord.CreateRequest(); 
		request.setEmail(email); 
		request.setPassword(password); 
		return FirebaseAuth.getInstance().createUser(request);
	}
	
	public UserRecord getUserEmail(String email) throws Exception{
		return FirebaseAuth.getInstance().getUserByEmail(email);
	}
	
	public void deleteUserId(String id) throws Exception{
		FirebaseAuth.getInstance().deleteUser(id);
	}
	
	public UserRecord createUserWithDetails( String email, String password, String fullName, String id) throws Exception {
		UserRecord.CreateRequest request = new UserRecord.CreateRequest()
				.setEmail(email)
				.setPassword(password); 
		
		UserRecord userRecord = FirebaseAuth.getInstance().createUser(request); 
		String uid = userRecord.getUid(); 
		
		HashMap<String, Object> userInformation = new HashMap<>(); 
		userInformation.put("fullName",fullName ); 
		userInformation.put("studentId", id); 
		userInformation.put("email", email); 
		
		DocumentReference documentReference = firestore.collection("students").document(uid);
        WriteResult writeResult = documentReference.set(userInformation).get();

        System.out.println("Student additional details saved: " + writeResult.getUpdateTime());
		
		return userRecord; 
	}
	
	public DouglasStudent getUserDetails(String id) throws Exception{
		 DocumentReference docRef = firestore.collection("students").document(id);
	        Map<String, Object> data = docRef.get().get().getData();

	        if (data == null) {
	            throw new RuntimeException("Student not found");
	        }

	        DouglasStudent student = new DouglasStudent();
	        
	        student.setStudentFirstName(((String) data.get("fullName")).split(" ")[0]);
	        student.setStudentLastName(((String) data.get("fullName")).split(" ")[1]);
	        student.setStudentID(Integer.parseInt((String) data.get("studentId")));
	        student.setStudentEmail((String) data.get("email"));

	        return student;
	}
	
//	public void getAllUserRecord() throws Exception{
//		FirebaseAuth.getInstance().a
//	}
	

}
