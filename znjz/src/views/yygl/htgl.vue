<template>
  <div class="htgl">
    <el-card class="box-card">
      <el-form ref="newForm" :model="newForm" label-width="120px">
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="合同编号" prop="contBH">
              <el-input v-model="newForm.contBH" placeholder="请输入合同编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同名称" prop="contName">
              <el-input v-model="newForm.contName" placeholder="请输入合同名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同类型" prop="contType">
              <el-select v-model="newForm.contType" placeholder="请选择合同类型">
                <el-option v-for="item in contTypes" :key="item.label" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同状态" prop="contState">
              <el-select v-model="newForm.contState" placeholder="请选择合同状态">
                <el-option v-for="item in contStates" :key="item.label" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="签约单位" prop="contDw">
              <el-input v-model="newForm.contDw" placeholder="请输入签约单位"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="签约时间" prop="creatTime">
              <el-date-picker v-model="newForm.creatTime" class="date-P" type="daterange" align="right"
                placeholder="选择日期范围" :picker-options="pickerOptions2">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="付款时间" prop="paymentTime">
              <el-date-picker v-model="newForm.paymentTime" class="date-P" type="daterange" align="right"
                placeholder="选择日期范围" :picker-options="pickerOptions2">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="付款方式" prop="paymentType">
              <el-select v-model="newForm.paymentType" placeholder="请选择付款方式">
                <el-option v-for="item in paymentTypes" :key="item.label" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="经办部门" prop='jbbm'>
              <el-select v-model="newForm.jbbm" placeholder="请选择经办部门">
                <el-option v-for="item in jbbms" :key="item.label" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="责任人员" prop='zrry'>
              <el-select v-model="newForm.zrry" placeholder="请选择责任人">
                <el-option v-for="item in zrrys" :key="item.label" :label="item.label" :value="item.value"></el-option>
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
        <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" max-height="550px" stripe :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
          <el-table-column prop="order" label="序号" align="center"></el-table-column>
          <el-table-column prop="number" label="合同编号" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="title" label="合同名称" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="company" label="签约单位" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="money" label="合同金额" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="contType" label="合同类型" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="contState" label="合同状态" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="payTime" label="签约时间" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="signTime" label="付款时间" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="payMethod" label="付款方式" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="department" label="经办部门" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="person" label="责任人员" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="remark" label="备注" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="" label="操作" align="center" width="160">
            <template slot-scope="scope">
              <el-button type="primary" size="small">预览</el-button>
              <el-button type="info" size="small">下载</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import user from '../../../static/data/user'
  import yygl from '../../../static/data/yygl'
  export default {
    name: 'htgl',
    data() {
      return {
        btnLoading: false,
        currentPage:1,
        pageSize:10,
        total:0,
        tableData:[],
        newForm: {
          contId: 0,
          contBH: '',
          contName: '',
          contType: '',
          contState: '',
          contDw: '',
          creatTime: '',
          paymentTime: '',
          paymentType: '',
          jbbm: '',
          zrry: '',
        },
        contTypes: [],
        contStates: [],
        paymentTypes: [],
        jbbms: [],
        zrrys: [],
        pickerOptions2: {},
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.pickerOptions2 = user.pickerOptions2;
        this.contTypes = yygl.contTypes;
        this.contStates = yygl.contStates;
        this.paymentTypes = yygl.paymentTypes;
        this.jbbms = yygl.jbbms;
        this.zrrys = yygl.zrrys;
        this.tableData = yygl.contractList
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
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
      }
    },
  }

</script>

<style scoped>

</style>
