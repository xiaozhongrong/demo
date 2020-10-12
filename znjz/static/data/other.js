//IT管理数据
export default{
    // IT管理--机房--机柜
    jg:[
        {name:'机柜-1',dy:'3V',Status:0},
        {name:'机柜-2',dy:'3V',Status:0},
        {name:'机柜-3',dy:'3V',Status:1},
        {name:'机柜-4',dy:'3V',Status:0},
        {name:'机柜-5',dy:'3V',Status:0},
    ],
    // IT管理--机房--设备电源断开数据
    sourceData:[
        {type:'机柜电源',name:'192.168.100.230',wz:'2-F405',time:'2020-08-21 08:10:53'},
        {type:'机柜电源',name:'192.168.100.231',wz:'2-F405',time:'2020-08-21 08:10:53'},
        {type:'变压器电源',name:'192.168.100.160',wz:'2-F405',time:'2020-08-21 08:10:53'},
        {type:'空调电源',name:'192.168.100.140',wz:'2-F405',time:'2020-08-21 08:10:53'},
    ],
    // IT管理--机房--告警事件
    eventData:[
        {level:'5',IP:'192.168.100.101',remark:'2-F504',createTime:'2020-06-24 20:17:58',reason:'主机断开',lastTime:'20天19小时5分36秒',state:'0'},
        {level:'4',IP:'192.168.100.101',remark:'2-F504',createTime:'2020-07-16 16:33:36',reason:'主机断开',lastTime:'5分28秒',state:'1'},
        {level:'4',IP:'192.168.100.102',remark:'2-F504',createTime:'2020-08-14 18:15:47',reason:'主机断开',lastTime:'6分15秒',state:'1'},
        {level:'4',IP:'192.168.100.104',remark:'2-F504',createTime:'2020-06-16 20:46:28',reason:'主机断开',lastTime:'16分36秒',state:'1'},
        {level:'3',IP:'192.168.100.101',remark:'2-F504',createTime:'2020-03-23 22:19:16',reason:'主机断开',lastTime:'17分6秒',state:'1'},
    ],
    // 服务器--详情--磁盘使用情况
    diskData:[
        {disk:'C:',total:'80GB',used:'59.58GB',unsed:'20.42GB',rate:'74.48'},
        {disk:'D:',total:'284GB',used:'95.70GB',unsed:'188.30GB',rate:'33.7'},
        {disk:'E:',total:'284GB',used:'207.21GB',unsed:'76.79GB',rate:'72.96'},
        {disk:'F:',total:'283.51GB',used:'89.37GB',unsed:'194.13GB',rate:'31.52'},
    ],
    //服务器--详情--磁盘-存储性能（参数数据）
    storageData:[
        {name:'读取总字节/秒',newData:'26B',upDate:'36B',avg:'14B',max:'65B',min:'0B'},
        {name:'写入总字节/秒',newData:'26B',upDate:'36B',avg:'14B',max:'65B',min:'0B'},
        {name:'磁盘总读取/秒',newData:'26B',upDate:'36B',avg:'14B',max:'65B',min:'0B'},
        {name:'磁盘总写入/秒',newData:'26B',upDate:'36B',avg:'14B',max:'65B',min:'0B'},
        {name:'磁盘空闲时间',newData:'26%',upDate:'16%',avg:'14%',max:'35%',min:'0%'},
    ],
    storageRatio:[
        {time:'2020-08-30',t1:'0',t2:'0',t3:'0',t4:'0',t5:'0',t6:'0'},
        {time:'2020-08-29',t1:'0',t2:'0',t3:'0',t4:'0',t5:'0',t6:'0'},
        {time:'2020-08-28',t1:'0',t2:'0',t3:'0',t4:'0',t5:'0',t6:'0'},
        {time:'2020-08-27',t1:'0',t2:'0',t3:'0',t4:'0',t5:'0',t6:'0'},
        {time:'2020-08-26',t1:'0',t2:'0',t3:'0',t4:'0',t5:'0',t6:'0'},
        {time:'2020-08-25',t1:'0',t2:'0',t3:'0',t4:'0',t5:'0',t6:'0'},
        {time:'2020-08-24',t1:'0',t2:'0',t3:'0',t4:'0',t5:'0',t6:'0'},
    ],
    //服务器--详情--磁盘-盘符趋势（表格数据）
    trendData:[
        {disk:'C:',t1:'0.00B',t2:'-',t3:'-',t4:'-',t5:'-',t6:'-'},
        {disk:'D:',t1:'0.00B',t2:'-',t3:'-',t4:'-',t5:'-',t6:'-'},
        {disk:'E:',t1:'0.00B',t2:'-',t3:'-',t4:'-',t5:'-',t6:'-'},
        {disk:'F:',t1:'0.00B',t2:'-',t3:'-',t4:'-',t5:'-',t6:'-'},
    ],
    //服务器--详情（基础信息）
    basicsData:[
        {label:'设备名称',value:'192.168.2.6-win'},
        {label:'IP地址',value:'192.168.2.6'},
        {label:'设备位置',value:'南大科技园'},
        {label:'设备用途',value:'YYHPC'},
        {label:'物理总内存',value:'3.03G'},
        {label:'服务器当前时间',value:'2020-08-20,09:44:45.081,+08:00'},
        {label:'系统信息',value:''},
        {label:'正常运行时间',value:'18小时15分44秒'},
    ],
    //服务器--详情（端口开放）
    portData:[
        {port:'80',state:'0'},
        {port:'82',state:'0'},
        {port:'86',state:'0'},
        {port:'135',state:'0'},
        {port:'139',state:'0'},
        {port:'445',state:'0'},
        {port:'3395',state:'0'},
        {port:'5953',state:'0'},
        {port:'8889',state:'0'},
        {port:'47001',state:'0'},
        {port:'49154',state:'0'},
    ],
    //服务器--详情（服务信息）
    servicData:[
        {name:'Application Experience'},
        {name:'Application Host HelperService'},
        {name:'Base Filtering Engine'},
        {name:'CNG Key Isolation'},
        {name:'COM+ Event System'},
        {name:'Computer Browser'},
        {name:'Cryptographic Services'},
        {name:'DCOM Server Process Launcher'},
        {name:'Desktop Window Manager Session Maneger'},
        {name:'DHCP Client'},
    ],
    //服务器--详情（处理器负载）
    barData1: [{
        label: '连接状态',
        value: '1'
      },
      {
        label: '进程数',
        value: '96'
      },
      {
        label: '线程数',
        value: '1486'
      },
    ],
    barData2: [{
        label: '处理器负载(平均1分钟)',
        value: '0.1958'
      },
      {
        label: '处理器负载(平均5分钟)',
        value: '0.1216'
      },
      {
        label: '处理器负载(平均15分钟)',
        value: '0.0933'
      },
    ],
    //交换机--详情（端口）
    oddports:[
      {name:'1',state:1,flag:0,},
      {name:'3',state:0,flag:0,},
      {name:'5',state:0,flag:0,},
      {name:'7',state:1,flag:0,},
      {name:'9',state:0,flag:0,},
      {name:'11',state:1,flag:0,},
      {name:'13',state:0,flag:0,},
      {name:'15',state:0,flag:0,},
      {name:'17',state:0,flag:0,},
      {name:'19',state:0,flag:0,},
      {name:'21',state:0,flag:0,},
      {name:'23',state:1,flag:0,},
      {name:'25',state:0,flag:1,},
      {name:'27',state:0,flag:1,},
    ],
    evenports:[
      {name:'2',state:0,flag:0,},
      {name:'4',state:0,flag:0,},
      {name:'6',state:1,flag:0,},
      {name:'8',state:0,flag:0,},
      {name:'10',state:1,flag:0,},
      {name:'12',state:0,flag:0,},
      {name:'14',state:0,flag:0,},
      {name:'16',state:1,flag:0,},
      {name:'18',state:1,flag:0,},
      {name:'20',state:0,flag:0,},
      {name:'22',state:0,flag:0,},
      {name:'24',state:0,flag:0,},
      {name:'26',state:1,flag:1,},
      {name:'28',state:0,flag:1,},
    ],
    //交换机--详情（基础信息）
    basicsDataJHJ:[
      {label:'设备名称',value:'10.1.1.4-JHJ'},
      {label:'IP地址',value:'10.1.1.4'},
      {label:'设备位置',value:'*********'},
      {label:'设备用途',value:'HuaWei'},
      {label:'物理总内存',value:'7.90G'},
      {label:'服务器当前时间',value:''},
      {label:'系统信息',value:''},
      {label:'正常运行时间',value:'28时36分36秒'},
    ],
    //交换机--详情（端口带宽）
    portBradWidth:[
      {label:'10M',value:'5,9,14,15,16,21,22,23'},
      {label:'100M',value:'1,2,3,4,6,7,8,10,11,12,13,17,18,19,20,24'},
      {label:'1000M',value:'25,26,27,28'}
    ],
    //交换机--详情（端口设备）
    portSData:[
      {label:'端口1',value:''},
      {label:'端口2',value:'192.168.2.2'},
      {label:'端口3',value:''},
      {label:'端口4',value:''},
      {label:'端口5',value:''},
      {label:'端口6',value:''},
      {label:'端口7',value:''},
      {label:'端口8',value:'192.168.2.6'},
      {label:'端口9',value:''},
      {label:'端口10',value:''},
      {label:'端口11',value:''},
      {label:'端口12',value:''},
      {label:'端口13',value:''},
      {label:'端口14',value:''},
      {label:'端口15',value:''},
      {label:'端口16',value:'192.168.2.133'},
      {label:'端口17',value:''},
      {label:'端口18',value:''},
      {label:'端口19',value:''},
      {label:'端口20',value:''},
      {label:'端口21',value:''},
      {label:'端口22',value:''},
      {label:'端口23',value:''},
      {label:'端口24',value:''},
      {label:'端口25',value:''},
      {label:'端口26',value:''},
      {label:'端口27',value:''},
      {label:'端口28',value:''}
    ],
}