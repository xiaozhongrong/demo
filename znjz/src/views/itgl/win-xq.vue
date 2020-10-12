<template>
  <div class="win-xq">
    <el-card class="box-card">
      <img src="../../../static/img/windows.png" class="img-icon" align="absmiddle">
      <ul class="base-ul">
        <li>IP：192.168.2.6</li>
        <li>用途：YYH-PC</li>
        <li>位置：南大科技园1号楼</li>
        <li>正常运行时间:25天36分56秒</li>
      </ul>
      <div class="del-btn">
        <el-button type="primary" plain round size="mini" @click="serviceDialog=true">服务</el-button>
        <el-button type="primary" plain round size="mini" @click="portOpen=true">端口开放</el-button>
        <el-button type="primary" plain round size="mini" @click="cpuLoad=true">处理器负载</el-button>
        <el-button type="primary" plain round size="mini" @click="detailDialog=true">详情</el-button>
      </div>
    </el-card>
    <el-row :gutter="10" class="m-top">
      <el-col :span="17">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">输入输出流量</span>
            <span class="info">
              <span>用途：汇聚交换机</span>
              <span>IP地址：192.168.2.2</span>
              <span>端口：6</span>
              <span class="mix">输入流量占比：6%</span>
              <span class="mix">输出流量占比：8.5%</span>
            </span>
          </div>
          <div class="mix-charts2">
            <IEcharts ref="chart1" :option='flow'></IEcharts>
          </div>
        </el-card>
        <el-row :gutter="10" class="m-top">
          <el-col :span="15">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="title">磁盘概况</span>
                <span class="disc-usage">(磁盘使用率：65.64%)</span>
                <span class="disk-type" v-for="item in gameNames" :key="item" @click="selected(item)"
                  :class="{active:activeName == item}">{{item}}</span>
              </div>
              <div class="mix-charts2">
                <div v-if="this.activeName=='盘符趋势'">
                  <el-radio-group v-model="trend" size="mini" style="text-align:center;width:100%;">
                    <el-radio-button label="1">趋势图</el-radio-button>
                    <el-radio-button label="2">表格数据</el-radio-button>
                  </el-radio-group>
                  <el-table v-if="trend=='2'" :data="trendData" size="small" max-height="250px" border
                    :header-cell-style="{background:'#EDF0F5',color:'#596075',opacity:'01'}">
                    <el-table-column prop="disk" label="盘符" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="t1" label="每小时" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="t2" label="当天" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="t3" label="每周" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="t4" label="每月" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="t5" label="每季度" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="t6" label="每年" :show-overflow-tooltip="true"></el-table-column>
                  </el-table>
                  <div v-else style="height:240px;width:100%;">
                    <IEcharts ref="chart4" :option='trendChart'></IEcharts>
                  </div>
                </div>
                <div v-else-if="this.activeName=='存储性能'">
                  <el-radio-group v-model="store" size="mini" style="text-align:center;width:100%;">
                    <el-radio-button label="1">参数数据</el-radio-button>
                    <el-radio-button label="2">环比数据</el-radio-button>
                  </el-radio-group>
                  <el-table v-if="store=='1'" :data="storageData" size="small" max-height="250px" border
                    :header-cell-style="{background:'#EDF0F5',color:'#596075',opacity:'01'}">
                    <el-table-column prop="name" label="参数名称" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="newData" label="最新数据" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="upDate" label="更改" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="avg" label="平均值" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="min" label="最小值" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="max" label="最大值" :show-overflow-tooltip="true"></el-table-column>
                  </el-table>
                  <el-table v-else :data="storageRatio" size="small" max-height="250px" border
                    :header-cell-style="{background:'#EDF0F5',color:'#596075',opacity:'01'}">
                    <el-table-column prop="time" label="时间" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="t1" label="读取总字节" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="t2" label="写入总字节" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="t3" label="磁盘总读取" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="t4" label="磁盘总写入" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="t5" label="磁盘总传输" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column prop="t6" label="空闲时间" :show-overflow-tooltip="true"></el-table-column>
                  </el-table>
                </div>
                <div v-else>
                  <el-table :data="tableData" max-height="280px"
                    :header-cell-style="{background:'#EDF0F5',color:'#596075',opacity:'1'}">
                    <el-table-column prop="disk" label="盘符" align="center"></el-table-column>
                    <el-table-column prop="total" label="总量" align="center" :show-overflow-tooltip="true">
                    </el-table-column>
                    <el-table-column prop="used" label="已使用" align="center" :show-overflow-tooltip="true">
                    </el-table-column>
                    <el-table-column prop="unsed" label="未使用" align="center" :show-overflow-tooltip="true">
                    </el-table-column>
                    <el-table-column prop="rate" label="使用率(%)" align="center"></el-table-column>
                  </el-table>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="9">
            <el-row :gutter="10">
              <el-col :span="12">
                <el-card class="box-card">
                  <div class="box-icon bg-icon1">
                    <div class="card-title">CPU使用率</div>
                    <div class="card-val">12.56%</div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="12">
                <el-card class="box-card">
                  <div class="box-icon bg-icon2">
                    <div class="card-title">磁盘使用率</div>
                    <div class="card-val">00.00%</div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
            <el-card class="box-card m-top">
              <div class="virtual">
                <p class="label">虚拟内存&nbsp;(共8.00GB)</p>
                <div class="m-top-2">
                  <el-progress :percentage="16" :show-text="false"></el-progress><br />
                  <p class="val">虚拟内存已用0.26GB</p><br />
                  <el-progress :percentage="84" :show-text="false"></el-progress><br />
                  <p class="val">虚拟内存可用7.26GB</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="7">
        <el-card class="box-card mix-card1">
          <div class="mix-charts1">
            <IEcharts ref="chart2" :option='memory'></IEcharts>
          </div>
          <div class="mix-charts1">
            <IEcharts ref="chart3" :option='memory1'></IEcharts>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 详情 -->
    <el-dialog :visible.sync="detailDialog" width="35%" :modal-append-to-body='false'>
      <div slot="title" class="active">
        <span>基本信息</span>
        <hr>
      </div>
      <div class="dialog-box">
        <el-table :data="basicsData" border stripe size="small" :show-header="false">
          <el-table-column prop="label" label="名称" width="150" align="right"></el-table-column>
          <el-table-column prop="value" label="值" align="center"></el-table-column>
        </el-table>
      </div>
    </el-dialog>
    <!-- 端口开放 -->
    <el-dialog :visible.sync="portOpen" width="30%" :modal-append-to-body='false'>
      <div slot="title" class="active">
        <span>端口开放</span>
        <hr>
      </div>
      <div class="dialog-box">
        <el-table :data="portData" border stripe size="small" :show-header="false">
          <el-table-column prop="port" label="名称" align="center"></el-table-column>
          <el-table-column prop="state" label="值" align="center">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.state==0" type="success">开启</el-tag>
              <el-tag v-else type="danger">未开启</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-dialog>
    <!-- 服务信息 -->
    <el-dialog :visible.sync="serviceDialog" width="30%" :modal-append-to-body='false'>
      <div slot="title" class="active">
        <span>服务信息</span>
        <hr>
      </div>
      <div class="dialog-box">
        <el-table :data="servicData" border stripe size="small" :show-header="false">
          <el-table-column prop="name" label="名称" align="center" :show-overflow-tooltip="true"></el-table-column>
        </el-table>
      </div>
    </el-dialog>
    <!-- 处理器负载 -->
    <el-dialog :visible.sync="cpuLoad" width="45%" :modal-append-to-body='false'>
      <div slot="title" class="active">
        <span>处理器负载</span>
        <hr>
      </div>
      <div class="dialog-box">
        <el-row :gutter="10">
          <el-col :span="12">
            <div class="cpu-info" v-for="(item,index) in barData1" :key="(item,index)">
              <span style="padding:10px;font-size:12px;">{{item.label}}</span>
              <span v-if="item.label=='连接状态'" class="bar">
                <el-switch v-if="item.value=='1'" class="port-switch" :v-model="true" active-color="#9A9A9A"
                  inactive-color="#04C86D" disabled></el-switch>
                <el-switch v-else class="port-switch" :v-model="false" active-color="#04C86D" inactive-color="#9A9A9A"
                  disabled></el-switch>
              </span>
              <span v-else class="bar bar_1">
                {{item.value}}
              </span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="cpu-info" v-for="(item,index) in barData2" :key="(item,index)">
              <span style="padding:10px;font-size:12px;">{{item.label}}</span>
              <span class="bar bar_1">{{item.value}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import IEcharts from '../../components/echart/charts'
  import charts from '../../../static/data/echartsData'
  import other from '../../../static/data/other'
  export default {
    name: 'win-xq',
    components: {
      IEcharts
    },
    data() {
      return {
        detailDialog: false,
        basicsData: [],
        portOpen: false,
        portData: [],
        serviceDialog: false,
        servicData: [],
        cpuLoad: false,
        barData1: [],
        barData2: [],
        flow: {},
        memory: {},
        memory1: {},
        gameNames: ['存储性能', '盘符趋势', '磁盘用量', ],
        activeName: '磁盘用量',
        tableData: [],
        store: '1',
        storageData: [],
        storageRatio: [],
        trend: '1',
        trendData: [],
        trendChart: {},
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
        if (this.$refs.chart4) {
          this.$refs.chart4.resize();
        }
      },
      getData() {
        this.flow = charts.flow;
        this.memory = charts.memory;
        this.memory1 = charts.memory1;
        this.trendChart = charts.trendChart;
        this.tableData = other.diskData;
        this.storageData = other.storageData;
        this.storageRatio = other.storageRatio;
        this.trendData = other.trendData;
        this.basicsData = other.basicsData;
        this.portData = other.portData;
        this.servicData = other.servicData;
        this.barData1 = other.barData1;
        this.barData2 = other.barData2;
      },
      selected(item) {
        this.activeName = item;
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
