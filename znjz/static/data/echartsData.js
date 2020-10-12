let index = 0,
  index1 = 0;
// let colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
let colorList = ['#f48554', '#64aef6', '#3fe8bb', '#0093ff'];
let itemStyle = {};

export default {
  // IT管理--机房--温度
  temp: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
    },
    legend: {
      show: false
    },
    grid: {
      left: 85,
      top: 10,
      bottom: 10,
      right: 40
    },
    xAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisPointer: {
        label: {
          show: true,
          margin: 10
        }
      },
      data: ['#探针1', '#探针2', '#探针3'],
      axisLabel: {
        margin: 80,
        fontSize: 14,
        align: 'left',
        color: '#333',
        rich: {
          a1: {
            color: '#fff',
            backgroundColor: colorList[0],
            width: 20,
            height: 20,
            align: 'center',
            borderRadius: 2
          },
          a2: {
            color: '#fff',
            backgroundColor: colorList[1],
            width: 20,
            height: 20,
            align: 'center',
            borderRadius: 2
          },
          a3: {
            color: '#fff',
            backgroundColor: colorList[2],
            width: 20,
            height: 20,
            align: 'center',
            borderRadius: 2
          },
          b: {
            color: '#fff',
            backgroundColor: colorList[3],
            width: 20,
            height: 20,
            align: 'center',
            borderRadius: 2
          }
        },
        formatter: function (params) {
          if (index == 3) {
            index = 0;
          }
          index++;
          if (index - 1 < 3) {
            return [
              '{a' + index + '|' + index + '}' + '  ' + params
            ].join('\n')
          } else {
            return [
              '{b|' + index + '}' + '  ' + params
            ].join('\n')
          }
        }
      }
    },
    series: [{
      z: 2,
      name: '温度',
      type: 'bar',
      data: [36.6, 28.6, 18.2].map((item, i) => {
        itemStyle = {
          color: i > 3 ? colorList[3] : colorList[i]
        }
        return {
          value: item,
          itemStyle: itemStyle
        };
      }),
      label: {
        show: true,
        position: 'right',
        color: '#333333',
        fontSize: 12,
        offset: [10, 0]
      }
    }]
  },
  // IT管理--机房--湿度
  humidity: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      show: false
    },
    grid: {
      left: 85,
      top: 10,
      bottom: 10,
      right: 40
    },
    xAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisPointer: {
        label: {
          show: true,
          margin: 10
        }
      },
      data: ['#探针1', '#探针2', '#探针3'],
      axisLabel: {
        margin: 80,
        fontSize: 14,
        align: 'left',
        color: '#333',
        rich: {
          a1: {
            color: '#fff',
            backgroundColor: colorList[0],
            width: 20,
            height: 20,
            align: 'center',
            borderRadius: 2
          },
          a2: {
            color: '#fff',
            backgroundColor: colorList[1],
            width: 20,
            height: 20,
            align: 'center',
            borderRadius: 2
          },
          a3: {
            color: '#fff',
            backgroundColor: colorList[2],
            width: 20,
            height: 20,
            align: 'center',
            borderRadius: 2
          },
          b: {
            color: '#fff',
            backgroundColor: colorList[3],
            width: 20,
            height: 20,
            align: 'center',
            borderRadius: 2
          }
        },
        formatter: function (params) {
          if (index1 == 3) {
            index1 = 0;
          }
          index1++;
          if (index1 - 1 < 3) {
            return [
              '{a' + index1 + '|' + index1 + '}' + '  ' + params
            ].join('\n')
          } else {
            return [
              '{b|' + index1 + '}' + '  ' + params
            ].join('\n')
          }
        }
      }
    },
    series: [{
      z: 2,
      name: '湿度',
      type: 'bar',
      data: [48.2, 38.6, 26.6].map((item, i) => {
        itemStyle = {
          color: i > 3 ? colorList[3] : colorList[i]
        }
        return {
          value: item,
          itemStyle: itemStyle
        };
      }),
      label: {
        show: true,
        position: 'right',
        color: '#333333',
        fontSize: 12,
        offset: [10, 0]
      }
    }]
  },
  // IT管理--机房--设备电源状况
  source: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    color: ['#f48554', '#64aef6', '#3fe8bb', '#0093ff', '#9FE6B8'],
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 10,
      data: ['变压器', '机柜', '发电机', 'UPS', '空调']
    },
    series: [{
        name: '电源断开数量',
        type: 'pie',
        radius: '45%',
        center: ['60%', '25%'],
        data: [{
            value: 1,
            name: '变压器'
          },
          {
            value: 2,
            name: '机柜'
          },
          {
            value: 0,
            name: '发电机'
          },
          {
            value: 0,
            name: 'UPS'
          },
          {
            value: 1,
            name: '空调'
          }
        ],
        label: {
          show: false
        },
      },
      {
        name: '电源正常数量',
        type: 'pie',
        radius: '45%',
        center: ['60%', '75%'],
        data: [{
            value: 5,
            name: '变压器'
          },
          {
            value: 6,
            name: '机柜'
          },
          {
            value: 5,
            name: '发电机'
          },
          {
            value: 3,
            name: 'UPS'
          },
          {
            value: 7,
            name: '空调'
          }
        ],
        label: {
          show: false
        },
      }
    ]
  },
  // 服务器--详情--物理内存
  memory: {
    title: {
      text: "2.70GB",
      textStyle: {
        color: "#47AFF1"
      },
      subtext: "物理内存",
      x: "center",
      y: "center"
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      type: 'scroll',
      right: 10,
      top: 10,
      bottom: 20,
      data: ['物理内存已用', '物理内存可用']
    },
    color: ["#EBEEF5", "#22A1EF"],
    series: [{
      name: '物理内存',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: false,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{
          value: 0.88,
          name: '物理内存可用'
        },
        {
          value: 1.82,
          name: '物理内存已用'
        },
      ]
    }]
  },
  // 服务器--详情--物理内存使用率
  memory1: {
    tooltip: {
      show: true,
      formatter: "{a}：{c}%",
    },
    series: [{
      name: '物理内存使用率',
      type: 'gauge',
      radius: '70%',
      detail: {
        formatter: '{score|{value}%}',
        offsetCenter: [0, "80%"],
        rich: {
          score: {
            fontFamily: "微软雅黑",
            fontSize: 16
          }
        }
      },
      title: {
        offsetCenter: [0, "100%"],
        color: "#919191",
        fontSize: 16,
      },
      pointer: {
        width: 5
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 9,
          shadowBlur: 5,
          color: [
            [0.3, '#99CC33'],
            [0.7, '#FF9900'],
            [1, '#FF5C60']
          ]
        }
      },
      splitLine: {
        length: 10,
        lineStyle: {
          color: '#0C1D4F',
          opacity: 1,
          witdth: 2,
          type: 'dashed',
          shadowBlur: 5,
          shadowColor: '#fff'
        }
      },
      data: [{
        value: 6,
        name: '物理内存使用率'
      }]
    }]
  },
  //服务器--详情--输入输出流量
  flow: {
    grid: {
      y: 30,
      left: '1%',
      right: '5%',
      bottom: '5%',
      top: '18%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      formatter: '',
    },
    legend: {
      data: ['输出流量', '输入流量'],
      right: 20,
    },
    color: ['#FFD85C', '#37A2DA'],
    xAxis: [{
      type: 'category',
      data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
        '18:00',
        '19:00',
      ]
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        formatter: function (value) {
          if (value >= 1024 && value < 1024 * 1024) {
            value = (value / 1024).toFixed(0) + 'K';
          } else if (value >= 1024 * 1024 && value < 1024 * 1024 * 1024) {
            value = (value / (1024 * 1024)).toFixed(0) + 'M';
          } else if (value >= 1024 * 1024 * 1024) {
            value = (value / (1024 * 1024 * 1024)).toFixed(0) + 'G';
          }
          return value;
        },
      }
    }],
    series: [{
        name: '输出流量',
        type: 'bar',
        data: ['69521', '354825', '122584', '652152', '32651', '148549', '95648', '362541', '12546', '126856',
          '365214', '26584',
        ],
        markPoint: {
          itemStyle: {
            normal: {
              label: {
                formatter: function (params) {
                  if (params.value <= 0) {
                    params.value = '0B';
                  } else {
                    var k = 1024;
                    var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB',
                      'YB'
                    ];
                    var c = Math.floor(Math.log(params.value) / Math.log(k));
                    params.value = (params.value / Math.pow(k, c)).toFixed(2) +
                      '' + sizes[c];
                  }
                  return params.value;
                }
              }
            },
          },
          data: [{
              type: 'max',
              name: '最大值',
            },
            {
              type: 'min',
              name: '最小值'
            }
          ]
        },
        markLine: {
          itemStyle: {
            normal: {
              label: {
                formatter: function (params) {
                  if (params.value <= 0) {
                    params.value = '0B';
                  } else {
                    var k = 1024;
                    var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB',
                      'YB'
                    ];
                    var c = Math.floor(Math.log(params.value) / Math.log(k));
                    params.value = (params.value / Math.pow(k, c)).toFixed(2) +
                      '' + sizes[c];
                  }
                  return params.value;
                }
              }
            },
          },
          data: [{
            type: 'average',
            name: '平均值'
          }]
        }
      },
      {
        name: '输入流量',
        type: 'bar',
        data: ['622511', '21523', '625414', '845723', '124153', '365241', '985476', '98542', '352163',
          '362514',
          '361254', '54219',
        ],
        markPoint: {
          itemStyle: {
            normal: {
              label: {
                formatter: function (params) {
                  if (params.value <= 0) {
                    params.value = '0B';
                  } else {
                    var k = 1024;
                    var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB',
                      'YB'
                    ];
                    var c = Math.floor(Math.log(params.value) / Math.log(k));
                    params.value = (params.value / Math.pow(k, c)).toFixed(2) +
                      '' + sizes[c];
                  }
                  return params.value;
                }
              }
            },
          },
          data: [{
              type: 'max',
              name: '最大值'
            },
            {
              type: 'min',
              name: '最小值'
            }
          ]
        },
        markLine: {
          itemStyle: {
            normal: {
              label: {
                formatter: function (params) {
                  if (params.value <= 0) {
                    params.value = '0B';
                  } else {
                    var k = 1024;
                    var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB',
                      'YB'
                    ];
                    var c = Math.floor(Math.log(params.value) / Math.log(k));
                    params.value = (params.value / Math.pow(k, c)).toFixed(2) +
                      '' + sizes[c];
                  }
                  return params.value;
                }
              }
            },
          },
          data: [{
            type: 'average',
            name: '平均值'
          }]
        }
      }
    ]
  },
  //服务器--详情--盘符-盘符趋势
  trendChart: {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['C盘', 'D盘', 'F盘', 'E盘', 'G盘'],
      x: 'center',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '2%',
      top: '12%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
        '22:00'
      ]
    },
    yAxis: {
      type: 'value'
    },
    series: [{
        name: 'C盘',
        type: 'line',
        symbol: 'circle',
        data: [16, 32, 15, 17, 18, 25, 23, 17, 24, 15, 18, 12]
      },
      {
        name: 'D盘',
        type: 'line',
        symbol: 'circle',
        data: [23, 31, 30, 24, 15, 16, 18, 19, 17, 21, 15, 23]
      },
      {
        name: 'F盘',
        type: 'line',
        symbol: 'circle',
        data: [15, 26, 24, 28, 27, 15, 16, 13, 19, 17, 16, 14]
      },
      {
        name: 'E盘',
        type: 'line',
        symbol: 'circle',
        data: [18, 29, 35, 14, 16, 15, 18, 19, 25, 22, 23, 27]
      },
      {
        name: 'G盘',
        type: 'line',
        symbol: 'circle',
        data: [12, 26, 25, 24, 23, 25, 28, 29, 30, 31, 24, 18]
      }
    ]
  },
  //交换机--详情（接受/发送）流量
  Inflow: {
    tooltip: {
      trigger: 'axis',
      formatter: function (value) {
        if (value[0].value <= 0) {
          value[0].value = '0B';
        } else {
          var k = 1024;
          var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
          var c = Math.floor(Math.log(value[0].value) / Math.log(k));
          value[0].value = (value[0].value / Math.pow(k, c)).toFixed(2) + '' + sizes[c];
        }
        return value[0].name + "<br/>" + '接收流量:' + value[0].value;
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '1%',
      top: '12%',
      containLabel: true
    },
    legend: {
      data: ['接收流量']
    },
    xAxis: {
      type: 'category',
      data: ['18:00']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function (value) {
          if (value < 1024) {
            value = value + 'B';
          } else if (value >= 1024 && value < 1024 * 1024) {
            value = (value / 1024).toFixed(0) + 'K';
          } else if (value >= 1024 * 1024 && value < 1024 * 1024 * 1024) {
            value = (value / (1024 * 1024)).toFixed(0) + 'M';
          } else if (value >= 1024 * 1024 * 1024) {
            value = (value / (1024 * 1024 * 1024)).toFixed(0) + 'G';
          }
          return value;
        },
      }
    },
    series: [{
      name: '接收流量',
      data: [18000],
      type: 'line'
    }]
  },
  Outflow: {
    tooltip: {
      trigger: 'axis',
      formatter: function (value) {
        if (value[0].value <= 0) {
          value[0].value = '0B';
        } else {
          var k = 1024;
          var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
          var c = Math.floor(Math.log(value[0].value) / Math.log(k));
          value[0].value = (value[0].value / Math.pow(k, c)).toFixed(2) + '' + sizes[c];
        }
        return value[0].name + "<br/>" + '发送流量:' + value[0].value;
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '1%',
      top: '12%',
      containLabel: true
    },
    legend: {
      data: ['发送流量']
    },
    xAxis: {
      type: 'category',
      data: ['19:00']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function (value) {
          if (value < 1024) {
            value = value + 'B';
          } else if (value >= 1024 && value < 1024 * 1024) {
            value = (value / 1024).toFixed(0) + 'K';
          } else if (value >= 1024 * 1024 && value < 1024 * 1024 * 1024) {
            value = (value / (1024 * 1024)).toFixed(0) + 'M';
          } else if (value >= 1024 * 1024 * 1024) {
            value = (value / (1024 * 1024 * 1024)).toFixed(0) + 'G';
          }
          return value;
        },
      }
    },
    series: [{
      name: '发送流量',
      data: [59],
      type: 'line'
    }]
  },
  //交换机--详情（广播包数/错包数/丢包数）
  lineoption: {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '1%',
      top: '12%',
      containLabel: true
    },
    legend: {
      data: ['端口广播包数']
    },
    xAxis: {
      type: 'category',
      data: ['18:00']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function (value) {
          if (value >= 1000 && value < 10000) {
            value = value / 1000 + '千';
          } else if (value >= 10000) {
            value = value / 10000 + '万';
          }
          return value;
        },
      }
    },
    series: [{
      name: '端口广播包数',
      data: [150],
      type: 'line'
    }]
  },
  erroroption: {
    legend: {
      data: ['输入错包数', '输出错包数']
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '5%',
      right: '10%',
      bottom: '1%',
      top: '12%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['18:00']
    }],
    yAxis: [{
      type: 'value'
    }],
    series: [{
        name: '输入错包数',
        type: 'bar',
        data: [19],
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        }
      },
      {
        name: '输出错包数',
        type: 'bar',
        data: [20],
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        }
      }
    ]
  },
  discardoption: {
    legend: {
      data: ['输入丢包数', '输出丢包数']
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '5%',
      right: '10%',
      bottom: '1%',
      top: '12%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['18:00']
    }],
    yAxis: [{
      type: 'value'
    }],
    series: [{
        name: '输入丢包数',
        type: 'bar',
        data: [25],
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        }
      },
      {
        name: '输出丢包数',
        type: 'bar',
        data: [30],
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        }
      }
    ]
  },
  //运营管理--停车缴费（进出车流量）
  carFlow: {
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: true,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    xAxis: {
      type: 'category',
      data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      axisLabel: {
        interval: 0,
        rotate: 40
      }
    },
    legend: {
      data: ['进入车辆', '出去车辆'],
      x: 'left'
    },
    color: ['#C23531', '#3398DB'],
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '进入车辆',
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }, {
      name: '出去车辆',
      data: [10, 52, 200, 334, 390, 330, 220],
      type: 'bar'
    }]
  },
  //运营管理--物业租赁
  czCharts: {
    color: ['#FF9873', '#87CEFA', 'rgba(255,255,255,0.1)'],
    toolbox: {
      show: true,
      feature: {
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    tooltip: {
      trigger: 'item',
      padding: [10, 10, 10, 10],
      formatter: "{b} :{c}<br/> {d}%"
    },
    legend: {
      orient: 'vertical',
      left: 10,
      icon: 'diamond',
      data: ['已出租', '未出租']
    },
    series: [{
      name: '',
      type: 'pie',
      radius: ['36%', '66%'],
      center: ['50%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [{
        name: "已出租",
        value: "300"
      }, {
        name: "未出租",
        value: "120"
      }]
    }, {
      type: 'pie',
      radius: ['34%', '68%'],
      center: ['50%', '50%'],
      silent: true,
      data: [{
        name: '',
        value: 1,
      }]
    }]
  },
  //运营管理--物业租赁（园区企业类型统计）
  qyType: {
    color: "#FF7F50",
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: true,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'category',
      data: ['制造', '建筑', '软件', '邮政', '零售', '餐饮', '金融', '房地产', '商务服务', '娱乐', '供应', '其它'],
      splitLine: {
        show: true
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '企业数量',
      data: [120, 200, 150, 80, 70, 110, 130, 26, 15, 25, 36, 12],
      type: 'bar'
    }]
  },
  //物业管理--安保巡检（巡检状况）
  xjzk: {
    color: "#FF7F50",
    title: {
      text: '巡检状况'
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: true,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'category',
      data: ['1号楼', '2号楼', '3号楼', '4号楼', '5号楼', '6号楼', '服务大厅', '其它'],
      splitLine: {
        show: true
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '巡检次数',
      data: [12, 20, 10, 8, 7, 11, 13, 12],
      type: 'line'
    }]
  },
  //首页--停车状况（停车信息）
  tcChart: {
    color:['#37A2DA','#FFDB5C','#FF9F7F','#67E0E3'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['室外使用', '车库使用', '室外未用', '车库未用']
    },
    series: [{
      name: '车位使用',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
          value: 35,
          name: '室外使用'
        },
        {
          value: 31,
          name: '车库使用'
        },
        {
          value: 45,
          name: '室外未用'
        },
        {
          value: 69,
          name: '车库未用'
        },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  },
}
