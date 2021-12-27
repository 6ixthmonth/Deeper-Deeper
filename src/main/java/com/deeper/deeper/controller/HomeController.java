package com.deeper.deeper.controller;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpSession session) {
		logger.info("home(GET) 메소드 실행");
		
		session.setAttribute("lang", "kr");
		
		return "redirect:/main";
	}
	
	@RequestMapping(value = "/main", method = RequestMethod.GET)
	public String main(HttpSession session) {
		logger.info("main(GET) 메소드 실행");
		
		session.removeAttribute("stageNum");
		session.removeAttribute("playerName");
		session.removeAttribute("playTime");

		return "menu/main";
	}
	
	@RequestMapping(value = "/lang", method = RequestMethod.GET)
	public String lang(HttpSession session, String lang) {
		logger.info("lang(GET) 메소드 실행");
		
		session.setAttribute("lang", lang);

		return "redirect:/main";
	}
	
}
