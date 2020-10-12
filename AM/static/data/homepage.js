export default {
  /* 所有资产表格数据 */
  assetTable: {
    tableData: [{
      station: '12',
      printer: '23',
      router: '22',
      server: '3',
      other: '10',
      scanner: '7',
      projector: '7'
    }],
    column: [{
        label: "IT资产",
        column: [{
            label: "工作站",
            prop: "station"
          },
          {
            label: "打印机",
            prop: "printer"
          },
          {
            label: "路由器",
            prop: "router"
          },
          {
            label: "服务器",
            prop: "server"
          },
          {
            label: "其他",
            prop: "other"
          },
        ]
      },
      {
        label: "非IT资产",
        column: [{
            label: "扫描机",
            prop: "scanner"
          },
          {
            label: "投影仪",
            prop: "projector"
          },
        ]
      }
    ]
  },
  /* 资产状态数据 */
  scanTable1: {
    tableData: [{
        id: "1",
        title: "监测到的工作站/服务器",
        number: "1",
        tabledata: [{
          index: "1",
          name: "Windows服务器",
          type: "服务器",
          os: "Windows",
          tag: "-",
          state: "在用",
          user: "鑫诚集团",
          class: "服务部",
          serial: "HOIS3230923",
          cost: "3900",
          beoverdue: "2020-10-01"
        }, ],
        column: [{
            prop: "name",
            label: "名称"
          },
          {
            prop: "type",
            label: "类型"
          },
          {
            prop: "os",
            label: "操作系统"
          },
          {
            prop: "tag",
            label: "服务标签"
          },
          {
            prop: "state",
            label: "状态"
          },
          {
            prop: "user",
            label: "用户"
          },
          {
            prop: "class",
            label: "部门"
          },
          {
            prop: "serial",
            label: "序列号"
          },
          {
            prop: "cost",
            label: "成本"
          },
          {
            prop: "beoverdue",
            label: "保修逾期日期"
          },
        ]
      },
      {
        id: "1",
        title: "扫描到的工作站/服务器",
        number: "6",
        tabledata: [{
          index: "1",
          name: "Windows服务器",
          type: "服务器",
          os: "Windows",
          tag: "-",
          state: "在用",
          user: "鑫诚集团",
          class: "服务部",
          serial: "HOIS3230923",
          cost: "3900",
          beoverdue: "2020-10-01"
        }, 
        {
          index: "2",
          name: "Windows服务器",
          type: "服务器",
          os: "Windows",
          tag: "SSMAA-A",
          state: "在用",
          user: "鑫诚集团",
          class: "安保部",
          serial: "HOIS3238473",
          cost: "3900",
          beoverdue: "2020-12-01"
        }, 
        {
          index: "3",
          name: "Windows服务器",
          type: "服务器",
          os: "Windows",
          tag: "-",
          state: "停用",
          user: "ZHZ集团",
          class: "服务部",
          serial: "HOIS3230092",
          cost: "3900",
          beoverdue: "2020-11-01"
        }, 
        {
          index: "4",
          name: "Windows服务器",
          type: "服务器",
          os: "Windows",
          tag: "HFFFS-A",
          state: "在用",
          user: "鑫诚集团",
          class: "服务部",
          serial: "HOIS3230948",
          cost: "3900",
          beoverdue: "2020-10-01"
        }, 
        {
          index: "5",
          name: "Linux服务器",
          type: "主机",
          os: "Limux",
          tag: "-",
          state: "停用",
          user: "白能集团",
          class: "通讯部",
          serial: "HOIS3233384",
          cost: "2500",
          beoverdue: "2022-01-01"
        }, {
          index: "6",
          name: "Linux服务器",
          type: "主机",
          os: "Limux",
          tag: "-",
          state: "停用",
          user: "白能集团",
          class: "通讯部",
          serial: "HOIS3234400",
          cost: "2500",
          beoverdue: "2022-01-01"
        }, ],
        column: [{
            prop: "name",
            label: "名称"
          },
          {
            prop: "type",
            label: "类型"
          },
          {
            prop: "os",
            label: "操作系统"
          },
          {
            prop: "tag",
            label: "服务标签"
          },
          {
            prop: "state",
            label: "状态"
          },
          {
            prop: "user",
            label: "用户"
          },
          {
            prop: "class",
            label: "部门"
          },
          {
            prop: "serial",
            label: "序列号"
          },
          {
            prop: "cost",
            label: "成本"
          },
          {
            prop: "beoverdue",
            label: "保修逾期日期"
          },
        ]
      },
      {
        id: "1",
        title: "扫描失败的工作站/服务器",
        number: "4[故障诊断]"
      },
      {
        title: "下次扫描时间表:",
        number: "未配置/立即配置"
      }
    ],
    columns: [{
        prop: "title",
        label: "主题",
        width: "80%"
      },
      {
        prop: "number",
        label: "数量/操作",
        width: "20%"
      },
    ]
  },
  scanTable2: {
    tableData: [{
        title: "过去7天没有扫描的工作站/服务器",
        number: "10"
      },
      {
        title: "硬件变更在最近的",
        number: ""
      },
      {
        title: "软件变更在最近的",
        number: ""
      },
      {
        title: "详尽的审计工作报表",
        number: ""
      },
    ],
    columns: [{
        prop: "title",
        label: "主题",
        width: "80%"
      },
      {
        prop: "number",
        label: "数量/操作",
        width: "20%"
      }
    ]
  },
  stateTable3: {
    tableData: [{
        title: "所有在库的资产",
        number: "12"
      },
      {
        title: "所有在用的资产",
        number: "11"
      },
      {
        title: "所有在修的资产",
        number: "1"
      },
      {
        title: "租赁到期的资产",
        number: "0"
      },
    ],
    columns: [{
        prop: "title",
        label: "主题",
        width: "80%"
      },
      {
        prop: "number",
        label: "数量/操作",
        width: "20%"
      }
    ]
  },
}
