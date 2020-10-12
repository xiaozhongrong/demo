<template>
  <div class="login">

    <div class="welcome-box left">
      <h1>welcome</h1>
      <div class="line"></div>
      <h4>智能建筑管理平台</h4>
      <p>----V1.0.01----</p>
    </div>

    <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-width="0px">
      <div class="login-box left">
        <div class="logo">
          <img src="" alt="logo" />
        </div>

        <el-form-item prop="account">
          <el-input placeholder="账号" prefix-icon="el-icon-mobile-phone" v-model="loginForm.account"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input class="password" placeholder="密码" prefix-icon="el-icon-lock" v-model="loginForm.password"
            show-password @keyup.enter.native="submit"></el-input>
        </el-form-item>

        <el-button type="primary" class="btn login-btn" @click="submit">登录</el-button>
      </div>
    </el-form>
    
    <div class="company-info">
      <p>版权所有 Copyright © 江西XXX有限公司</p>
      <p>粤ICP备 XXXX号</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          account: "admin",
          password: "123456",
        },
        fieldRules: {
          account: [{
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }],
          password: [{
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }]
        },
      }
    },
    methods: {
      submit() {
        this.$router.push('/home');
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
