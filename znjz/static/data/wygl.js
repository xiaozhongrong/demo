export default {
  //资产管理
  //设备资产
  sbzcData: [{
      assetName: 'Windows服务器',//资产名称
      assetType: '服务器',       //资产类型
      buyTime: '2018-09-01',    //购买时间 
      dueDate: '2024-09-01',    //到期时间
      newMtbm: '',              //最近一次维修时间
      state: 1,            //状态
      //基础信息（显示名称、类型、制造厂商、型号、SN、备注）
      information:{title:"",type:"",manufacturer:"",model:"",SN:"",remarks:""},
      //主板信息（制造厂商、型号）
      mainboard:{manufacturer:"",model:""},
      //配置信息（IP、操作系统、CPU名称、CPU总数、内存容量、硬盘容量、网卡类型\网卡MAC地址）
      dispose:{IP:"",system:"",CUPName:"",CUPTotal:"",RAM:"",LVM:"",PIC:"",PICMAC:"",},
      //主板信息（购买时间、 维护开始时间\结束时间、最后维保时间、固定资产编号、责任人、联系电话、邮箱、厂商联系人）
      defend:{buyDate:"",upholdStart:"",upholdEnd:"",endUphold:"",number:"",duty:"",phone:"",email:"",frimLink:"",remarks:""}
    },
    {
      assetName: 'Windows服务器',
      assetType: '服务器',
      buyTime: '2018-09-01',
      dueDate: '2024-09-01',
      newMtbm: '',
      state: 1,
      information:{title:"",type:"",manufacturer:"",model:"",SN:"",remarks:""},
      mainboard:{manufacturer:"",model:""},
      dispose:{IP:"",system:"",CUPName:"",CUPTotal:"",RAM:"",LVM:"",PIC:"",PICMAC:"",},
      defend:{buyDate:"",upholdStart:"",upholdEnd:"",endUphold:"",number:"",duty:"",phone:"",email:"",frimLink:"",remarks:""}
    },
    {
      assetName: 'Linux服务器',
      assetType: '服务器',
      buyTime: '2018-09-01',
      dueDate: '2024-09-01',
      newMtbm: '',
      state: 1,
      information:{title:"",type:"",manufacturer:"",model:"",SN:"",remarks:""},
      mainboard:{manufacturer:"",model:""},
      dispose:{IP:"",system:"",CUPName:"",CUPTotal:"",RAM:"",LVM:"",PIC:"",PICMAC:"",},
      defend:{buyDate:"",upholdStart:"",upholdEnd:"",endUphold:"",number:"",duty:"",phone:"",email:"",frimLink:"",remarks:""}
    },
    {
      assetName: 'Linux服务器',
      assetType: '服务器',
      buyTime: '2018-09-01',
      dueDate: '2024-09-01',
      newMtbm: '',
      state: 0,
      information:{title:"",type:"",manufacturer:"",model:"",SN:"",remarks:""},
      mainboard:{manufacturer:"",model:""},
      dispose:{IP:"",system:"",CUPName:"",CUPTotal:"",RAM:"",LVM:"",PIC:"",PICMAC:"",},
      defend:{buyDate:"",upholdStart:"",upholdEnd:"",endUphold:"",number:"",duty:"",phone:"",email:"",frimLink:"",remarks:""}
    },
    {
      assetName: 'Linux服务器',
      assetType: '服务器',
      buyTime: '2018-09-01',
      dueDate: '2024-09-01',
      newMtbm: '',
      state: 0,
      information:{title:"",type:"",manufacturer:"",model:"",SN:"",remarks:""},
      mainboard:{manufacturer:"",model:""},
      dispose:{IP:"",system:"",CUPName:"",CUPTotal:"",RAM:"",LVM:"",PIC:"",PICMAC:"",},
      defend:{buyDate:"",upholdStart:"",upholdEnd:"",endUphold:"",number:"",duty:"",phone:"",email:"",frimLink:"",remarks:""}
    },
  ],
  //房屋资产
  fwzcData: [
    {order:"01",address:"南昌新建区",company:"高新国际",buyDate:"2020-05-06",dueDate:"2022-05-06",isPay:0,state:0},
    {order:"02",address:"南昌新建区",company:"招商国际",buyDate:"2020-12-06",dueDate:"2022-12-05",isPay:1,state:1},
    {order:"03",address:"南昌东湖区",company:"高新国际",buyDate:"2020-05-06",dueDate:"2022-05-06",isPay:1,state:1},
    {order:"04",address:"南昌东湖区",company:"招商国际",buyDate:"2020-12-06",dueDate:"2022-12-05",isPay:1,state:1},
    {order:"07",address:"南昌高新区",company:"高新国际",buyDate:"2020-05-06",dueDate:"2022-05-06",isPay:0,state:0},
    {order:"08",address:"南昌高新区",company:"招商国际",buyDate:"2020-12-06",dueDate:"2022-12-05",isPay:0,state:0},
    {order:"05",address:"南昌红谷滩区",company:"高新国际",buyDate:"2020-05-06",dueDate:"2022-05-06",isPay:0,state:0},
    {order:"06",address:"南昌红谷滩区",company:"招商国际",buyDate:"2020-12-06",dueDate:"2022-12-05",isPay:0,state:0},
    {order:"09",address:"南昌高新区",company:"招商国际",buyDate:"2020-12-06",dueDate:"2022-12-05",isPay:0,state:0},
    {order:"10",address:"南昌红谷滩区",company:"高新国际",buyDate:"2020-05-06",dueDate:"2022-05-06",isPay:0,state:0},
    {order:"11",address:"南昌红谷滩区",company:"招商国际",buyDate:"2020-12-06",dueDate:"2022-12-05",isPay:0,state:0},
  ],
  //无形资产
  wxzcData: [
    {order:"01",type:"商标权",takeEffectDate:"2020-05-12",dueDate:"2030-05-12",copyright:"单位",state:0,remarks:"-"},
    {order:"02",type:"土地使用权",takeEffectDate:"2020-06-12",dueDate:"2025-06-29",copyright:"单位",state:0,remarks:"-"},
    {order:"03",type:"商业秘诀权",takeEffectDate:"2025-06-12",dueDate:"2025-06-02",copyright:"单位",state:0,remarks:"-"},
    {order:"04",type:"非专利权",takeEffectDate:"2020-07-12",dueDate:"2023-05-23",copyright:"单位",state:0,remarks:"-"},
    {order:"05",type:"专利权",takeEffectDate:"2020-05-12",dueDate:"2030-05-12",copyright:"单位",state:0,remarks:"-"},
    {order:"06",type:"著作权",takeEffectDate:"2020-06-12",dueDate:"2025-06-29",copyright:"单位",state:0,remarks:"-"},
    {order:"07",type:"特许权",takeEffectDate:"2025-06-12",dueDate:"2025-06-02",copyright:"单位",state:0,remarks:"-"},
    {order:"08",type:"土地使用权",takeEffectDate:"2020-07-12",dueDate:"2023-05-23",copyright:"单位",state:0,remarks:"-"},
    {order:"09",type:"商标权",takeEffectDate:"2020-05-12",dueDate:"2030-05-12",copyright:"单位",state:0,remarks:"-"},
    {order:"10",type:"土地使用权",takeEffectDate:"2020-06-12",dueDate:"2025-06-29",copyright:"单位",state:0,remarks:"-"},
    {order:"11",type:"商业秘诀权",takeEffectDate:"2025-06-12",dueDate:"2025-06-02",copyright:"单位",state:0,remarks:"-"},
    {order:"12",type:"非专利权",takeEffectDate:"2020-07-12",dueDate:"2023-05-23",copyright:"单位",state:0,remarks:"-"},
  ],


  //缴费管理
  //缴费信息
  jfglData:[
    {
      order:"01",
      payMentTime:"2020-10-31",
      payMentUnit:"南昌高速",
      payMentType:"全款",
      payMentMan:"缴费人员",
      payMentMay:"现金",
      payMentState:1,
      telephone:"13445099839"
    },
    {
      order:"02",
      payMentTime:"2020-10-01",
      payMentUnit:"江西高速",
      payMentType:"分期",
      payMentMan:"缴费人员",
      payMentMay:"转账",
      payMentState:1,
      telephone:"13445546098"
    },
    {
      order:"03",
      payMentTime:"2020-10-01",
      payMentUnit:"南昌高速",
      payMentType:"全款",
      payMentMan:"缴费人员",
      payMentMay:"转账",
      payMentState:1,
      telephone:"13445099839"
    },
    {
      order:"04",
      payMentTime:"2020-01-01",
      payMentUnit:"吉安高速",
      payMentType:"分期",
      payMentMan:"缴费人员",
      payMentMay:"转账",
      payMentState:1,
      telephone:"13445546098"
    },
    {
      order:"05",
      payMentTime:"2018-10-01",
      payMentUnit:"九江高速",
      payMentType:"分期",
      payMentMan:"缴费人员",
      payMentMay:"转账",
      payMentState:1,
      telephone:"13445099839"
    },
    {
      order:"06",
      payMentTime:"2019-05-05",
      payMentUnit:"江西高速",
      payMentType:"分期",
      payMentMan:"缴费人员",
      payMentMay:"转账",
      payMentState:0,
      telephone:"13445546098"
    }
  ],

  //安保巡检
  //今日巡检名单
  jrxjData:[
    {inspectionMan:"张锋",inspectionArea:"02F-15F",inspectionTime:"01时00分",telephone:"133xxxxxxxx"},
    {inspectionMan:"张奎",inspectionArea:"15F-30F",inspectionTime:"01时00分",telephone:"139xxxxxxxx"},
    {inspectionMan:"李生",inspectionArea:"30F-40F",inspectionTime:"00时40分",telephone:"136xxxxxxxx"},
    {inspectionMan:"王可",inspectionArea:"-3F-01F",inspectionTime:"01时00分",telephone:"185xxxxxxxx"},
  ],
  //安保人员信息
  abryData:[
    {number:"01",name:"张锋",sex:1,telephone:"133xxxxxxxx",post:"队长"},
    {number:"02",name:"张奎",sex:1,telephone:"139xxxxxxxx",post:"队员"},
    {number:"03",name:"李生",sex:1,telephone:"136xxxxxxxx",post:"队员"},
    {number:"04",name:"王可",sex:0,telephone:"185xxxxxxxx",post:"队员"},
  ],
  
  //考勤管理
  //考勤表
  kqbgData:[
    {username:"李力宏",business:"财务部",clockInTime:"2020-09-09 星期三,08:54:09成功打卡",attendance:{normal:"100",late:"0",leaveEarly:"0",neglect:"0",leave:"0"}},
    {username:"沈腾腾",business:"信息部",clockInTime:"2020-09-09 星期三,08:54:15成功打卡",attendance:{normal:"120",late:"0",leaveEarly:"0",neglect:"0",leave:"1"}},
    {username:"黄渤立",business:"技术部",clockInTime:"2020-09-09 星期三,08:54:29成功打卡",attendance:{normal:"104",late:"0",leaveEarly:"0",neglect:"2",leave:"2"}},
    {username:"王丽芳",business:"销售部",clockInTime:"2020-09-09 星期三,08:55:13成功打卡",attendance:{normal:"190",late:"0",leaveEarly:"0",neglect:"0",leave:"2"}},
    {username:"汪洋点",business:"财务部",clockInTime:"2020-09-09 星期三,08:56:09成功打卡",attendance:{normal:"200",late:"0",leaveEarly:"0",neglect:"1",leave:"1"}},
    {username:"李萍高",business:"信息部",clockInTime:"2020-09-09 星期三,08:56:15成功打卡",attendance:{normal:"124",late:"0",leaveEarly:"4",neglect:"0",leave:"0"}},
    {username:"聂著都",business:"技术部",clockInTime:"2020-09-09 星期三,08:56:29成功打卡",attendance:{normal:"105",late:"2",leaveEarly:"0",neglect:"0",leave:"3"}},
    {username:"王喜庆",business:"销售部",clockInTime:"2020-09-09 星期三,08:57:53成功打卡",attendance:{normal:"105",late:"4",leaveEarly:"4",neglect:"0",leave:"1"}},
    {username:"李力宏",business:"财务部",clockInTime:"2020-09-09 星期三,08:54:09成功打卡",attendance:{normal:"132",late:"0",leaveEarly:"0",neglect:"0",leave:"3"}},
    {username:"沈腾腾",business:"信息部",clockInTime:"2020-09-09 星期三,08:54:15成功打卡",attendance:{normal:"110",late:"0",leaveEarly:"0",neglect:"0",leave:"1"}},
    {username:"黄渤立",business:"技术部",clockInTime:"2020-09-09 星期三,08:54:29成功打卡",attendance:{normal:"111",late:"0",leaveEarly:"1",neglect:"0",leave:"1"}},
    {username:"王丽芳",business:"销售部",clockInTime:"2020-09-09 星期三,08:55:13成功打卡",attendance:{normal:"100",late:"2",leaveEarly:"0",neglect:"0",leave:"0"}},
    {username:"汪洋点",business:"财务部",clockInTime:"2020-09-09 星期三,08:56:09成功打卡",attendance:{normal:"130",late:"2",leaveEarly:"0",neglect:"0",leave:"1"}},
    {username:"李萍高",business:"信息部",clockInTime:"2020-09-09 星期三,08:56:15成功打卡",attendance:{normal:"130",late:"0",leaveEarly:"1",neglect:"0",leave:"0"}},
    {username:"聂著都",business:"技术部",clockInTime:"2020-09-09 星期三,08:56:29成功打卡",attendance:{normal:"150",late:"0",leaveEarly:"0",neglect:"1",leave:"0"}},
    {username:"王喜庆",business:"销售部",clockInTime:"2020-09-09 星期三,08:57:53成功打卡",attendance:{normal:"200",late:"0",leaveEarly:"1",neglect:"0",leave:"0"}},

  ]
}
