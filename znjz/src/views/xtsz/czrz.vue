<template>
  <div class="czrz">
    <el-row>
      <el-col :span="24">
        <el-date-picker v-model="daterange" class="date-P" type="daterange" align="right" placeholder="选择日期范围"
          :picker-options="pickerOptions2">
        </el-date-picker>
        <el-input v-model="key" class="search-input" placeholder="输入用户名称" suffix-icon="el-icon-search" @keyup.enter.native="getlist"></el-input>
      </el-col>
    </el-row>
    <el-row class="m-top">
      <el-col>
        <el-table :data="tableData" max-height="700px"
          :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
          <el-table-column prop="username" label="用户名称" width="180" align="center"></el-table-column>
          <el-table-column prop="Description" label="操作描述" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="OperateTime" label="时间" width="180" align="center"></el-table-column>
          <el-table-column label="操作" width="120" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="page">
          <el-pagination :current-page="pageIndex" :page-sizes="[10,20,50,100]" :page-size="pageSize" 
            @size-change="handleSizeChange" @current-change="handleCurrentChange"
            layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import user from '../../../static/data/user'
  export default {
    name: 'czrz',
    data() {
      return {
        total: 0,
        pageIndex: 1,
        pageSize: 10,
        key:'',
        tableData: [],
        daterange: [],
        startdate: "",
        enddate: "",
        pickerOptions2: {},
      }
    },
    created() {
      this.getData();
      this.getlist();
    },
    methods: {
      getData() {
        this.pickerOptions2 = user.pickerOptions2;
        // this.tableData = user.journal;
      },
      getlist(){
        this.tableData = [];
        let key=this.key;
        let index = this.pageIndex;
        let size = this.pageSize;
        if(key == ''){
          this.total = user.journal.length;
          for (let i = (index-1)*size; i < user.journal.length; i++) {
              if(i<(index*size)){
                this.tableData.push(user.journal[i]);
              } 
          }
        }else{
          let table = [];
          user.journal.forEach(row=>{
            if(row.username == key){
              table.push(row)
            }
          });
          this.total = table.length;
          for (let i = (index-1)*size; i < table.length; i++) {
              if(i<(index*size)){
                this.tableData.push(table[i]);
              } 
          }
        }
      },
      handleSizeChange(val){
        this.pageSize = val;
        this.getlist();
      },
      handleCurrentChange(val){
        this.pageIndex = val;
        this.getlist();
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
