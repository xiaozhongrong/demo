const { data } = require("autoprefixer");

export default[
    {
        id:1,
        menuCode:'sbgl',
        name:'设备管理',
        menuIcon:'iconfont iconshebeiguanli',
        children:[
            {
                id:2,
                menuCode:'',
                menuIcon:'iconfont iconshipinjiankong',
                name:'视频监控',
                menuUrl:'/sbgl/spjk',
                parentId:1
            },
            {
                id:4,
                menuCode:'',
                menuIcon:'el-icon-truck',
                name:'停车场管理',
                menuUrl:'/sbgl/tccgl',
                parentId:1
            },
            {
                id:5,
                menuCode:'',
                menuIcon:'iconfont iconyuanqu',
                name:'园区环境',
                menuUrl:'/sbgl/yqhj',
                parentId:1
            },
            {
                id:7,
                menuCode:'',
                menuIcon:'iconfont iconyiqiatong',
                name:'一卡通管理',
                menuUrl:'/sbgl/yktgl',
                parentId:1
            },
            {
                id:8,
                menuCode:'',
                menuIcon:'iconfont iconshebeiguanli',
                name:'设备管理',
                menuUrl:'/sbgl/other',
                parentId:1
            },
        ],
    },
    {
        id:9,
        menuCode:'itgl',
        name:'IT管理',
        menuIcon:'iconfont iconxingzhuang',
        children:[
            {
                id:10,
                menuCode:'',
                menuIcon:'iconfont iconfuwuqi',
                name:'服务器',
                menuUrl:'/itgl/fwq',
                parentId:9
            },
            {
                id:11,
                menuCode:'',
                menuIcon:'iconfont iconjiaohuanji',
                name:'交换机',
                menuUrl:'/itgl/jhj',
                parentId:9
            },
            {
                id:12,
                menuCode:'',
                menuIcon:'iconfont iconjifang',
                name:'机房',
                menuUrl:'/itgl/jf',
                parentId:9
            }
        ],
    },
    {
        id:13,
        menuCode:'yygl',
        name:'运营管理',
        menuIcon:'iconfont iconyunying',
        children:[
            {
                id:14,
                menuCode:'',
                menuIcon:'iconfont icontingchejiaofei',
                name:'停车交费',
                menuUrl:'/yygl/tcjf',
                parentId:13
            },
            {
                id:15,
                menuCode:'',
                menuIcon:'iconfont iconwuyezulin',
                name:'物业租赁',
                menuUrl:'/yygl/wyzl',
                parentId:13
            },
            {
                id:16,
                menuCode:'',
                menuIcon:'iconfont iconhetongguanli',
                name:'合同管理',
                menuUrl:'/yygl/htgl',
                parentId:13
            }
        ],
    },
    {
        id:17,
        menuCode:'wygl',
        name:'物业管理',
        menuIcon:'iconfont iconziyuan8',
        children:[
            {
                id:18,
                menuCode:'',
                menuIcon:'iconfont iconzichanguanli-',
                name:'资产管理',
                menuUrl:'/wygl/zcgl',
                parentId:17
            },
            {
                id:19,
                menuCode:'',
                menuIcon:'iconfont iconjiaofeiguanli',
                name:'缴费管理',
                menuUrl:'/wygl/jfgl',
                parentId:17
            },
            {
                id:20,
                menuCode:'',
                menuIcon:'iconfont iconanbao',
                name:'安保巡检',
                menuUrl:'/wygl/abxj',
                parentId:17
            },
            {
                id:21,
                menuCode:'',
                menuIcon:'iconfont iconwuyeguanli',
                name:'物业保修',
                menuUrl:'/wygl/wybx',
                parentId:17
            },
            {
                id:23,
                menuCode:'',
                menuIcon:'iconfont iconkaoqin',
                name:'考勤管理',
                menuUrl:'/wygl/kqgl',
                parentId:17
            }
        ],
    },
    {
        id:25,
        menuCode:'tjbb',
        name:'统计报表',
        menuIcon:'iconfont icontongjibaobiao',
        children:[],
    },
    {
        id:28,
        menuCode:'xtsz',
        name:'系统设置',
        menuIcon:'iconfont iconshezhi',
        children:[
            {
                id:29,
                menuCode:'',
                menuIcon:'el-icon-user',
                name:'用户配置',
                menuUrl:'/xtsz/yhpz',
                parentId:28
            },
            {
                id:30,
                menuCode:'',
                menuIcon:'el-icon-notebook-1',
                name:'操作日志',
                menuUrl:'/xtsz/czrz',
                parentId:28
            },
        ],
    },
]