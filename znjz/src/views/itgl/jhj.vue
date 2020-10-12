<template>
  <div class="jhj">
    <el-row>
      <el-col :span="24">
        <el-radio-group v-model="CategoryId" @change="changeCategoryId">
          <el-radio-button label="2">交换机</el-radio-button>
        </el-radio-group>
        <el-input class="search-input r-btn" placeholder="输入搜索内容" suffix-icon="el-icon-search"
          @keyup.enter.native="getlist"></el-input>
      </el-col>
    </el-row>
    <el-row class="m-top">
      <el-col :span="24">
        <el-table :data="tableData.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" max-height="700px" stripe
          :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
          <el-table-column prop="Status" label="状态" width="80px" align="center">
            <template slot-scope="scope">
              <span class="st-square normal1" v-if="scope.row.Status==0" title="正常"></span>
              <span class="st-square busy" v-if="scope.row.Status==3" title="繁忙"></span>
              <span class="st-square danger" v-if="scope.row.Status==4" title="危险"></span>
              <span class="st-square fault" v-if="scope.row.Status==5" title="故障"></span>
            </template>
          </el-table-column>
          <el-table-column prop="IP" label="IP地址" width="135" align="center"></el-table-column>
          <el-table-column prop="Remark" label="设备用途" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="Location" label="设备位置" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="监测点描述" align="center" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span>总数:{{scope.row.TotalNum}}&nbsp;</span>
              <span>正常:{{scope.row.TotalNum-scope.row.BusyNum-scope.row.DangerNum-scope.row.FaultNum}}&nbsp;</span>
              <span>繁忙:{{scope.row.BusyNum}}&nbsp;</span>
              <span>危险:{{scope.row.DangerNum}}&nbsp;</span>
              <span>故障:{{scope.row.FaultNum}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="updateTime" label="更新时间" width="160" align="center"></el-table-column>
          <el-table-column label="采集状态" align="center" width="120">
            <template slot-scope="scope">
              <el-tag :type="scope.row.Status===5?'danger' : 'success'" close-transition
                v-text="scope.row.Status===5?'未启用' : '已启用'"></el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="120">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="details(scope.row.hostId)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top:10px;float:right;">
          <el-pagination :current-page="pageIndex" :page-sizes="[10,20,50,100]" :page-size="pageSize"
            @size-change="handleSizeChange" @current-change="handleCurrentChange"
            layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import devices from '../../../static/data/device'
  export default {
    name: 'jhj',
    data() {
      return {
        CategoryId: 2,
        pageIndex: 1,
        pageSize: 10,
        total: 0,
        tableData: [],
      }
    },
    created() {
      this.getlist();
    },
    methods: {
      details(hostId){
        this.$router.push('/itgl/jhj-xq/'+hostId);
      },
      getlist() {
        let categoryId = this.CategoryId;
        this.tableData = [];
        let table = [];
        if (categoryId == 2) {
          devices.devices.forEach(row => {
            if (row.CategoryId == categoryId) {
              this.tableData.push(row);
            }
          });
          this.total = this.tableData.length;
        }
      },
      changeCategoryId(val) {
        this.CategoryId = val;
        this.getlist();
        },
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(pageIndex) {
        this.pageIndex = pageIndex;
      }
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
