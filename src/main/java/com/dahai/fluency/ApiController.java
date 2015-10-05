package com.dahai.fluency;

import java.io.IOException;
import java.lang.management.ManagementFactory;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;
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
	
	@RequestMapping("/traf")
	public String traf(){
		return "index2";
	}
	
	@RequestMapping("/getGatexState")
	public void ajaxstate(HttpServletResponse response){
		List<Map<String, String>> list = new ArrayList<Map<String,String>>();
		Map<String, String>map = new HashMap<String, String>();
		map.put("city", "±±¾©");
		map.put("main", "UP");
		map.put("backup1", "UP");
		map.put("backup2", "DOWN");
		map.put("mirror", "DOWN");
		list.add(map);
		response.setCharacterEncoding("utf-8");
		try {
			response.getWriter().write(JSON.toJSONString(list));
			response.getWriter().flush();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
