<template>
  <div>
    <!-- 仪表板 -->
    <el-row class="el-row-mine">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <h2>仪表板</h2>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="el-row-mine">
      <!-- 我的所有资产 -->
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <Card :title="Data.allAsset.title" :btn-name="Data.allAsset.btnName">
                <el-tabs
                slot="content"
                v-model="activeName"
                @tab-click="handleTabClick"
                type="card"
              >
                <el-tab-pane label="我的所有资产" name="first">
                  <el-table
                    :data="assetTable"
                    max-height="250"
                    border
                    stripe
                    :header-cell-style="{
                      background: '#A3E2FF',
                      color: '#0093D9',
                      opacity: '0.7'
                    }"
                  >
                    <el-table-column
                      v-for="column in assetColumns.columns"
                      :key="column.label"
                      :label="column.label">
                        <el-table-column
                          v-for="item in column.column"
                          :key="item.prop"
                          :label="item.label"
                          :prop="item.prop">
                        </el-table-column>
                    </el-table-column>
                  </el-table>
                  <!-- 分隔线 -->
                  <el-divider></el-divider>
                  <div>
                    <span>最后扫描:23/08/2020 10:23 AM</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>
                      扫描失败:4个工作站
                      <a href="#">[故障诊断]</a>
                    </span>
                  </div>
                  <!-- 我的所有资产--图表 -->
                </el-tab-pane>
                <el-tab-pane label="地区状态分类" name="second">
                  <div class="asset" ref="assetarea"></div>
                </el-tab-pane>
              </el-tabs>
          </Card>
        </div>
      </el-col>
      <!-- 工作站 -->
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <Card :click="handleMix" :title="Data.station.title" :btn-name="Data.station.btnName" :icon="Data.station.icon">
            <div slot="content" class="asset" ref="station"></div>
          </Card>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="el-row-mine">
      <!-- 软件 -->
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          <Card :title="Data.software.title">
            <div slot="content" class="asset" ref="software"></div>
          </Card>
        </div>
      </el-col>
      <!-- 订单合同 -->
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <Card :click="cutData" :title="Data.order.title" :btn-name="Data.order.btnName" :icon="Data.order.icon">
            <div slot="content" class="asset" ref="order"></div>
          </Card>
        </div>
      </el-col>
    </el-row>

    <!-- 扫描一览/资产状态 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <Card title="扫描/状态">
            <el-row slot="content">
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <SmallTable
                    @handleClick="handleClick"
                    :table-data="tableDatas.tableData1"
                    :columns="tableDatas.columns1"
                    :showheader="false"
                  ></SmallTable>
                </div>
              </el-col>
              <el-col :span="1">
                <div class="grid-content bg-purple">
                  <el-divider direction="vertical" class="el-divider--vertical-mine"></el-divider>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="grid-content bg-purple">
                  <SmallTable
                    @handleClick="handleClick"
                    :table-data="tableDatas.tableData2"
                    :columns="tableDatas.columns2"
                    :showheader="false"
                  ></SmallTable>
                </div>
              </el-col>
              <el-col :span="1">
                <div class="grid-content bg-purple">
                  <el-divider direction="vertical" class="el-divider--vertical-mine"></el-divider>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="grid-content bg-purple">
                  <SmallTable
                    @handleClick="handleClick"
                    :table-data="tableDatas.tableData3"
                    :columns="tableDatas.columns3"
                    :showheader="false"
                  ></SmallTable>
                </div>
              </el-col>
              <el-col :span="24" class="el-divider--margin">
                <span>配置代理:</span>
                <el-button type="text">已配置代理</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="text">未配置代理</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="primary" @click="open">下载代理</el-button>
              </el-col>
            </el-row>
          </Card>
        </div>
      </el-col>
    </el-row>

    <!-- 百分比弹窗-详情 -->
    <el-dialog title="工作站状态分类" :visible.sync="dialogVisible" width="40%" @open="openMix()">
      <div class="asset" ref="mix"></div>
    </el-dialog>
    <!-- 资产状态弹窗 -->
    <el-dialog :title="this.dialog.title" :visible.sync="dialogVisibleState" width="75%">
      <div v-if="this.dialog.id == 1">
        <SmallTable
        :table-data="stateTable.tableData.slice((page.currentPage - 1) * page.pageSize,page.currentPage * page.pageSize)"
        :columns="stateTable.columns"
        :showheader="true"></SmallTable>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="page.currentPage"
          :page-sizes="[5, 10, 15]"
          :page-size="page.pageSize"
          layout="sizes, prev, pager, next"
          :total="page.total">
        </el-pagination>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MsgTable from '../components/msgTable'
import SmallTable from '../components/smallTable'
import Card from '../components/card';
import homepage from "../../static/data/homepage";
export default {
  components: {
    MsgTable,
    SmallTable, Card },
  data() {
    return {
      activeName: "second",
      
      /* 所有资产表格数据 */
      assetTable: [],
      assetColumns:{columns:[]},

      /* 资产状态表格数据 */
      stateTable:{
        tableData:[],
        columns:[],
      },
      
      dialogVisible:false,//卡片详情
      dialogVisibleState:false,//表格详情
      dialog: {},
      /* 卡片的头信息 */
      Data:{
        allAsset:{
          title:"我的所有资产",
          btnName:"",
        },
        station:{
          title:"工作站",
          btnName:"状态分类",
          icon:"el-icon-pie-chart"
        },     
        software:{
          title:"软件",
          btnName:"查看详情"
        },
        order:{
          title:"订单合同",
          btnName:"查看逾期",
          icon:"el-icon-time"
        },
      },
      /* 扫描与资产状态 */
      tableDatas:{
        tableData1: [],
        tableData3: [],
        tableData2: [],
        columns1: [],
        columns2: [],
        columns3: [],
      },
    
      page:{
        currentPage:1,
        pageSize:5,
        total:""
      }
    };
  },
  methods: {
    /* 选项卡切换 */
    handleTabClick(tab, event) {},
    /* 占比弹窗 */
    handleMix(){
      this.dialogVisible = true
    },
    /* 占比弹窗图表 */
    openMix(val){
      const that = this
      setTimeout(() => {
        let mix = that.$echarts.init(that.$refs.mix)
        var optionMix = {
          title: {
              text: '站点服务器状态',
              subtext: '数据来源统计',
              left: 'center'
          },
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['使用中', '已停用', '保修中', '已存储']
          },
          series: [
              {
                  name: '数量',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: [
                      {value: 8, name: '使用中'},
                      {value: 3, name: '已停用'},
                      {value: 2, name: '保修中'},
                      {value: 1, name: '已存储'},
                  ],
                  emphasis: {
                      itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
        }
        mix.setOption(optionMix)
      }, 0);
    },
    getData() {
      /* 获取所有资产数据 */
      this.assetTable = homepage.assetTable.tableData;
      this.assetColumns.columns = homepage.assetTable.column

      /* 获取扫描状态数据 */
      this.tableDatas.columns1 = homepage.scanTable1.columns;
      this.tableDatas.columns2 = homepage.scanTable2.columns;
      this.tableDatas.columns3 = homepage.stateTable3.columns;
      this.tableDatas.tableData1 = homepage.scanTable1.tableData;
      this.tableDatas.tableData2 = homepage.scanTable2.tableData;
      this.tableDatas.tableData3 = homepage.stateTable3.tableData;
    },
    getEcharts() {
      let assetarea = this.$echarts.init(this.$refs.assetarea);
      let station = this.$echarts.init(this.$refs.station);
      let software = this.$echarts.init(this.$refs.software)
      let order = this.$echarts.init(this.$refs.order)
      /* 地区资产分类与状态数据 */
      var assetareaData = {
        areaData:["北京","上海","广州","深圳","香港","厦门"],
        numberData:[5, 12, 6, 10, 10, 2],
        stateData:[
          {value:2, name: "修理中"},
          {value:3, name: "待处理"},
          {value:30,name: "使用中"},
          {value:10,name: "已存储"},
        ]
      }
      /* 工作站数据 */
      var stationData = {
        numberData:[10, 52, 90],
        sortData:['Windows10 企业版', 'Windows7 旗舰版', '其他']
      }
      /* 合同数据 */
      var orderData = {
        month:['6月订单', '7月订单', '8月订单', '9月订单'],
        numberData:[20, 32, 40, 24]
      }
      var optionAssetarea = {
        title: {
        text: '地区资产分类与状态',
        subtext: "点击查看详情",
        left: "center"
        },
        tooltip: {},
        legend: {
            data:['IT资产'],
            left:"left"
        },
        grid: [
            {x: '7%', y: '10%', width: '35%', height: '50%'},
        ],
        xAxis: [
          { 
              gridIndex:0,
              data: assetareaData.areaData
          }
        ],
        yAxis: [
            {
                gridIndex:0
            }    
        ],
        series: [
            {
                name: 'IT资产',
                type: 'bar',
                data: assetareaData.numberData
            },
            {
                type: 'pie',
                data: assetareaData.stateData,
                radius:['30%','50%'],
                center:['75%','40%'],
                emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            }
        ],
        toolbox: {
          feature: {
            saveAsImage: {
              pixelRatio: 2
            }
          }
        }
      };
      var optionStation = {
        title: {
            text: '操作系统分类',
            subtext: '数据来自统计'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['计数']
        },
        grid: {
            left: '4%',
            right: '4%',
            bottom: '18%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: stationData.sortData
        },
        series: [
            {
                name: '计数',
                type: 'bar',
                data: stationData.numberData
            },

        ],
        toolbox: {
          feature: {
            saveAsImage: {
              pixelRatio: 2
            }
          }
        }
      };
      var optionSoftware = {
        legend: {},
        tooltip: {},
        grid: [
            {x: '7%', y: '15%', width: '85%', height: '65%'},
        ],
        dataset: {
            source: [
                ['product', '供应商', '不合规'],
                ['微软公司', 14, 7],
                ['管理引擎', 8, 5],
                ['吴哥科技', 8, 4],
                ['迅捷软件', 7, 4],
                ['卡友支付', 5, 2],
                ['英特尔', 3, 1],
                ['比系统', 3, 0]
         
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {},
        series: [
            {type: 'bar'},
            {type: 'bar'},
        ],
        toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
      }
      var optionOrder = {
        xAxis: {
        type: 'category',
        data: orderData.month
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: orderData.numberData,
              type: 'line'
          }]
      }
      assetarea.setOption(optionAssetarea);
      station.setOption(optionStation);
      software.setOption(optionSoftware)
      order.setOption(optionOrder)
      window.addEventListener("resize", function() {
        assetarea.resize();
        station.resize();
        software.resize();
        order.resize()
      });
    },
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 1000);
    },
    open() {
      this.$message.error('出错了！！！');
    },
    
    /* 点击显示资产状态详情 */
    handleClick(argument) {
      this.dialog = argument;
      this.stateTable.tableData = argument.tabledata
      this.stateTable.columns = argument.column
      this.page.total = this.stateTable.tableData.length
      this.dialogVisibleState = true;
    },



    handleSizeChange(pageSize){
      this.page.pageSize = pageSize
    },
    handleCurrentChange(currentPage){
      this.page.currentPage = currentPage
    },
    /* 切换数据 */
    cutData(){
      
    }
  },
  mounted() {
    this.getData();
    this.getEcharts();
  },
  beforeMount(){
    //关闭加载事件
    // this.openFullScreen()
  }
};
</script>

<style scoped>
/* 布局样式 */
.el-row-mine {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}

/* 卡片样式 */
.text {
  font-size: 1rem;
}
.item {
  margin-bottom: 0.8rem;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 100%;
  font-weight: 700;
  height: 400px;
}
/* 标签页样式 */
.el-tab-pane {
  width: 100%;
}
.asset {
  width: 100%;
  height: 20em;
}
.el-divider--margin{
  margin:11px 0;
}
.station-btn{
  float: right;
  padding: 3px 0;
}
.el-divider--vertical-mine {
  display: inline-block;
  width: 1px;
  height: 15em;
  margin: 0;
  vertical-align: middle;
  position: relative;
}
</style>
