package com.deeper.deeper.controller;

import java.util.StringTokenizer;

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
		
		model.addAttribute("hourStr", "00");
		model.addAttribute("minStr", "00");
		model.addAttribute("secStr", "00");
		
		return "game/stage1";
	}
	
	@RequestMapping(value = "/stage1_clear", method = RequestMethod.POST)
	public String stage1Clear(HttpSession session, String clearTime) {
		logger.info("stage1Clear(GET) 메소드 실행");
		
		session.setAttribute("stageNum", 1);
		session.setAttribute("clearTime", clearTime);
		
		return "redirect:/stage2";
	}
	
	@RequestMapping(value = "/stage2", method = RequestMethod.GET)
	public String stage2(HttpSession session, Model model) {
		logger.info("stage2(GET) 메소드 실행");
		
		String clearTime = (String) session.getAttribute("clearTime");
		StringTokenizer tokens = new StringTokenizer(clearTime, ":");
		String hourStr = tokens.nextToken();
		String minStr = tokens.nextToken();
		String secStr = tokens.nextToken();
		
		model.addAttribute("hourStr", hourStr);
		model.addAttribute("minStr", minStr);
		model.addAttribute("secStr", secStr);
		
		return "game/stage2";
	}
	
	@RequestMapping(value = "/exit", method = RequestMethod.GET)
	public String exit(HttpSession session) {
		logger.info("exit(GET) 메소드 실행");
		
		int stageNum = (Integer) session.getAttribute("stageNum");
		String playerName = (String) session.getAttribute("playerName");
		String clearTime = (String) session.getAttribute("clearTime");
		
		boolean result = service.record(stageNum, playerName, clearTime);
		logger.info("기록 {}", result ? "성공" : "실패");
		
		return "redirect:/main";
	}
	
	@RequestMapping(value = "/stage2_clear", method = RequestMethod.POST)
	public String stage2Clear(HttpSession session, String clearTime) {
		logger.info("stage2Clear(POST) 메소드 실행");
		
		session.setAttribute("stageNum", 2);
		session.setAttribute("clearTime", clearTime);
		
		return "redirect:/stage3";
	}
	
	@RequestMapping(value = "/stage3", method = RequestMethod.GET)
	public String stage3(HttpSession session, Model model) {
		logger.info("stage3(GET) 메소드 실행");
		
		String clearTime = (String) session.getAttribute("clearTime");
		StringTokenizer tokens = new StringTokenizer(clearTime, ":");
		String hourStr = tokens.nextToken();
		String minStr = tokens.nextToken();
		String secStr = tokens.nextToken();
		
		model.addAttribute("hourStr", hourStr);
		model.addAttribute("minStr", minStr);
		model.addAttribute("secStr", secStr);
		
		return "game/stage3";
	}
	
	@RequestMapping(value = "/stage3_clear", method = RequestMethod.POST)
	public String stage3Clear(HttpSession session, String clearTime) {
		logger.info("stage3Clear(POST) 메소드 실행");
		
		session.setAttribute("stageNum", 3);
		session.setAttribute("clearTime", clearTime);
		
		return "redirect:/all_clear";
	}
	
	@RequestMapping(value = "/all_clear", method = RequestMethod.GET)
	public String allClear() {
		logger.info("allClear(GET) 메소드 실행");
		
		return "game/end";
	}
	
	@RequestMapping(value = "/ranking", method = RequestMethod.POST)
	public String ranking(Model model) {
		logger.info("ranking(POST) 메소드 실행");
		
		model.addAttribute("list", service.read());
		
		return "menu/rank";
	}
	
}
