<template>
  <div class="wyzl">
    <el-row :gutter="10">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">出租状况统计</span>
          </div>
          <div class="mix-card">
            <IEcharts ref="chart1" :option="czCharts"></IEcharts>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">园区企业类型统计</span>
          </div>
          <div class="mix-card">
            <IEcharts ref="chart2" :option="qyType"></IEcharts>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="m-top">
      <el-col :span="24">
        <el-table max-height="330px" stripe :data="tableData.slice((pageIndex-1)*pageSize,pageIndex*pageSize)"
          :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
          <el-table-column prop="floor" label="楼层位置" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="lessor" label="租赁人" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="unit" label="单位/其它" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="phone" label="电话" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="trem" label="租赁期限" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="area" label="租赁面积" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="rent" label="租金（月/季/年）" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="charge" label="负责人" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="chargeNum" label="负责人联系电话" align="center" :show-overflow-tooltip="true"></el-table-column>
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
  import yygl from '../../../static/data/yygl'
  import IEcharts from '../../components/echart/charts'
  import chart from '../../../static/data/echartsData'
  export default {
    name: 'wyzl',
    components: {
      IEcharts
    },
    data() {
      return {
        pageIndex:1,
        pageSize:10,
        total:0,
        czCharts: {},
        qyType: {},
        tableData: [],
      }
    },
    created() {
      this.getData();
    },
    mounted() {
      window.addEventListener('resize', this.resizeChart);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resizeChart);
    },
    methods: {
      resizeChart() {
        this.$refs.chart1.resize();
        this.$refs.chart2.resize();
      },
      getData() {
        this.tableData = yygl.zlData;
        this.czCharts = chart.czCharts;
        this.qyType = chart.qyType;
        this.total = this.tableData.length
      },
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(pageIndex) {
        this.pageIndex = pageIndex;
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
