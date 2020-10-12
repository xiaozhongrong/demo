export default{
    // 对接子系统总数
    zxtData:[
        {label:'子系统总数',value:'8个'},
        {label:'连接正常数',value:'5个'},
        {label:'连接异常数',value:'3个'},
    ],
    //信息发布动态
    infos:[
        {id:'3',theme:'全新版本V2.0上线',creatTime:'2020-09-05 17:32:47',describe:'fdfdf'},
        {id:'4',theme:'地下车库排水问题已解决',creatTime:'2020-09-04 15:48:58',describe:'fdfsd'},
        {id:'5',theme:'停车月卡优惠多多',creatTime:'2020-09-03 08:16:39',describe:'rgrbv'},
        {id:'6',theme:'通知所有业主',creatTime:'2020-09-02 10:15:20',describe:'描述hft'},
        {id:'7',theme:'关于新能源汽车充电问题',creatTime:'2020-09-01 09:09:56',describe:'csod'}
    ],
    //巡检数据
    xjData:[
        {label:'A区巡检次数',value:'6次'},
        {label:'B区巡检次数',value:'4次'},
        {label:'地下停车场巡检次数',value:'8次'},
        {label:'楼区巡检次数',value:'5次'},
        {label:'外围巡检次数',value:'3次'},
    ],
    //视频监控
    spjkData:[
        {jkwz:'1号电梯监控',url:''},
        {jkwz:'2号电梯监控',url:''},
        {jkwz:'3号电梯监控',url:''},
        {jkwz:'北门监控',url:''},
        {jkwz:'南门监控',url:''},
        {jkwz:'地下室1号监控',url:''},
        {jkwz:'地下室2号监控',url:''},
        {jkwz:'地下室2号监控',url:''},
        {jkwz:'2栋2楼走廊监控',url:''},
        {jkwz:'保安室监控',url:''},
    ],
    //系统异常数据
    systemData:[
        {systemName:'门禁系统',timeOn:'2020-04-19 10:09:34',cause:'0'},/* 电源断开 */
        {systemName:'电梯系统',timeOn:'2020-04-13 00:29:24',cause:'0'},
        {systemName:'充电系统',timeOn:'2020-04-09 15:00:34',cause:'1'},/* 系统故障 */
        {systemName:'电源系统',timeOn:'2020-04-01 10:29:24',cause:'2'},/* 其他原因 */
        {systemName:'安保系统',timeOn:'2020-04-01 00:09:04',cause:'2'},
    ],
    //告警管理数据
    warnTable:[
        {warnSystem:'门禁系统',warnLevel:'1',warnTime:'2020-04-19 10:09:34',duration:'05小时13分',state:'故障'},
        {warnSystem:'电梯系统',warnLevel:'2',warnTime:'2020-04-13 00:29:24',duration:'02小时43分',state:'故障'},
        {warnSystem:'充电系统',warnLevel:'3',warnTime:'2020-04-09 15:00:34',duration:'04小时23分',state:'故障'},
        {warnSystem:'电源系统',warnLevel:'2',warnTime:'2020-04-01 10:29:24',duration:'04小时10分',state:'故障'},
        {warnSystem:'安保系统',warnLevel:'3',warnTime:'2020-04-01 00:09:04',duration:'01小时00分',state:'故障'},
    ]
}