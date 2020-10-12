<template>
<el-container>
  <el-header>
    <Head></Head>
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
import Head from '../components/head'
export default {
  components: {
    Head },
  name:"Home",
  methods:{
      getPath(){
        console.log(this.$router.path);
      }
    },
  mounted(){
      
    },
}
</script>

<style>
  .el-header{
    padding: 0;
  }
  .el-main{
    margin: 10px;
    background-color: #fff;
  }
</style>