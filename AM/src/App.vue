<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>

export default {
  components: {
     },
  name: 'App',
  data(){
    return{
      isRouterAlive : true,
    }
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

*{
  margin: 0;
  padding: 0;
}
body .el-table th.gutter{
    display: table-cell!important;
}
</style>
