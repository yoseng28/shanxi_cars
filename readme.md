# 山西省汽车销售数据分析(*MapReduce*)+SpringBoot4

创建于20231228

代码基于：

- Hadoop 2.10.1
- SpringTools 4
- hadoop-eclipse-plugin-2.8.3
- ECharts 5.4.3

## 功能：

- 统计乘用车和商用车各自数量占比 `CarsRatio`
- 统计每月销售占比 `SalesVolumeByMonth`
- 统计某月市、市县汽车销量 `SalesVolumeByCityDistrict`
- 统计男女买车比例 `GenderRatio`
- 统计不同年龄段的汽车销量 `GenderAgeRange`

## 数据导出：
- 使用DataX：HDFS->MariaDB 