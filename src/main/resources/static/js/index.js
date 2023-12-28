option1 = {
	grid: {
		left: '0',
		top: '30',
		right: '0',
		bottom: '10',
		containLabel: true
	},
	legend: {
		top: 0,
		textStyle: {
			color: "#fff",
		},
		itemWidth: 10, // 设置宽度
		itemHeight: 10, // 设置高度
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
		type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	xAxis: {
		type: 'category',
		data: ["临汾市", "吕梁市", "大同市", "太原市", "忻州市", "晋中市"],
		axisTick: { //---坐标轴 刻度
			show: true, //---是否显示
		},
		axisLine: { //---坐标轴 轴线
			show: true, //---是否显示
			lineStyle: {
				color: 'rgba(255,255,255,.1)',
				width: 1,
				type: 'dotted',
			},
		},

		axisLabel: { //X轴文字
			textStyle: {
				fontSize: 12,
				color: '#fff'
			},
		},
	},

	yAxis: {
		type: 'value',
		splitLine: { //分割线
			show: true,
			lineStyle: {
				color: 'rgba(255,255,255,.1)',
				width: 1,
				type: 'dotted'
			}
		},
		axisLabel: { //Y轴刻度值
			formatter: '{value}',
			textStyle: {
				fontSize: 12,
				color: '#fff'
			},
		},
		axisLine: { //---坐标轴 轴线
			show: false, //---是否显示
		},
	},
	series: [{
		name: '11月',
		type: 'bar',
		data: [544,566, 730, 1268, 487, 653],
		barWidth: 15,
		barGap: 0.5, 
		itemStyle: {
			normal: {
				barBorderRadius: 50,
				color: "#446ACF",
			}
		},
	}, {
		name: '12月',
		type: 'bar',
		data: [324,416,530,1454,557, 53],
		barWidth: 15, //柱图宽度
		barGap: 0.5,
		itemStyle: {
			normal: { //设置颜色的渐变
				barBorderRadius: 50,
				color: "#4fb69d",
			}
		},
	}]
};

//交通工具流量
option2 = {
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['乘用车','商用车'],
        right: '10px',
        top: '0px',
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    grid: {
        x: 35,
        y: 25,
        x2: 8,
        y2: 25,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#fff',
            },
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B',
				
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            },
            textStyle: {
                color:'#fff',
            },
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)',
				type:'dotted',
            }
        }
    }],
    series: [{
        name: '乘用车',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)'
            }
        },
        data: [20,35,34,45,52,41,49,64,24,52.4,24,33]
    },  {
        name: '商用车',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(219,50,51)'
            }
        },
        data: [84.2,81.0,67.5,62.1,43.7,68.5,51.9,71.8,76.7,67.6,62.9,0]
    }, ]
};



option3 = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}


option31 = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
