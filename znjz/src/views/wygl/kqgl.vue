<template>
  <div class="kqgl">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="kqsj">
          <!-- 考勤时间 -->
          <span><i class="el-icon-s-ticket"></i>考勤时间</span><span @click="handleEdit"><i class="el-icon-edit"></i></span>
          <p>上班:{{work.employment}}<span>/下班:{{work.inferior}}</span></p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="mrkq">
          <!-- 每日考勤 -->
          <span><i class="el-icon-time"></i>每日考勤</span><span @click="handleMsg"><i class="el-icon-more"></i></span>
          <div>
            <ul>
              <li>总数：人</li>
              <li>迟到：人</li>
              <li>请假：人</li>
              <li>早退：人</li>
              <li>旷工：人</li>
              <li>打卡：人</li>
              <div class="clear"></div>
            </ul>
          </div>
          <div class="schedule">
            <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="kqtjb">
          <!-- 考勤统计表 -->
          <span>考勤统计表</span>
          <span>
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </span>
          <div class="census" ref="census"></div>
          <div class="mix">
            <ul>
              <li>
                <p class="top"><i class="el-icon-top"></i>+4%</p>
                <span><h3>95.5%</h3>出勤率</span>
              </li>
              <li>
                <p class="top"><i class="el-icon-top"></i>+3.5%</p>
                <span><h3>4</h3>迟到人数</span>
              </li>
                <li>
                <p class="bottom"><i class="el-icon-bottom"></i>+1.5%</p>               
                <span><h3>2</h3>早退人数</span>
              </li>
                <li>
                <p class="bottom"><i class="el-icon-bottom"></i>+4.7%</p>               
                <span><h3>4</h3>请假人数</span>
              </li>
              <li>
                <p class="top"><i class="el-icon-top"></i>+7.5%</p>              
                <span><h3>1</h3>旷工人数</span>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="kqbg">
          <el-row :gutter="5">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <el-input v-model="key" placeholder="输入关键字" suffix-icon="el-icon-search"></el-input>
              </div>
            </el-col>
            <el-col :span="14"><div class="grid-content bg-purple"><el-button type="primary">查询</el-button></div></el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                  :current-page="pageIndex" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper" :total="total" background="">
                </el-pagination>
              </div>
            </el-col>
          </el-row>
          <el-table :data="tableData.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" max-height="750px" stripe :border = true :header-cell-style="{background:'#A3E2FF',color:'#0093D8',opacity:'0.7'}">
            <el-table-column prop="username" label="用户名" align="center" :show-overflow-tooltip="true" width="170"></el-table-column>
            <el-table-column prop="business" label="业务部门" align="center" :show-overflow-tooltip="true" width="170"></el-table-column>
            <el-table-column prop="clockInTime" label="最近打卡时间" align="center" :show-overflow-tooltip="true" width="500"></el-table-column>
            <el-table-column prop="attendance" label="考勤记录" align="center" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <el-tag effect="dark" type="success" v-text="'正常:'+ scope.row.attendance.normal"></el-tag>
                <el-tag effect="dark" type="warning" v-text="'迟到:'+ scope.row.attendance.late"></el-tag>
                <el-tag effect="dark" type="danger" v-text="'早退:' + scope.row.attendance.leaveEarly"></el-tag>
                <el-tag effect="dark" type="info" v-text="'矿工:' + scope.row.attendance.neglect"></el-tag>
                <el-tag effect="dark" type="" v-text="'请假:' + scope.row.attendance.leave"></el-tag>
              </template>
            </el-table-column>
          </el-table>
        </div>
        </el-col>
    </el-row>
    <el-dialog
    title="编辑考勤时间"
    :visible.sync="editFormVisible"
    :modal-append-to-body="false"
    center
    >
    <el-form inline>
      <el-form-item label="编辑时间">
        <el-time-select
          placeholder="起始时间"
          v-model="startTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }">
        </el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime
          }">
        </el-time-select>
      </el-form-item>
      <el-form-item>
          <el-button type="danger" @click="cancel()">取消</el-button>
          <el-button
            type="success"
            @click="sumbitAddRow()"
            :loading="addLoading"
          >确定</el-button>
      </el-form-item>
    </el-form>
    </el-dialog>
    <el-dialog
    title="考勤详细"
    :visible.sync="msgFormVisible"
    :modal-append-to-body="false"
    center>
      <el-table>
        <el-table-column prop="" label="迟到名单"></el-table-column>
        <el-table-column prop="" label="旷工名单"></el-table-column>
        <el-table-column prop="" label="早退名单"></el-table-column>
        <el-table-column prop="" label="请假名单"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import kqgl from '../../../static/data/wygl'
export default {
  name: "kqgl",
  data() {
    return {
      work:{
        employment:'8:30',
        inferior:'18:00'
      },
      options:[
        {value:'1',label:'每周'},
        {value:'2',label:'每月'},
        {value:'3',label:'每季'},
      ],
      value:'2',
      editFormVisible:false,//是否显示编辑窗口
      msgFormVisible:false,
      addLoading:false,
      
      startTime:'',
      endTime:'',

      key:'',
      pageIndex: 1,
      pageSize: 10,
      total: 0,

      tableData:[],


    };
  },
  computed:{
      /* 编辑上下班时间 --确定 */
      sumbitAddRow(){
        this.editFormVisible = false
        this.work.employment = this.startTime
        this.work.inferior = this.endTime
      },
  },
  methods:{
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(pageIndex) {
        this.pageIndex = pageIndex;
      },
      getData(){
        this.tableData = kqgl.kqbgData
        this.total = this.tableData.length
      },
      /* 编辑上下班时间 */
      handleEdit(){
        this.editFormVisible = true
      },
      /* 编辑上下班时间 --取消 */
      cancel(){
        this.editFormVisible = false
      },
      /* 查看考情详细信息 */
      handleMsg(){
        this.msgFormVisible = true
      },

      /* 考勤统计表柱状图 */
      getEcharts(){
        let census = this.$echarts.init(this.$refs.census)
        var optionCensus = {
            color: ['#3398DB'],
            tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              top:'5%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    show:false,
                    data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12', '10-13', '10-14', '10-15', '10-16', '10-17', '10-18'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    show:false,
                    type: 'value',
                }
            ],
            series: [
                {   
                    name:'出勤率',
                    type: 'bar',
                    barWidth: '20%',
                    data: [95.1, 99, 100, 100, 96, 93.5, 90, 89, 87.5, 88, 91, 99.5, 92, 99, 97.5, 90.1, 96, 99.5]
                }
            ]
        }
        census.setOption(optionCensus)
        window.addEventListener("resize",function(){
          census.resize()
        })
      }

  },
  mounted(){
    this.getData()
    this.getEcharts()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
