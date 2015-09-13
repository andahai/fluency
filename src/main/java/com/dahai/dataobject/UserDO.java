package com.dahai.dataobject;

public class UserDO {
	
	private int id;
	
	private long user_id;

	private int coins;
	
	public UserDO(){};
	
	public UserDO(int user_id, int coins){
		this.user_id = user_id;
		this.coins = coins;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	public int getCoins() {
		return coins;
	}

	public void setCoins(int coins) {
		this.coins = coins;
	}
	
	
}
