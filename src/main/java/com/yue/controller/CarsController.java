package com.yue.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/yue")
public class CarsController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@ResponseBody
	@RequestMapping("/age_range_sales")
	public List<Map<String, Object>> confirmed_deaths_num(HttpServletRequest request) {
		String sql = "select age_range,count from age_range_sales;";
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		return list;
	}
	
	@ResponseBody
	@RequestMapping("/month_ratio_sales")
	public List<Map<String, Object>> china_num(HttpServletRequest request) {
		String sql = "select * from month_ratio_sales;";
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		return list;
	}
	

}
