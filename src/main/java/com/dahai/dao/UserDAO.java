package com.dahai.dao;

import com.dahai.dataobject.UserDO;

public interface UserDAO {
	public UserDO getByUserId(int user_id);
}
