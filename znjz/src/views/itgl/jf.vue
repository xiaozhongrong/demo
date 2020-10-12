<template>
  <div class="room">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="room-box box1">
          <p class="title">温度TOP</p>
          <div class="mix-charts">
            <IEcharts ref="chart1" :option='temp'></IEcharts>
          </div>
          <p class="title">湿度TOP</p>
          <div class="mix-charts">
            <IEcharts ref="chart2" :option='humidity'></IEcharts>
          </div>
        </div>
        <div class="room-box box1 m-top">
          <p class="title">机柜电源电压</p>
          <el-table :data="tableData" stripe max-height='365' 
            :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
            <el-table-column prop="name" label="机柜" align="center"></el-table-column>
            <el-table-column prop="dy" label="电压" align="center"></el-table-column>
            <el-table-column prop="Status" label="电源" align="center">
              <template slot-scope="scope">
                <el-tag v-if="scope.row.Status==0" type="success">正常</el-tag>
                <el-tag v-else type="danger">关闭</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="room-box box2">
          <div class="jf-box"></div>
        </div>
        <div class="room-box box3 m-top">
          <el-table :data="eventData" stripe max-height='345'
            :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
            <el-table-column prop="level" label="告警级别" align="center" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span class="st-square normal" v-if="scope.row.level==0" title="正常"></span>
                <span class="st-square busy" v-if="scope.row.level==3" title="繁忙"></span>
                <span class="st-square danger" v-if="scope.row.level==4" title="危险"></span>
                <span class="st-square fault" v-if="scope.row.level==5" title="故障"></span>
              </template>
            </el-table-column>
            <el-table-column prop="IP" label="告警设备" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="remark" label="设备位置" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="createTime" label="预警时间" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="reason" label="告警原因" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="lastTime" label="持续时间" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="state" label="告警状态" align="center" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <el-tag v-if="scope.row.state==0" type="danger">未解决</el-tag>
                <el-tag v-else type="success">已解决</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="room-box box1">
          <p class="title">设备电源状况</p>
          <div class="mix-charts1">
            <IEcharts ref="chart3" :option='source'></IEcharts>
          </div>
        </div>
        <div class="room-box box1 m-top">
          <p class="title">设备电源断开列表</p>
          <el-table :data="sourceData" stripe max-height='365'
            :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
            <el-table-column prop="type" label="类型" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="name" label="设备名称" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="wz" label="设备位置" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="time" label="断电时间" align="center" :show-overflow-tooltip="true"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import IEcharts from '../../components/echart/charts'
import chart from '../../../static/data/echartsData'
import info from '../../../static/data/other'
import other from '../../../static/data/other'
  export default {
    name: 'room',
    components:{IEcharts},
    data() {
      return {
        temp:{},
        humidity:{},
        tableData:[],
        source:{},
        sourceData:[],
        eventData:[],
      }
    },
    created(){
      this.getData();
    },
    mounted(){
      window.addEventListener('resize',this.resizeChart);
    },
    beforeDestroy(){
      window.removeEventListener('resize',this.resizeChart);
    },
    methods: {
      resizeChart(){
        this.$refs.chart1.resize();
        this.$refs.chart2.resize();
        this.$refs.chart3.resize();
      },
      getData(){
        this.temp = chart.temp;
        this.humidity = chart.humidity;
        this.tableData = info.jg;
        this.source= chart.source;
        this.sourceData = other.sourceData;
        this.eventData = other.eventData;
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
