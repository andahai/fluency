package com.dahai.fluency;

import java.io.IOException;
import java.lang.management.ManagementFactory;

import javax.servlet.http.HttpServletResponse;

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
		System.out.println(ManagementFactory.getRuntimeMXBean().getName());
		return "test";
	}
	
	@RequestMapping("/state")
	public String state(){
		return "index1";
	}
	
	@RequestMapping("/getGatexState")
	public void ajaxstate(HttpServletResponse response){
		
		response.setCharacterEncoding("utf-8");
		try {
			response.getWriter().write("[{'city':'’æµ„A1','main':'IDLE','backup1':'IDLE','backup2':'IDLE','mirror':'IDLE'},{'city':'’æµ„A2','main':'IDLE','backup1':'IDLE','backup2':'IDLE','mirror':'IDLE'}]");
			response.getWriter().flush();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
