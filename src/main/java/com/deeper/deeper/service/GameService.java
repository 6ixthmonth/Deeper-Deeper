package com.deeper.deeper.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.deeper.deeper.repository.GameRepository;
import com.deeper.deeper.vo.ClearDataVO;

@Service
public class GameService {
	
	@Autowired
	GameRepository repository;

	public boolean record(int stageNum, String playerName, int clearTime) {
		int result = repository.record(new ClearDataVO(playerName, stageNum, clearTime));
		if (result > 0) return true;
		else return false;
	}

	public ArrayList<ClearDataVO> read() {
		return repository.read();
	}

}
