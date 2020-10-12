import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location){
//   return originalPush.call(this,location).catch(err => err);
// };

export default new Router({
  // mode:'history',
  routes: [{
      path: '/',
      component: resolve => require(['../views/login.vue'], resolve)
    },
    {
      path: '/home',
      name:'首页',
      component: resolve => require(['../components/home.vue'], resolve),
      children: [{
        path: '/sbgl/spjk',
        name:'视频监控',
        component: resolve => require(['../views/sbgl/spjk.vue'], resolve)
      }, {
        path: '/sbgl/tccgl', 
        name:'停车场管理',
        component: resolve => require(['../views/sbgl/tccgl.vue'], resolve)
      }, {
        path: '/sbgl/yqhj', 
        name:'园区环境',
        component: resolve => require(['../views/sbgl/yqhj.vue'], resolve)
      }, {
        path: '/sbgl/yktgl', 
        name:'一卡通管理',
        component: resolve => require(['../views/sbgl/yktgl.vue'], resolve)
      }, {
        path: '/sbgl/other', 
        name:'设备管理',
        component: resolve => require(['../views/sbgl/sbgl.vue'], resolve)
      }, {
        path: '/itgl/fwq', 
        name:'服务器',
        component: resolve => require(['../views/itgl/fwq.vue'], resolve)
      }, {
        path: '/itgl/jhj', 
        name:'交换机',
        component: resolve => require(['../views/itgl/jhj.vue'], resolve)
      }, {
        path: '/itgl/jf', 
        name:'机房',
        component: resolve => require(['../views/itgl/jf.vue'], resolve)
      }, {
        path: '/itgl/win-xq/:id', 
        name:'win-服务器详情',
        component: resolve => require(['../views/itgl/win-xq.vue'], resolve)
      }, {
        path: '/itgl/linux-xq/:id', 
        name:'linux-服务器详情',
        component: resolve => require(['../views/itgl/linux-xq.vue'], resolve)
      }, {
        path: '/itgl/jhj-xq/:id', 
        name:'交换机详情',
        component: resolve => require(['../views/itgl/jhj-xq.vue'], resolve)
      }, {
        path: '/yygl/tcjf', 
        name:'停车交费',
        component: resolve => require(['../views/yygl/tcjf.vue'], resolve)
      }, {
        path: '/yygl/wyzl', 
        name:'物业租赁',
        component: resolve => require(['../views/yygl/wyzl.vue'], resolve)
      }, {
        path: '/yygl/htgl',
        name:'合同管理',
        component: resolve => require(['../views/yygl/htgl.vue'], resolve)
      }, {
        path: '/wygl/zcgl', 
        name:'资产管理',
        component: resolve => require(['../views/wygl/zcgl.vue'], resolve)
      }, {
        path: '/wygl/jfgl', 
        name:'缴费管理',
        component: resolve => require(['../views/wygl/jfgl.vue'], resolve)
      }, {
        path: '/wygl/abxj', 
        name:'安保巡检',
        component: resolve => require(['../views/wygl/abxj.vue'], resolve)
      }, {
        path: '/wygl/wybx', 
        name:'物业保修',
        component: resolve => require(['../views/wygl/wybx.vue'], resolve)
      }, {
        path: '/wygl/kqgl', 
        name:'考勤管理',
        component: resolve => require(['../views/wygl/kqgl.vue'], resolve)
      }, {
        path: '/xtsz/yhpz',
        name:'用户配置',
        component: resolve => require(['../views/xtsz/yhpz.vue'], resolve)
      },{
        path: '/xtsz/czrz',
        name:'操作日志',
        component: resolve => require(['../views/xtsz/czrz.vue'], resolve)
      },]
    }
  ]
})
