<template>
  <div class="head-box">
    <el-row :gutter="10">
      <el-col :span="2">
        <div class="head-logo"></div>
      </el-col>
      <el-col :span="18">
        <span class="title">智能建筑管理平台</span>
      </el-col>
      <el-col :span="4">
        <div class="out-in">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img src="../../static/img/user.png">
              系统管理员&nbsp;丨
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/">退出登录</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'head-box',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
