<template>
  <div class="tcjf">
    <el-row :gutter="10">
      <el-col :span="15">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">月租人员</span>
            <el-input class="search-input" style="margin-top:-5px;float:right;" v-model="key" placeholder="搜索..."
              size="small"></el-input>
          </div>
          <div class="mix-card">
            <el-table :data="tableData" size='small' max-height="345px" stripe
              :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
              <el-table-column prop="createdTime" label="办理日期" align="center" :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="lastTime" label="有效时长" align="center" sortable :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="usedId" label="办理人" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="phone" label="电话" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="carNum" label="车牌号" align="center" :show-overflow-tooltip="true"></el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">进出车流量</span>
          </div>
          <div class="mix-card">
            <IEcharts ref="chart1" :option="carFlow"></IEcharts>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="m-top">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">缴费记录</span>
            <el-input class="search-input" style="margin-top:-5px;float:right;" v-model="keyword" placeholder="搜索..."
              size="small"></el-input>
          </div>
          <div class="mix-card">
            <el-row type="flex" justify="space-around" class="m-top">
              <el-col :span="4" v-for="item in 5" :key="item">
                <div class="car-info">
                  <img src="/static/img/car.jpg">
                  <p>车牌号：***</p>
                  <p>停车时长：10小时20分</p>
                  <p>临时停车：</p>
                </div>
              </el-col>
            </el-row>
            <el-pagination class="m-top-2 r-btn" layout="prev, pager, next" :total="50"></el-pagination>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import yygl from '../../../static/data/yygl'
  import IEcharts from '../../components/echart/charts'
  import chart from '../../../static/data/echartsData'
  export default {
    name: 'tcjf',
    components: {
      IEcharts
    },
    data() {
      return {
        key: '',
        keyword: '',
        tableData: [],
        jfData: [],
        carFlow: [],
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
      },
      getData() {
        this.tableData = yygl.yzData;
        this.carFlow = chart.carFlow;
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
