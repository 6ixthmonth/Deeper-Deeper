package com.deeper.deeper.vo;

public class ClearDataVO {

	private String playerName;
	private int stageNum;
	private String clearTime;
	private String clearWhen;

	public ClearDataVO(String playerName, int stageNum, String clearTime) {
		this.stageNum = stageNum;
		this.playerName = playerName;
		this.clearTime = clearTime;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public int getStageNum() {
		return stageNum;
	}

	public void setStageNum(int stageNum) {
		this.stageNum = stageNum;
	}

	public String getClearTime() {
		return clearTime;
	}

	public void setClearTime(String clearTime) {
		this.clearTime = clearTime;
	}

	public String getClearWhen() {
		return clearWhen;
	}

	public void setClearWhen(String clearWhen) {
		this.clearWhen = clearWhen;
	}

}