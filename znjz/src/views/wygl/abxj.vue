<template>
  <div class="abxj">
    <el-row :gutter="10">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">今日巡检人员名单</span>
          </div>
          <div class="mix-card">
            <el-table :data="jrxjData" max-height="300px" stripe size='small'
              :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
              <el-table-column prop="inspectionMan" label="巡检人员" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="inspectionArea" label="巡检区域" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="inspectionTime" label="巡检时间" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="telephone" label="联系电话" align="center" :show-overflow-tooltip="true"></el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="10">
          <el-col :span="6" v-for="(item,index) in zbData" :key="(item,index)">
            <el-card class="box-card zb-box">
              <p class="title1">
                <span v-if="item.flag==1&&item.time==1">今日早班</span>
                <span v-if="item.flag==1&&item.time==0">今日晚班</span>
              </p>
              <p class="title2">
                <span v-if="item.flag==0&&item.time==1">昨日早班</span>
                <span v-if="item.flag==0&&item.time==0">昨日晚班</span>
              </p>
              <p v-for="(child,index) in item.ry" :key="(child,index)">
                <span v-text="child.name"></span>：
                <span v-text="child.phone"></span>
              </p>
            </el-card>
          </el-col>
        </el-row>
        <el-card class="box-card m-top">
          <div class="mix-card2">
            <IEcharts ref="chart1" :option='xjzk'></IEcharts>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="m-top">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">安保人员信息</span>
          </div>
          <div>
            <el-table :data="abryData.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" max-height="300px" stripe size='small'
              :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
              <el-table-column prop="number" label="保安编号" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="name"  label="姓名" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="sex"  label="性别" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  {{scope.row.sex === 1 ? '男' : '女'}}
                </template>
              </el-table-column>
              <el-table-column prop="telephone"  label="联系电话" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="post"  label="职务" align="center" :show-overflow-tooltip="true"></el-table-column>
            </el-table>
            <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="pageIndex" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import yygl from '../../../static/data/yygl'
  import wygl from '../../../static/data/wygl'
  import IEcharts from '../../components/echart/charts'
  import chart from '../../../static/data/echartsData'
  export default {
    name: 'abxj',
    components: {
      IEcharts
    },
    data() {
      return {
        pageIndex:1,
        pageSize:10,
        total:0,
        
        abryData:[],
        jrxjData: [],
        
        zbData: [],
        xjzk: {},
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
        this.zbData = yygl.zbData;
        this.xjzk = chart.xjzk;
        this.jrxjData = wygl.jrxjData
        this.abryData = wygl.abryData
        this.total = this.abryData.length
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
