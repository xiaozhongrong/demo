// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import promise from 'es6-promise'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/style.css'
import './assets/iconfont/iconfont.css'
import echarts from 'echarts'; //图表库
Vue.prototype.$echarts = echarts;


Vue.use(ElementUI)
Vue.config.productionTip = false
promise.polyfill()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
