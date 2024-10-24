package com.csis3275.config_hja_73;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

	public class WebConfigDouglasStudents implements WebMvcConfigurer{
		@Override
	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/students/**") // Adjust this mapping according to your API endpoints
	                .allowedOrigins("http://localhost:3000") // Allow requests from this origin
	                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow these HTTP methods
	                .allowCredentials(true); // Allow credentials (e.g., cookies) to be sent cross-origin
	    }
}
