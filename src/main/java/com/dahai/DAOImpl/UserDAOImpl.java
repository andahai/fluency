package com.dahai.DAOImpl;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.dahai.dao.UserDAO;
import com.dahai.dataobject.UserDO;

public class UserDAOImpl extends SqlMapClientDaoSupport implements UserDAO{

	public UserDO getByUserId(int user_id) {
		// TODO Auto-generated method stub
		UserDO userDO = null;
		try {
			userDO = (UserDO) getSqlMapClientTemplate().queryForObject("Coins.getByUserId",user_id);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return userDO;
	}

}
