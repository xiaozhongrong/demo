<template>
  <el-row>
    <el-col class="el-col-mine">
      <div class="handleBtn">
        <!-- 顶部操作按钮 -->
        <el-col :span="23">
          <div>
            <el-button type="text" @click="handleBack" icon="el-icon-arrow-left"
              >返回上一页</el-button
            >
          </div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <el-button
              type="text"
              @click="handleBreak"
              icon="el-icon-refresh-right"
              >刷新页面</el-button
            >
          </div>
        </el-col>
      </div>
    </el-col>
    <el-col class="el-col-mine">
      <Card title="所有资源">
        <div slot="content">
          <!-- 这里是表格 -->
          <SmallForm :form-config="formConfig" :value="form"></SmallForm>
          <MsgTable
          :list="tableData.list.slice((page.currentPage - 1) * page.pageSize,page.currentPage * page.pageSize)"
          @handleSelectionChange="handleSelectionChange"
          :options="tableData.options"
          :columns="tableData.columns"
          :operates="tableData.operates"
          @details-child="getDetails"></MsgTable>
          <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="page.currentPage"
          :page-sizes="[5, 10, 15]"
          :page-size="page.pageSize"
          layout="total,sizes, prev, pager, next"
          :total="page.total">
        </el-pagination>
        </div>
      </Card>
    </el-col>
    <el-col class="el-col-mine">
      <Card title="扫描失败的工作站">
        <div slot="content">
          <h6>Windows机器使用wmi进行扫描，因此如果某机器的dcmo被禁用、或者有防火墙运行，
            就有可能扫描失败。使用下述的脚本可以帮助您解决问题，这些脚本可以在远程工作站上执行，
            也可以将它配置成AD的登录或者启动脚本。</h6>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="script">
                <img src="" alt="">
                <h4>执行该脚本将在远程工作站中配置所需的DCOM设置和Windows防火墙的设置，
                  这样就可以通过Windows域扫描对这些工作站进行扫描。</h4>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="script">
                <img src="" alt="">
                <h4>执行该脚本将扫描远程的工作站，并将清单数据上推到AssetExplorer服务器(如果AE服务器可达)
                  ，或者产生一个xml文件(如果AE服务器不可达)，该文件可被导入到AssetExplorer</h4>
              </div>
            </el-col>
          </el-row>
                    <!-- 这里是表格 -->
          <SmallForm :form-config="formConfig" :value="form"></SmallForm>
          <MsgTable
          :list="tableData.list.slice((page.currentPage - 1) * page.pageSize,page.currentPage * page.pageSize)"
          @handleSelectionChange="handleSelectionChange"
          :options="tableData.options"
          :columns="tableData.columns"
          :operates="tableData.operates"
          @details-child="getDetails"></MsgTable>
          <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="page.currentPage"
          :page-sizes="[5, 10, 15]"
          :page-size="page.pageSize"
          layout="total,sizes, prev, pager, next"
          :total="page.total">
        </el-pagination>
        </div>
      </Card>
    </el-col>
  </el-row>
</template>

<script>
import MsgTable from '../../components/msgTable'
import SmallForm from '../../components/smallForm'
import Card from '../../components/card'
import mine from '../../../static/data/mine'
export default {
  components: {
    MsgTable,
    SmallForm, Card },
  inject: ["reload"],
  data() {
    return {
      formConfig:{
        formItemList:[
          {
            type:"select",
            prop:"sort",
            label:"显示:",
            optList:[
              {label:"全部", value:"1"},
              {label:"在库的资产", value:"2"},
              {label:"在修的资产", value:"3"},
              {label:"在用的资产", value:"4"},
              {label:"处置的资产", value:"5"},
              {label:"计算的资产", value:"6"},
            ]
          },
          {
            type:"select",
            prop:"minute",
            label:"",
            optList:[
              {label:"工作站", value:"1"},
              {label:"打印机", value:"2"},
              {label:"路由器", value:"3"},
              {label:"服务器", value:"4"},
              {label:"扫描机", value:"5"},
              {label:"投影仪", value:"6"},
            ]
          },
          {
            type:"input",
            prop:"search",
            label:"检索:"
          }
        ],
        operate:[
          {
            icon:"el-icon-search",
            type:"primary",
            name:"搜索",
            handleClick:""
          },
          {
            icon:"el-icon-plus",
            type:"success",
            name:"新建",
            handleClick:""
          },
          {
            icon:"el-icon-edit",
            type:"warning",
            name:"操作",
            handleClick:""
          },
          {
            icon:"el-icon-delete",
            type:"danger",
            name:"删除",
            handleDel:""
          }
        ]
      },
      form:{},

      /* 表格数据 */
      tableData:{
        list:[],
        options:{
          stripe: true,
          loading: false,
          highlighCurrentRow:true,
          mutiSelect: true
        },
        columns:[],
        operates:{
          width: 180,
          fixed: "right",
          list: [
            {
              id: "2",
              label: "详情",
              type: "primary",
              icon: "",
              show: true,
              plain: false,
              disabled: false,
              method: (index, row) => {
                this.handleMix(index, row);
              }
            }
          ]
        }
      },
      /* 分页 */
      page:{
        currentPage:1,
        pageSize:5,
        total:0
      }
    
    };
  },
  methods: {
    /* 获取数据 */
    getData(){
      this.tableData.list = mine.tableData.datas
      this.tableData.columns = mine.tableData.columns
      this.page.total = this.tableData.list.length
    },
    //返回上一级
    handleBack() {
      this.$router.push("/homepage");
    },
    //当前页面刷新
    handleBreak() {
      this.reload();
    },
          /* 选中行 */
    handleSelectionChange(val) {
      console.log("val:", val);
      this.checkList = val;
    },
      /* 编辑 */
    handleEdit(index, row) {
      console.log(" index:", index);
      console.log(" row:", row);
    },
      /* 删除 */
    handleDel(index, row) {
      console.log(" index:", index);
      console.log(" row:", row);
    },
    handleMix(index, row){

    },
    getDetails(){

    },
    /* 分页 */
    handleSizeChange(pageSize){
      this.page.pageSize = pageSize
    },
    handleCurrentChange(currentPage){
      this.page.currentPage = currentPage
    },
  },
  mounted(){
    this.getData()
  }
};
</script>

<style scoped>
.handleBtn{
  text-align: left;
}
.el-form{
  width: 70%;
}
.el-col-mine {
  margin-bottom: 20px;
}
.script{
  width:100%;
  margin:10px;
  background-color:#F5F7FA;
  height:100px;
  line-height: 2rem;
}
.script img{
  float: left;
  width: 20%;
  height: 100%;
}
</style>
