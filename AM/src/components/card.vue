<template>
    <el-card class="box-card" shadow="hover"> 
    <div slot="header" class="clearfix">
        <span class="box-card-title">{{title}}</span>
        <el-button @click="handleclick()" :icon = icon style="float: right; padding: 3px 0" type="text">{{btnName}}</el-button>
    </div>
    <div class="text item">
      <slot name="content"></slot>  
    </div>
    </el-card>
</template>
<script>
    export default {
        name:"card",
        props:{
            title:String,
            btnName:String,
            icon:String,
            click:Function
        },
        methods:{
            handleclick(){
                if (this.click) {
                    this.click()
                }
            }
        }
    }
</script>
<style scoped>
  .text {
    font-size: 16px;
  }
  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    min-height: 400px;
    font-weight: 700;
  }
  .box-card-title{
    font-size: 1.2rem;
  }
</style>