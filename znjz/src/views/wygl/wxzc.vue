<template>
  <div class="fwzc">
    <div>
      <el-select v-model="type">
        <el-option v-for="item in options" :key="item.label" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-input v-model="key" placeholder="输入关键字" class="search-input"></el-input>
    </div>
    <div class="m-top">
      <el-table :data="tableData.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" max-height="700px" stripe
        :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
        <el-table-column prop="order" label="序号" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="type" label="类型" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="takeEffectDate" label="生效日期" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="dueDate" label="到期日期" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="copyright" label="版权所有" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="state" label="状态" align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.state === 1 ? 'danger' : 'success'"
            close-transition
            v-text="scope.row.state === 1 ? '异常' : '正常'"
          ></el-tag>
        </template>
        </el-table-column>
        <el-table-column prop="remarks" label="备注" align="center" :show-overflow-tooltip="true"></el-table-column>
      </el-table>
      <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="pageIndex" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import wxzc from '../../../static/data/wygl'
  export default {
    name: 'fwzc',
    data() {
      return {
        pageIndex: 1,
        pageSize: 10,
        total: 0,
        tableData: [],
        options: [{
            label: '所有类型',
            value: 0
          },
          {
            label: '专利',
            value: 1
          },
          {
            label: '商标',
            value: 2
          },
          {
            label: '其它',
            value: 3
          },
        ],
        type: 0,
        key: '',
      }
    },
    methods: {
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(pageIndex) {
        this.pageIndex = pageIndex;
      },
      getData(){
        this.tableData = wxzc.wxzcData
        this.total = this.tableData.length
      }
    },
    mounted(){
      this.getData()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
