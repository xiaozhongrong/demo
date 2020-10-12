<template>
  <div class="homepage">
    <el-row :gutter="10">
      <el-col :span="10">
        <el-row :gutter="10">
          <el-col :span="8" v-for="(item,index) in zxtData" :key="(item,index)">
            <div class="state-box" :class="'color'+index">
              <p class="title">{{item.label}}</p>
              <p class="val">{{item.value}}</p>
            </div>
          </el-col>
        </el-row>
        <el-card class="box-card m-top">
          <el-table size='mini' :data="systemTable" height="210px" stripe :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
            <el-table-column prop="systemName" label="系统名称" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="timeOn" label="开始时间" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="cause" label="异常原因" align="center" :show-overflow-tooltip="true">
              <template slot-scope="scope">
              <el-tag
                v-if="scope.row.cause == 0"
                type="danger"
                v-text="'电源故障'"
              ></el-tag>
              <el-tag
                v-if="scope.row.cause == 1"
                type="warning"
                v-text="'系统故障'"
              ></el-tag>
              <el-tag
              v-if="scope.row.cause == 2"
              type="info"
              v-text="'其他原因'">
              </el-tag>
            </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="14">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">信息发布动态</span>
            <!-- <span class="r-btn lj">跳转信息发布中心</span> -->
          </div>
          <div class="mix-card3">
            <el-collapse v-model="activeName" accordion style="padding:0px 10px;">
              <el-collapse-item v-for="item in infos" :key="item.id" :title="item.theme" :name="item.id">
                <div>创建时间：{{item.creatTime}}</div>
                <div>描述：{{item.describe}}</div>
                <div><span class="xq-a">了解详情</span></div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="m-top">
      <el-card class="box-card" style="padding-bottom:10px;">
        <div class="xj-name">
          <ul>
            <li class="title">今日巡检人员名单：</li>
            <li>李逵</li>
            <li>张锋</li>
            <li>王胜</li>
            <li>李生</li>
            <li>张三</li>
          </ul>
        </div>
        <el-row :gutter="10" class="m-top" type="flex" justify="space-around">
          <el-col :span="4" v-for="item in xjData" :key="item.label">
            <div class="xj-box">
              <p class="title">{{item.label}}</p>
              <p class="val">{{item.value}}</p>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
    <el-row :gutter="10" class="m-top">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">停车场信息（车库：100个&nbsp;室外：80个）</span>
          </div>
          <div class="mix-charts1">
            <IEcharts ref="chart1" :option='tcChart'></IEcharts>
          </div>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">告警消息（*条）</span>
            <span class="gj-lsjl" @click="newDialog=false">历史记录</span>
          </div>
          <div class="mix-charts1">
            <el-table size='small' :data="warnTable" max-height="340px" stripe :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
              <el-table-column prop="warnSystem" label="告警系统" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="warnLevel" label="告警级别" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <span
                    class="st-square busy"
                    v-if="scope.row.warnLevel == 1"
                    title="紧急"
                  ></span>
                  <span
                    class="st-square danger"
                    v-if="scope.row.warnLevel == 2"
                    title="危险"
                  ></span>
                    <span
                    class="st-square fault"
                    v-if="scope.row.warnLevel == 3"
                    title="一般"
                  ></span>
                </template>
              </el-table-column>
              <el-table-column prop="warnTime" label="告警时间" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="duration" label="持续时间" align="center" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="state" label="状态" align="center" :show-overflow-tooltip="true"></el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card lang="box-card">
          <div slot="header" class="clearfix">
            <span class="title">视频监控</span>
          </div>
          <div class="mix-charts1">
            <el-table :data="spjkData" max-height="340px" border size="mini" stripe :show-header="false">
              <el-table-column prop="jkwz" label="视频监控位置" align="right"></el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="primary" size="mini" @click="dqjk(scope.index,scope.row)">调取监控</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="newDialog" width="65%" :modal-append-to-body='false'>
      <div slot="title" class="active">
        <span>告警历史记录</span>
        <hr>
      </div>
      <div class="dialog-box">
        
      </div>
    </el-dialog>

    <el-dialog class="video-dialog" :show-close='false' :visible.sync="spDialog" width="80%" :modal-append-to-body='false' :close-on-click-modal='false' top="80px">
      <div slot="title" class="basics">
        <i class="el-icon-video-play"></i>
        <span>{{sptitle}}</span>
        <i class="el-icon-error error" @click="spDialog=false"></i>
      </div>
      <div style="margin-top:-10px;padding:5px;">
        <div class="video-cont">
          <i class="el-icon-arrow-left left"></i>
          <i class="el-icon-arrow-right right"></i>
          <i class="el-icon-arrow-up top"></i>
          <i class="el-icon-arrow-down bottom"></i>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import homes from '../../static/data/home'
  import IEcharts from '../components/echart/charts'
  import chart from '../../static/data/echartsData'
  export default {
    name: 'homepage',
    components:{
      IEcharts,
    },
    data() {
      return {
        newDialog:false,
        spDialog:false,

        systemTable:[],
        warnTable:[],

        sptitle:'',
        activeName:'',
        zxtData: [],
        infos:[],
        xjData:[],
        tcChart:{},
        spjkData:[],
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
        this.zxtData = homes.zxtData;
        this.infos = homes.infos;
        this.xjData = homes.xjData;
        this.tcChart = chart.tcChart;
        this.spjkData = homes.spjkData;
        this.systemTable = homes.systemData
        this.warnTable = homes.warnTable
      },
      dqjk(index,row){
        this.spDialog = true;
        this.sptitle = row.jkwz;
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
