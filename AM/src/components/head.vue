<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/homepage">首页</el-menu-item>
    <el-submenu index="/amg">
      <template slot="title">资产管理</template>
      <el-menu-item index="/amg">资产资料</el-menu-item>
      <el-menu-item index="/amg/means">资产申验</el-menu-item>
    </el-submenu>
    <el-submenu index="/aum">
      <template slot="title">资产变更</template>
      <el-menu-item index="/aum/fix">资产送修</el-menu-item>
      <el-menu-item index="/aum/borrow">资产租赁</el-menu-item>
    </el-submenu>
    <el-menu-item index="/inventory">资产盘点</el-menu-item>
    <el-menu-item index="/news">消息中心<i class="el-icon-message-solid"></i></el-menu-item>
    <el-submenu index="/set" style="float:right;right:40px">
      <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
      <el-menu-item index="/set/switch">
        个人中心
      </el-menu-item>
      <el-menu-item index="/set/switch">
        切换账号
      </el-menu-item>
      <el-menu-item index="/set/exit">
        退出登录
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
      this.$router.push(key)
    }
  }
};
</script>

<style scoped></style>
