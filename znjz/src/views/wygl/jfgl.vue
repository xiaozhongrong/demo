<template>
  <div class="jfgl">
    <el-card class="box-card">
      <el-form ref="newForm" :model="newForm" label-width="120px">
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="缴费时间" prop="jfsj">
              <el-date-picker v-model="newForm.jfsj" class="date-P" type="daterange" align="right"
                placeholder="选择日期范围" :picker-options="pickerOptions2">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="缴费单位" prop="jfdw">
              <el-select v-model="newForm.jfdw" placeholder="选择缴费单位">
                <el-option v-for="item in jfdws" :key="item.label" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="缴费人员" prop="jfry">
              <el-input v-model="newForm.jfry" placeholder="输入缴费人员"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="缴费类型" prop="jflx">
              <el-select v-model="newForm.jflx" placeholder="选择缴费类型">
                <el-option v-for="item in jflxs" :key="item.label" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="缴费方式" prop="jffs">
              <el-select v-model="newForm.jffs" placeholder="选择缴费方式">
                <el-option v-for="item in jffss" :key="item.label" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="缴费状态" prop="jfzt">
              <el-select v-model="newForm.jfzt" placeholder="选择缴费状态">
                <el-option v-for="item in jfzts" :key="item.label" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <el-button type="primary" @click="search" :loading="btnLoading">查询</el-button>
              <el-button type="info" @click="resetForm('newForm')">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-row class="m-top">
      <el-col :span="24">
        <el-table :data="tableData.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" max-height="600px" stripe
          :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
          <el-table-column prop="order" label="序号" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="payMentTime" label="缴费时间" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="payMentUnit" label="缴费单位" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="payMentType" label="缴费类型" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="payMentMan" label="缴费人员" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="telephone" label="联系电话" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="payMentMay" label="缴费方式" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="payMentState" label="缴费状态" align="center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
              <el-tag
                :type="scope.row.payMentState === 0 ? 'danger' : 'success'"
                close-transition
                v-text="scope.row.payMentState === 0 ? '失败' : '成功'"
              ></el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="" label="操作" align="center" width="160">
            <template slot-scope="scope">
              <el-button type="primary" size="small">详情</el-button>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="pageIndex" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import user from '../../../static/data/user'
import yygl from '../../../static/data/yygl'
import jfgl from '../../../static/data/wygl'
  export default {
    name: 'jfgl',
    data() {
      return {
        btnLoading: false,
        pageIndex: 1,
        pageSize: 10,
        total: 0,
        tableData: [],
        newForm: {
          jfsj:'',
          jfdw:'',
          jflx:'',
          jfry:'',
          jffs:'',
          jfzt:''
        },
        pickerOptions2:{},
        jfdws:[],
        jflxs:[],
        jfzts:[],
        jffss:[],
      }
    },
    created(){
      this.getData();
    },
    methods: {
      getData(){
        this.jffss = yygl.paymentTypes;
        this.jfdws = yygl.jfdws;
        this.jflxs = yygl.jflxs;
        this.jfzts = yygl.jfzts;
        this.tableData = jfgl.jfglData
        this.total = this.tableData.length
      },
      search() {
        // this.btnLoading = true;
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(pageIndex) {
        this.pageIndex = pageIndex;
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
