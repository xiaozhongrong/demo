<template>
    <el-row>
  <el-col :span="24">
          <div class="not" :style="'height:'+ fullHeight +'px'">
            <img src="../assets/fail.png" alt="">
            <p class="animated shake">抱歉！该功能暂未开通服务...</p>
            <el-button @click="handleBack" plain icon="el-icon-refresh-right">返回上一页</el-button>
            <el-button @click="handleHome" type="text" icon="el-icon-s-home">网站首页</el-button>
          </div>
  </el-col>
</el-row>
</template>

<script>
export default {
  data(){
    return{
      fullHeight:document.documentElement.clientHeight - 60
    }
  },
  methods:{
    getBodyHeight(){
      /* 动态获取浏览器高度 */
      const that = this
      window.onresize = ()=>{
        return(()=>{
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })
      }
    },
    handleBack(){
      this.$router.go(-1)
    },
    handleHome(){
      this.$router.push('/homepage')
    }
  },
  watch:{
    /* 监控浏览器高度变化 */
    fullHeight(val){
      if (this.timer) {
        this.fullHeight = val
        this.timer = true
        let that = this
        /* 防止过度调用监听事件 导致页面卡顿 */
        setTimeout(() => {
          that.timer = false
        }, 400);
      }
    }
  },
  mounted(){
    this.getBodyHeight()
  }
}
</script>

<style scoped>
.not{
  padding-top: 10%;
}
.not img{
  transform: scale(.8);
}
.not p{
  font-size: 2.5rem;
  font-weight: 700;
}
.el-button{
  margin: 20px 20px;
  font-size: 1.1rem;
  color: #2C3E50;
}
</style>