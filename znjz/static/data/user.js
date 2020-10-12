export default {
  //   用户列表
  userData: [{
      Id: '1',
      username: 'admin',
      nickName: '系统管理员',
      usertype: "超级管理员",
      tle: '13888888888',
      Status: 0,
    },
    {
      Id: '2',
      username: 'mary',
      nickName: 'mary',
      usertype: "普通管理员",
      tle: '13888888888',
      Status: 0,
    },
    {
      Id: '3',
      username: 'Jon',
      nickName: 'Jon',
      usertype: "普通管理员",
      tle: '13888888888',
      Status: 0,
    },
    {
      Id: '4',
      username: 'mack',
      nickName: 'mack',
      usertype: "用户",
      tle: '13888888888',
      Status: 0,
    },
    {
      Id: '5',
      username: 'Ben',
      nickName: 'Ben',
      usertype: "用户",
      tle: '13888888888',
      Status: 0,
    },
  ],
  //   日期快捷搜索
  pickerOptions2: {
    disabledDate(time) {
      return time.getTime() > Date.now() - 8.64e6
    },
    shortcuts: [{
      text: '最近一周',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近一个月',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近三个月',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit('pick', [start, end]);
      }
    }]
  },
  //   日志
  journal: [{
      username: 'admin',
      Description: '设置视图配置',
      OperateTime: "2019-12-30 09:56:41",
    },
    {
      username: 'admin',
      Description: '设置视图配置',
      OperateTime: "2019-12-29 09:56:41",
    },
    {
      username: 'admin',
      Description: '设置视图配置',
      OperateTime: "2019-12-28 09:56:41",
    },
    {
      username: 'admin',
      Description: '设置视图配置',
      OperateTime: "2019-12-27 09:56:41",
    },
    {
      username: 'mary',
      Description: '设置视图配置',
      OperateTime: "2019-12-26 09:56:41",
    },
    {
      username: 'admin',
      Description: '设置视图配置',
      OperateTime: "2019-12-25 09:56:41",
    },
    {
      username: 'admin',
      Description: '设置视图配置',
      OperateTime: "2019-12-24 09:56:41",
    },
    {
      username: 'mary',
      Description: '设置视图配置',
      OperateTime: "2019-12-23 09:56:41",
    },
    {
      username: 'mack',
      Description: '设置视图配置',
      OperateTime: "2019-12-22 09:56:41",
    },
    {
      username: 'Jon',
      Description: '设置视图配置',
      OperateTime: "2019-12-21 09:56:41",
    },
    {
      username: 'admin',
      Description: '设置视图配置',
      OperateTime: "2019-12-20 09:56:41",
    },
    {
      username: 'admin',
      Description: '设置视图配置',
      OperateTime: "2019-12-19 09:56:41",
    },
    {
      username: 'mary',
      Description: '设置视图配置',
      OperateTime: "2019-12-18 09:56:41",
    },
  ],
}
