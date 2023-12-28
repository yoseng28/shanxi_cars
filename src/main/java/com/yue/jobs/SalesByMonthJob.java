package com.yue.jobs;

import java.io.IOException;
import java.net.URISyntaxException;

import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

import com.yue.mapper.SalesByMonthMapper;
import com.yue.reducer.SalesByMonthReducer;
import com.yue.tools.HDFSTools;

/**
 * 统计每个月汽车销量
 */
public class SalesByMonthJob {
	
	public static void runJob(String filePath, String resultPath) throws IllegalArgumentException, IOException, ClassNotFoundException, InterruptedException {
		Job job = Job.getInstance();
		job.setJarByClass(SalesByMonthJob.class);
		job.setMapperClass(SalesByMonthMapper.class);
		job.setReducerClass(SalesByMonthReducer.class);
		job.setMapOutputKeyClass(IntWritable.class);
		job.setMapOutputValueClass(IntWritable.class);
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(Text.class);

		try {
			// 输出目录如果存在，删除
			HDFSTools.deleteFileAndDir(resultPath);
			HDFSTools.closeDFS();
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
		FileInputFormat.addInputPath(job, new Path(filePath));
		FileOutputFormat.setOutputPath(job, new Path(resultPath));

		System.out.println("MR开始运行***********************************************");
		long startTime = System.currentTimeMillis();
		boolean result = job.waitForCompletion(true);
		long endTime = System.currentTimeMillis();
		System.out.println("MR运行时间：" + (endTime - startTime) / 1000 + "秒");
		System.exit(result ? 0 : 1);
	}

}
