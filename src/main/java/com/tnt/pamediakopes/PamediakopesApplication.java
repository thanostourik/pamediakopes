package com.tnt.pamediakopes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@SpringBootApplication
public class PamediakopesApplication extends SpringBootServletInitializer {

	/**
	 * Used to make SPA's routes work
	 * Forward to index when a request to non root path occurs
	 *
	 * @return
	 */
	@RequestMapping(value = "/{path:[^\\.]*}")
	public String redirect() {
		return "forward:/";
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(PamediakopesApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(PamediakopesApplication.class, args);
	}
}
