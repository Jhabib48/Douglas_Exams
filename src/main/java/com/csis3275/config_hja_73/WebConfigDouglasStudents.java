package com.csis3275.config_hja_73;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
	
	@Configuration
	public class WebConfigDouglasStudents implements WebMvcConfigurer{
	
		@Override
	    public void addCorsMappings(CorsRegistry registry) {
			 registry.addMapping("/**") // Allow all endpoints
	             .allowedOrigins("http://localhost:3000") // Allow React frontend
	             .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allow common HTTP methods
	             .allowedHeaders("*") // Allow all headers
	             .allowCredentials(true); // Allow credentials like cookies
	    }
}
