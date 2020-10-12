export default {
  // 新的租约表格数据
  data: {
    tableDataCheck: [{
        id: "6",
        mange: "办公区打印机",
        user: "Administrator",
        from: "2019.12.02",
        to: "2022.10.09",
        beOverdue: "10",
        state: "使用中",
        return: "-",
        creator: "Administrator"
      },
      {
        id: "7",
        mange: "办公区打印机",
        user: "Administrator",
        from: "2019.12.02",
        to: "2022.10.09",
        beOverdue: "10",
        state: "使用中",
        return: "-",
        creator: "Administrator"
      },
      {
        id: "2",
        mange: "办公区打印机",
        user: "Administrator",
        from: "2019.12.02",
        to: "2022.10.09",
        beOverdue: "10",
        state: "使用中",
        return: "-",
        creator: "Administrator"
      }
    ],
    tableDataRent:[
        {
            title:"办公区投影仪",
            id:"001",
            user:"Administrator",
            section:"-",
            start:"2019-10-10",
            end:"2020-12-01",
            beOverdue:"0",
            code:"-",
            type:"投影仪",
            pro:"HITACHI",
            address:"北京",
        },
        {
            title:"会议室投影仪",
            id:"021",
            user:"Administrator",
            section:"财务部",
            start:"2015-10-10",
            end:"2020-02-01",
            beOverdue:"17",
            code:"-",
            type:"投影仪",
            pro:"HP",
            address:"广州",
        },
    ]
  },
  columns: {
    columnCheck: [{
        align: "center",
        prop: "id",
        label: "ID"
      },
      {
        align: "center",
        prop: "mange",
        label: "资产"
      },
      {
        align: "center",
        prop: "user",
        label: "用户"
      },
      {
        align: "center",
        prop: "from",
        label: "从"
      },
      {
        align: "center",
        prop: "to",
        label: "到"
      },
      {
        align: "center",
        prop: "beOverdue",
        label: "逾期"
      },
      {
        align: "center",
        prop: "state",
        label: "资产状态"
      },
      {
        align: "center",
        prop: "return",
        label: "退回于"
      },
      {
        align: "center",
        prop: "creator",
        label: "创建者"
      },
    ],
    columnRent: [{
      align: "center",
      prop: "title",
      label: "名称"
    }, {
      align: "center",
      prop: "id",
      label: "ID"
    }, {
      align: "center",
      prop: "user",
      label: "用户"
    }, {
      align: "center",
      prop: "section",
      label: "部门"
    }, {
      align: "center",
      prop: "start",
      label: "租赁开始日"
    }, {
      align: "center",
      prop: "end",
      label: "租赁结束日"
    }, {
      align: "center",
      prop: "beOverdue",
      label: "逾期"
    }, {
      align: "center",
      prop: "code",
      label: "条形码"
    }, {
      align: "center",
      prop: "type",
      label: "产品类型"
    },{
        align:"center",
        prop:"pro",
        label:"产品"
    } ,{
      align: "center",
      prop: "address",
      label: "地点"
    }, ]
  }
}
