<template>
  <div class="zcgl">
    <div class="zcxz">
      <el-radio-group v-model="radio">
        <el-radio-button label="设备资产"></el-radio-button>
        <el-radio-button label="房屋资产"></el-radio-button>
        <el-radio-button label="无形资产"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="m-top">
      <el-card class="box-card">
        <v-sbzc v-if="radio=='设备资产'"></v-sbzc>
        <v-fwzc v-if="radio=='房屋资产'"></v-fwzc>
        <v-wxzc v-if="radio=='无形资产'"></v-wxzc>
      </el-card>
    </div>
  </div>
</template>

<script>
import vSbzc from './sbzc'
import vFwzc from './fwzc'
import vWxzc from './wxzc'
  export default {
    components:{
      vSbzc,
      vFwzc,
      vWxzc,
    },
    name: 'zcgl',
    data() {
      return {
        radio:'设备资产',
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
