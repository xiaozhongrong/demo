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
        <el-table-column prop="address" label="位置" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="company" label="购买单位" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="buyDate" label="购买时间" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="dueDate" label="到期时间" align="center" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="isPay" label="是否缴费" align="center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{scope.row.isPay === 1 ? '否' : '是'}}
          </template>
        </el-table-column>
        <el-table-column prop="state" label="状态" align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.state === 1 ? 'danger' : 'success'"
            close-transition
            v-text="scope.row.state === 1 ? '异常' : '正常'"
          ></el-tag>
        </template>
        </el-table-column>
      </el-table>
      <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="pageIndex" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import fwzc from '../../../static/data/wygl';
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
            label: '已出售',
            value: 1
          },
          {
            label: '已出租',
            value: 2
          },
          {
            label: '空闲',
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
        this.tableData = fwzc.fwzcData
        this.total = this.tableData.length
      },
    },
    mounted(){
      this.getData()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
