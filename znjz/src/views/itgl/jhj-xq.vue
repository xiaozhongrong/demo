<template>
  <div class="jhj-xq">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <img src="../../../static/img/jhj.png" class="img-icon-jhj" align="absmiddle">
        <ul class="base-ul-jhj">
          <li>设备名称:10.1.1.4-JHJ</li>
          <li>IP：10.1.1.4</li>
          <li>用途：huawei4</li>
          <li>位置：--------</li>
        </ul>
        <div class="del-btn-jhj">
          <el-button type="primary" plain round size="mini" @click="portDialog = true">端口带宽</el-button>
          <el-button type="primary" plain round size="mini" @click="settingDialog = true">端口设置</el-button>
          <el-button type="primary" plain round size="mini" @click="portSettingDialog = true">端口设备</el-button>
          <el-button type="primary" plain round size="mini" @click="detailDialog = true">详情</el-button>
        </div>
      </div>
      <div class="mix-charts">
        <el-row :gutter="2">
          <el-col :span="6" class="l-padding">
            <p class="rate">CPU使用率：6%</p>
            <el-progress :percentage="6" :show-text="false" color="#1FB9FE"></el-progress><br>
            <p class="rate">内存使用率：8%</p>
            <el-progress :percentage="8" :show-text="false" color="#2CDF9A"></el-progress>
            <p class="rate">TCP总连接数（主动：0&nbsp;被动：0）</p>
          </el-col>
          <el-col :span="12">
            <div class="port-box">
              <ul class="syt">
                <li>
                  <img src="../../../static/img/port/up_icon.png" align="absmiddle">
                  <span>已连接</span>
                </li>
                <li>
                  <img src="../../../static/img/port/down_icon.png" align="absmiddle">
                  <span>未连接</span>
                </li>
                <li>
                  <img src="../../../static/img/port/gup_icon.png" align="absmiddle">
                  <span>连接光口</span>
                </li>
                <li>
                  <img src="../../../static/img/port/dgup_icon.png" align="absmiddle">
                  <span>未接光口</span>
                </li>
                <li>
                  <img src="../../../static/img/port/cb_icon.png" align="absmiddle">
                  <span>错包口</span>
                </li>
                <li>
                  <img src="../../../static/img/port/cbg_icon.png" align="absmiddle">
                  <span>错包光口</span>
                </li>
                <li>
                  <img src="../../../static/img/port/db_icon.png" align="absmiddle">
                  <span>丢包口</span>
                </li>
                <li>
                  <img src="../../../static/img/port/dbg_icon.png" align="absmiddle">
                  <span>丢包光口</span>
                </li>
              </ul>
              <i class="el-icon-full-screen screen" @click="portScreen = true"></i>
              <div class="port-panel">
                <ul class="port">
                  <li v-for="(item,index) in oddports" :key="item.name" :class="(index%6==5)?'mr-20':''"
                    style="padding-bottom:15px;">
                    <span class="port-title">{{item.name}}</span><br>
                    <!-- <p><img src="../../../static/img/port/up_icon1.png"></p> -->
                    <span><img src="../../../static/img/port/down_icon1.png" v-if="item.state!=1 && item.flag == 0 "></span>
                    <span><img src="../../../static/img/port/up_icon1.png" v-if="item.state==1 && item.flag == 0"></span>
                    <span><img src="../../../static/img/port/gup_icon1.png" v-if="item.state==1 && item.flag == 1"></span>
                    <span><img src="../../../static/img/port/dgup_icon1.png" v-if="item.state!=1 && item.flag == 1"></span>
                  </li>
                </ul>
                <ul class="port">
                  <li v-for="(item,index) in evenports" :key="item.name" :class="(index%6==5)?'mr-20':''">
                    <!-- <span><img src="../../../static/img/port/down_icon1.png"></span> -->
                    <span><img src="../../../static/img/port/down_icon1.png" v-if="item.state!=1 && item.flag == 0 "></span>
                    <span><img src="../../../static/img/port/up_icon1.png" v-if="item.state==1 && item.flag == 0"></span>
                    <span><img src="../../../static/img/port/gup_icon1.png" v-if="item.state==1 && item.flag == 1"></span>
                    <span><img src="../../../static/img/port/dgup_icon1.png" v-if="item.state!=1 && item.flag == 1"></span>
                    <p class="port-title">{{item.name}}</p>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <el-row class="jcxx x-center">
              <el-col :span="12">
                <div class="title">当天流量统计</div>
                <el-row class="m-top">
                  <el-col :span="12">
                    <el-progress type="circle" :percentage="32" :width="60"></el-progress>
                    <p class="subtext">输入总计</p>
                  </el-col>
                  <el-col :span="12">
                    <el-progress type="circle" :percentage="74" :width="60"></el-progress>
                    <p class="subtext">输入总计</p>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="12">
                <div class="title">环比数据值</div>
                <el-row class="m-top">
                  <el-col :span="12">
                    <el-progress type="circle" :percentage="68" :width="60"></el-progress>
                    <p class="subtext">输入总计</p>
                  </el-col>
                  <el-col :span="12">
                    <el-progress type="circle" :percentage="19" :width="60"></el-progress>
                    <p class="subtext">输入总计</p>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-row :gutter="10" class="m-top">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="jhj-e-title">接收流量(端口：)</span>
          </div>
          <div class="mix-charts3">
            <IEcharts ref="chart1" :option='Inflow'></IEcharts>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="jhj-e-title">发送流量(端口：)</span>
          </div>
          <div class="mix-charts3">
            <IEcharts ref="chart2" :option='Outflow'></IEcharts>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="m-top">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="jhj-e-title">端口广播包数(端口：)</span>
          </div>
          <div class="mix-charts3">
            <IEcharts ref="chart3" :option='lineoption'></IEcharts>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="jhj-e-title">输入输出错包数(端口：)</span>
          </div>
          <div class="mix-charts3">
            <IEcharts ref="chart4" :option='erroroption'></IEcharts>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="jhj-e-title">输入输出丢包数(端口：)</span>
          </div>
          <div class="mix-charts3">
            <IEcharts ref="chart5" :option='discardoption'></IEcharts>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="detailDialog" width="35%" :modal-append-to-body='false'>
      <div slot="title" class="active">
        <span>基本信息</span>
        <hr>
      </div>
      <div class="dialog-box">
        <el-table :data="basicsDataJHJ" border stripe size="small" :show-header="false">
          <el-table-column prop="label" label="名称" width="150" align="right"></el-table-column>
          <el-table-column prop="value" label="值" align="center" :show-overflow-tooltip="true"></el-table-column>
        </el-table>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="portDialog" width="35%" :modal-append-to-body='false'>
      <div slot="title" class="active">
        <span>端口带宽</span>
        <hr>
      </div>
      <div class="dialog-box">
        <el-table :data="portBradWidth" border stripe size="small" :show-header="false">
          <el-table-column prop="label" label="名称" width="150" align="right"></el-table-column>
          <el-table-column prop="value" label="值" align="center" :show-overflow-tooltip="true"></el-table-column>
        </el-table>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="settingDialog" :modal-append-to-body='false'>
      <template>
        <div style="margin-top: 20px">
          <el-radio v-model="settingInfo.PlaceType" label="0" size="medium">1上面</el-radio>
          <el-radio v-model="settingInfo.PlaceType" label="1" size="medium">2上面</el-radio>
        </div>
        <div style="margin-top: 20px">
          光口端口： <el-input v-model="settingInfo.Ports" placeholder="请输入光口端口，逗号分隔"></el-input>
        </div>
      </template>
      <div class="dialog-footer" slot="footer">
        <el-button type="primary" @click="settingDialog=false" plain>确定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="portSettingDialog" width="35%" :modal-append-to-body='false'>
      <div slot="title" class="active">
        <span>端口设备设置</span>
        <hr>
      </div>
      <div class="dialog-box">
        <el-table :data="portSData" border stripe size="small">
          <el-table-column prop="label" label="端口号" width="150" align="right"></el-table-column>
          <el-table-column prop="value" label="端口设备IP地址" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.value" size="small" placeholder="输入绑定的IP地址"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="portScreen" :modal-append-to-body='false'>
      <div slot="title" class="basics">
        <span>交换机面板（*排）</span>
        <hr>
      </div>
      <ul class="syt">
        <li>
          <img src="../../../static/img/port/up_icon.png" align="absmiddle">
          <span>已连接</span>
        </li>
        <li>
          <img src="../../../static/img/port/down_icon.png" align="absmiddle">
          <span>未连接</span>
        </li>
        <li>
          <img src="../../../static/img/port/gup_icon.png" align="absmiddle">
          <span>连接光口</span>
        </li>
        <li>
          <img src="../../../static/img/port/dgup_icon.png" align="absmiddle">
          <span>未接光口</span>
        </li>
        <li>
          <img src="../../../static/img/port/cb_icon.png" align="absmiddle">
          <span>错包口</span>
        </li>
        <li>
          <img src="../../../static/img/port/cbg_icon.png" align="absmiddle">
          <span>错包光口</span>
        </li>
        <li>
          <img src="../../../static/img/port/db_icon.png" align="absmiddle">
          <span>丢包口</span>
        </li>
        <li>
          <img src="../../../static/img/port/dbg_icon.png" align="absmiddle">
          <span>丢包光口</span>
        </li>
      </ul>
      <div class="port-panel">
        <ul class="port">
          <li v-for="(item,index) in oddports" :key="item.name" :class="(index%6==5)?'mr-20':''"
            style="padding-bottom:15px;">
            <span class="port-title">{{item.name}}</span><br>
            <!-- <p><img src="../../..../../../static/img/port/up_icon1.png"></p> -->
            <span><img src="../../../static/img/port/down_icon1.png" v-if="item.state!=1 && item.flag == 0 "></span>
            <span><img src="../../../static/img/port/up_icon1.png" v-if="item.state==1 && item.flag == 0"></span>
            <span><img src="../../../static/img/port/gup_icon1.png" v-if="item.state==1 && item.flag == 1"></span>
            <span><img src="../../../static/img/port/dgup_icon1.png" v-if="item.state!=1 && item.flag == 1"></span>
          </li>
        </ul>
        <ul class="port">
          <li v-for="(item,index) in evenports" :key="item.name" :class="(index%6==5)?'mr-20':''">
            <!-- <span><img src="../../..../../../static/img/port/down_icon1.png"></span> -->
            <span><img src="../../../static/img/port/down_icon1.png" v-if="item.state!=1 && item.flag == 0 "></span>
            <span><img src="../../../static/img/port/up_icon1.png" v-if="item.state==1 && item.flag == 0"></span>
            <span><img src="../../../static/img/port/gup_icon1.png" v-if="item.state==1 && item.flag == 1"></span>
            <span><img src="../../../static/img/port/dgup_icon1.png" v-if="item.state!=1 && item.flag == 1"></span>
            <p class="port-title">{{item.name}}</p>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import other from '../../../static/data/other'
  import IEcharts from '../../components/echart/charts'
  import chart from '../../../static/data/echartsData'
  export default {
    name: 'jhj-xq',
    components: {
      IEcharts
    },
    data() {
      return {
        portScreen: false,
        detailDialog: false,
        basicsDataJHJ: [],
        portDialog: false,
        portBradWidth: [],
        settingDialog: false,
        settingInfo: {
          PlaceType: '0',
          Ports: '25,26,27,28',
        },
        portSettingDialog: false,
        portSData: [],
        oddports: [],
        evenports: [],
        Inflow: {},
        Outflow: {},
        lineoption: {},
        erroroption: {},
        discardoption: {},
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
        this.$refs.chart3.resize();
        this.$refs.chart4.resize();
        this.$refs.chart5.resize();
      },
      getData() {
        this.oddports = other.oddports;
        this.evenports = other.evenports;
        this.Inflow = chart.Inflow;
        this.Outflow = chart.Outflow;
        this.lineoption = chart.lineoption;
        this.erroroption = chart.erroroption;
        this.discardoption = chart.discardoption;
        this.basicsDataJHJ = other.basicsDataJHJ;
        this.portBradWidth = other.portBradWidth;
        this.portSData = other.portSData;
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
