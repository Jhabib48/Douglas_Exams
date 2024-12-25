package com.csis3275.config_hja_73;

import java.io.FileInputStream;
import java.io.IOException;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

public class FirebaseInitialization {
	 public static void initialize() throws IOException {
		 FileInputStream serviceAccount =
		 	    new FileInputStream("src/main/resources/serviceAccount.json");

				FirebaseOptions options = new FirebaseOptions.Builder()
				   .setCredentials(GoogleCredentials.fromStream(serviceAccount))
				   .build();

				FirebaseApp.initializeApp(options);
	    }
}

