package com.deeper.deeper.repository;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.deeper.deeper.mapper.GameMapper;
import com.deeper.deeper.vo.ClearDataVO;

@Repository
public class GameRepository {
	
	@Autowired
	private SqlSession session;

	public int record(ClearDataVO clearDataVO) {
		int result = 0;
		GameMapper mapper = null;
		
		try {
			mapper = session.getMapper(GameMapper.class);
			result = mapper.record(clearDataVO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}

	public ArrayList<ClearDataVO> read() {
		ArrayList<ClearDataVO> result = null;
		GameMapper mapper = null;
		
		try {
			mapper = session.getMapper(GameMapper.class);
			result = mapper.read();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}

}
