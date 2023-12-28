$(function(){
	test();
	pie();
	window.setInterval('showRealTime()',1000);
});

function test(){
	$.post("yue/month_ratio_sales",{},function(result){
		var infoList = [];
		var numList = [];
		for(var i in result){
			var info = result[i]['month'];
			var num = result[i]['ratio'];
			infoList.push(info);
			numList.push(num);
		}
		
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '山西省汽车销量'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: infoList
        },
        yAxis: {},
        series: [
          {
            name: '性别比例销量',
            type: 'bar',
            data: numList
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
	});
}



function pie(){
	$.post("yue/age_range_sales",{},function(result){
		
		var  new_result = result.map((item)=>{
			return{
				name:item['age_range'],
				value:item['count']
			}
		});

		var chartDom = document.getElementById('main2');
		var myChart = echarts.init(chartDom);
		var option;
		
		option = {
		  title: {
		    text: '不同年龄段购买汽车销量',
		    subtext: '比例',
		    left: 'center'
		  },
		  tooltip: {
		    trigger: 'item'
		  },
		  legend: {
		    orient: 'vertical',
		    left: 'left'
		  },
		  series: [
		    {
		      name: '年龄',
		      type: 'pie',
		      radius: '50%',
		      data: new_result,
		      emphasis: {
		        itemStyle: {
		          shadowBlur: 10,
		          shadowOffsetX: 0,
		          shadowColor: 'rgba(0, 0, 0, 0.5)'
		        }
		      }
		    }
		  ]
		};
		
		option && myChart.setOption(option);
	});
}






function showRealTime(){
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();
	var days = new Array("日","一","二","三","四","五","六");
	var day = d.getDay();
	var hour = (d.getHours() < 10) ? ("0" + d.getHours()) : d.getHours();
	var min = (d.getMinutes() < 10) ? ("0" + d.getMinutes()) : d.getMinutes();
	var sec = (d.getSeconds() < 10) ? ("0" + d.getSeconds()) : d.getSeconds();
	var now = year + "年" + month + "月" + date + "日 星期" + days[day] + " " + hour + ":" + min + ":" + sec;
	document.querySelector(".showTime span").innerHTML = now;
}
