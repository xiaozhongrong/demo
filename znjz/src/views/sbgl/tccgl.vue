<template>
  <el-row :gutter="40" class="el-row-mine">
    <el-col :span="5">
      <div class="grid-content bg-purple">
        <div class="main">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>   
        </div>
      </div>
    </el-col>
    <el-col :span="19">
      <div class="grid-content bg-purple">
        <div style="width:100%;height:150px;background-color:#fff">

        </div>

      </div>
        <el-row class="el-row-mine">
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <div style="height:620px;width:100%;background-color:#fff">

              </div>
            </div>
          </el-col>
        </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'spjk',
  data () {
    return {
      msg: '停车场管理'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .el-row-mine{
    margin-top: 25px;
  }

  .main li{
    list-style: none;
    display: inline-block;
    width: 70%;
    height: 50px;
    border-radius: 8px;
    margin-top: 50px;
    margin-left: 50px;
    background-color: #E4EFFF;
  }
  .main{
    background-color: #fff;
    width: 100%;
    height: 800px;
  }
</style>
