package com.yue.mains;

import java.io.IOException;

import org.apache.hadoop.conf.Configuration;

import com.yue.jobs.CarsRatioJob;
import com.yue.jobs.GenderAgeRangeJob;
import com.yue.jobs.GenderRatioJob;
import com.yue.jobs.SalesByCityDistrictJob;
import com.yue.jobs.SalesByMonthJob;


public class CarsMain {

	public static void main(String[] args)
			throws IllegalArgumentException, ClassNotFoundException, IOException, InterruptedException {
		// conf.set("fs.hdfs.impl", "org.apache.hadoop.hdfs.DistributedFileSystem");
		System.setProperty("HADOOP_USER_NAME", "root");
		String filePath = "hdfs://192.168.88.3:8020/datasets/shanxi_cars.csv";
		String result = "hdfs://192.168.88.3:8020/shanxi_cars/";
		
		
		GenderAgeRangeJob.runJob(filePath, result + "gender_age");
		SalesByMonthJob.runJob(filePath, result+"month");
		
		
		//CarsRatioJob.runJob(filePath, result+"CarsRatio");
		//GenderRatioJob.runJob(filePath, result+"GenderRatio");
		
		
		// 设置月份，通过conf传递参数至mapper
		//Configuration conf = new Configuration(); conf.set("month", "3");
		//SalesByCityDistrictJob.runJob(conf, filePath, result + "1", result + "2");
}

}
