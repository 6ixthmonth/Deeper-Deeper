package com.deeper.deeper.controller;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.deeper.deeper.service.GameService;

@Controller
public class GameController {
	
	private static final Logger logger = LoggerFactory.getLogger(GameController.class);
	
	@Autowired
	private GameService service;
	
	@RequestMapping(value = "/how_to_play", method = RequestMethod.POST)
	public String how() {
		logger.info("how(GET) 메소드 실행");
		
		return "menu/how";
	}
	
	@RequestMapping(value = "/insert_your_name", method = RequestMethod.POST)
	public String play() {
		logger.info("play(GET) 메소드 실행");
		
		return "game/begin";
	}
	
	@RequestMapping(value = "/stage1", method = RequestMethod.POST)
	public String stage1(HttpSession session, Model model, String playerName) {
		logger.info("stage1(GET) 메소드 실행");
		
		session.setAttribute("playerName", playerName);
		model.addAttribute("playTime", 0);
		
		return "game/stage1";
	}
	
	@RequestMapping(value = "/stage1_clear", method = RequestMethod.POST)
	public String stage1Clear(HttpSession session, String playTime) {
		logger.info("stage1Clear(GET) 메소드 실행");
		
		session.setAttribute("stageNum", 1);
		session.setAttribute("playTime", playTime);
		
		return "redirect:/stage2";
	}
	
	@RequestMapping(value = "/stage2", method = RequestMethod.GET)
	public String stage2(HttpSession session, Model model) {
		logger.info("stage2(GET) 메소드 실행");
		
		int playTime = (int) session.getAttribute("playTime");
		model.addAttribute("playTime", playTime);
		
		return "game/stage2";
	}
	
	@RequestMapping(value = "/exit", method = RequestMethod.GET)
	public String exit(HttpSession session) {
		logger.info("exit(GET) 메소드 실행");
		
		logger.info("기록 {}", record(session));
		
		return "redirect:/main";
	}
	
	@RequestMapping(value = "/stage2_clear", method = RequestMethod.POST)
	public String stage2Clear(HttpSession session, String playTime) {
		logger.info("stage2Clear(POST) 메소드 실행");
		
		session.setAttribute("stageNum", 2);
		session.setAttribute("playTime", playTime);
		
		return "redirect:/stage3";
	}
	
	@RequestMapping(value = "/stage3", method = RequestMethod.GET)
	public String stage3(HttpSession session, Model model) {
		logger.info("stage3(GET) 메소드 실행");
		
		int playTime = (int) session.getAttribute("playTime");
		model.addAttribute("playTime", playTime);
		
		return "game/stage3";
	}
	
	@RequestMapping(value = "/stage3_clear", method = RequestMethod.POST)
	public String stage3Clear(HttpSession session, String playTime) {
		logger.info("stage3Clear(POST) 메소드 실행");
		
		session.setAttribute("stageNum", 3);
		session.setAttribute("playTime", playTime);
		
		return "redirect:/all_clear";
	}
	
	@RequestMapping(value = "/all_clear", method = RequestMethod.GET)
	public String allClear(HttpSession session) {
		logger.info("allClear(GET) 메소드 실행");
		
		logger.info("기록 {}", record(session));
		
		return "game/end";
	}
	
	@RequestMapping(value = "/ranking", method = RequestMethod.POST)
	public String ranking(Model model) {
		logger.info("ranking(POST) 메소드 실행");
		
		model.addAttribute("list", service.read());
		
		return "menu/rank";
	}
	
	public String record(HttpSession session) {
		int stageNum = (int) session.getAttribute("stageNum");
		String playerName = (String) session.getAttribute("playerName");
		int clearTime = (int) session.getAttribute("playTime");
		
		boolean result = service.record(stageNum, playerName, clearTime);
		
		return result ? "성공" : "실패";
	}
	
}
