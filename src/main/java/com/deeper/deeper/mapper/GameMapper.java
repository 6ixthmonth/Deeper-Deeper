package com.deeper.deeper.mapper;

import java.util.ArrayList;

import com.deeper.deeper.vo.ClearDataVO;

public interface GameMapper {

	public int record(ClearDataVO clearDataVO);

	public ArrayList<ClearDataVO> read();

}