package com.yue.test;

import java.io.IOException;
import java.net.URISyntaxException;

import com.yue.tools.HDFSTools;


public class HDFSTest {
	
	
	public static void main(String[] args) throws URISyntaxException, IOException, InterruptedException {
		HDFSTools.getFileSystem();
		HDFSTools.uploadFile("D:\\shanxi_cars.csv", "/datasets");
		
	}

}
