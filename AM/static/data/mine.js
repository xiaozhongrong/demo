export default {

    /* 未完成打印条形码 */
    incompleteTable:{
        tableData:[
            {productType:"服务器",date:"2020-04-13",creator:"Administrator",assets:"3",detailed:"手动生成(ABC1003XYZ - ABC1004XYZ)"},
            {productType:"服务器",date:"2020-04-13",creator:"Administrator",assets:"3",detailed:"手动生成(ABC1003XYZ - ABC1004XYZ)"},
            {productType:"工作站",date:"2020-05-23",creator:"Administrator",assets:"4",detailed:"次序生成(EEE1003XYZ - EEE1004XYZ)"},
        ],
        columns:[
            {prop:"productType",label:"产品类型",},
            {prop:"date",label:"创建日期",},
            {prop:"creator",label:"创建者",},
            {prop:"assets",label:"资产数",},
            {prop:"detailed",label:"明细",},
        ]
    },
    /* 表格数据 */
    tableData:{
        datas:[
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
            {name:"1",type:"1",isLease:"1",beOverdue:"1",product:"1",state:"1",user:"1",class:"1",serialNum:"1",money:"1"},
        ],
        columns:[
            {align:"center",prop:"name",label:"名称"},
            {align:"center",prop:"type",label:"配置项类型"},
            {align:"center",prop:"isLease",label:"是否租借"},
            {align:"center",prop:"beOverdue",label:"租赁期限"},
            {align:"center",prop:"product",label:"产品"},
            {align:"center",prop:"state",label:"资产状态"},
            {align:"center",prop:"user",label:"用户"},
            {align:"center",prop:"class",label:"部门"},
            {align:"center",prop:"serialNum",label:"序列号"},
            {align:"center",prop:"money",label:"订购成本"},
        ]
    }
}