package com.yue.reducer;

import java.io.IOException;
import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

public class SalesByMonthReducer extends Reducer<IntWritable, IntWritable, Text, Text> {

	Map<Integer, Integer> maps = new HashMap<>();
	int totalCount = 0;

	public void reduce(IntWritable key, Iterable<IntWritable> values, Context context) {
		int sum = 0;
		Iterator<IntWritable> iterator = values.iterator();
		while (iterator.hasNext()) {
			sum = sum + iterator.next().get();
		}
		maps.put(key.get(), sum);
		totalCount = totalCount + sum;
	}

	public void cleanup(Context context) throws IOException, InterruptedException {
		for (int key : maps.keySet()) {
			int sum = maps.get(key);
			DecimalFormat df = new DecimalFormat("0.00");
			String percent = df.format((double) 100 * sum / totalCount);
			context.write(new Text(String.valueOf(key) + ":"), new Text(percent));
		}
	}
}
