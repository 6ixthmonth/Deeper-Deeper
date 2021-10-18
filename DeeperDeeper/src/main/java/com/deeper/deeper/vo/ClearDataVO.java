package com.deeper.deeper.vo;

public class ClearDataVO {

	private String playerName;
	private int stageNum;
	private int clearTime;
	private String clearWhen;

	public ClearDataVO(String playerName, int stageNum, int clearTime) {
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

	public int getClearTime() {
		return clearTime;
	}

	public void setClearTime(int clearTime) {
		this.clearTime = clearTime;
	}

	public String getClearWhen() {
		return clearWhen;
	}

	public void setClearWhen(String clearWhen) {
		this.clearWhen = clearWhen;
	}

}