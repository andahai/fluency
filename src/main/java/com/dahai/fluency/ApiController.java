package com.dahai.fluency;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dahai.dao.UserDAO;
import com.dahai.dataobject.UserDO;



@Controller
public class ApiController {
	
	@Autowired
	UserDAO userDAO;
	
	
	
	@RequestMapping("/test")
	public String test(){
		UserDO userDO = userDAO.getByUserId(1);
		System.out.println(userDO.getCoins());
		return "test";
	}
}
