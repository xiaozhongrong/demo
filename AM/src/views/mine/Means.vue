<template>
  <el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <Card title="入库申请" btn-name="申请记录">

        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="入库验收" btn-name="验收记录">

        </Card>
      </el-col>
    </el-row>
    <el-col :span="24">
      <div class="step">
        <el-carousel :interval="4000" type="card" height="250px" :autoplay=false>
          <el-carousel-item v-for="(item,index) in contents" :key="index">
              <el-row class="el-row-step">
                <el-col :span="6">
                  <img :src= item.src alt="">
                </el-col>
                <el-col :span="15">
                  <h2>{{item.title}}</h2>
                  <el-steps :active="3" align-center v-if="item.id == 1">
                    <el-step v-for="(ele,index) in steps1" :key="index" :title = ele.title :description= ele.description :icon= ele.icon></el-step>
                  </el-steps>
                  <el-steps :active="3" align-center v-if="item.id == 2">
                    <el-step v-for="(ele,index) in steps2" :key="index" :title = ele.title :description= ele.description :icon= ele.icon></el-step>
                  </el-steps>
                  <el-steps :active="4" align-center v-if="item.id == 3">
                    <el-step v-for="(ele,index) in steps3" :key="index" :title = ele.title :description= ele.description :icon= ele.icon></el-step>
                  </el-steps>
                </el-col>
              </el-row>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-tag effect="plain" :closable=true type="warning">在这里可为已有的和新的资产生成条形码。生成的条形码使用的是Code 128符号集的条形码。</el-tag>
        </div>
      </el-col>
    <el-col :span="24">
      <Card :title="printing.title" :btn-name="printing.btnName" :click="open">
        <el-tabs slot="content" type="border-card">
          <el-tab-pane label="手动">
            <p>在这里手动输入要打印的条形码</p>
            <SmallForm :form-config="handeFormConfig" :value="handeForm" :inline="true"></SmallForm>
            <el-button type="text" icon="el-icon-info">打印条形码的设置</el-button>
          </el-tab-pane>
          <el-tab-pane label="按次序">
            <p>仅在生成序列时有效</p>
            <el-form label-position="right" :model="orderForm" label-width="30%">
              <el-form-item prop="prifix" label="前缀">
                <el-input v-model="orderForm.prifix" placeholder="前缀"></el-input>
              </el-form-item>

              <el-form-item label="起始">    
                <el-col :span="11">
                  <el-input v-model="orderForm.start" placeholder="起始" :rules="{requried:true,message:'起始',trigger:['change']}"></el-input>
                </el-col>
                <el-col :span="2">-</el-col>
                <el-col :span="11">
                  <el-input v-model="orderForm.number" placeholder="数量"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item prop="suffix" label="后缀">
                <el-input v-model="orderForm.suffix" placeholder="后缀"></el-input>
              </el-form-item>
              <el-form-item prop="nature" label="选择标签属性" :rules="{required:true,message:'请选择标签属性',trigger:'change'}">
                <el-select style="width:100%" v-model="orderForm.nature">
                  <el-option label="属性一" value="1"></el-option>
                  <el-option label="属性二" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">打印</el-button>
                <el-tooltip effect="dark" content="只打印第一行" placement="top">
                  <el-button>打印测试</el-button>
                </el-tooltip>
              </el-form-item>
            </el-form>
            <el-button type="text" icon="el-icon-info">打印条形码的设置</el-button>
          </el-tab-pane>
          <el-tab-pane label="未打印的条形码">
            <p>这里列出稍后打印的条形码...</p>
            <SmallForm :form-config="incompleteFormConfig" :value="incompleteForm"></SmallForm>
            <SmallTable
            :table-data="tableData"
            :columns="columns"
            :showheader="showheader"></SmallTable>
          </el-tab-pane>
        </el-tabs>
      </Card>
    </el-col>
  </el-row>
</template>

<script>

import Card from '../../components/card'
import mine from '../../../static/data/mine'
import SmallForm from '../../components/smallForm'
import SmallTable from '../../components/smallTable'

export default {
  components: {
    SmallForm,
    SmallTable,
    Card,},

  data() {
    return {
      printing:{
        title:"打印条形码",
        btnName:"打印历史"
      },
			contents:[
				{id:"1",src:require("../../assets/step1.png"),title:"使用供应商的条形码来添加资产"},
				{id:"2",src:require("../../assets/step2.png"),title:"通过生成自有的条形码来添加资产"},
				{id:"3",src:require("../../assets/step3.png"),title:"为已有的资产生成条形码"},
			],
			steps1:[
				{title:'步骤1',description:"取得新的资产"},
				{title:'步骤2',description:"扫描供应商指定的条形码"},
				{title:'步骤3',description:"使用扫描的条形码添加资产"},
			],
			steps2:[
				{title:'步骤1',description:"取得新的资产"},
				{title:'步骤2',description:"生成条形码"},
				{title:'步骤3',description:"添加新的资产"},
				{title:'步骤4',description:"打印条形码并黏贴到资产上"},
			],
			steps3:[
				{title:'步骤1',description:"生成条形码"},
				{title:'步骤2',description:"使用条形码更新资产"},
				{title:'步骤3',description:"打印条形码"},
				{title:'步骤4',description:"下载资产相关文档"},
				{title:'步骤5',description:"参照文档,将条形码黏贴到资产上"},
			],
      /* 打印条形码--表单 */
      handeFormConfig:{
        formItemList:[
          {
            type:"input",
            prop:"barcode",
            label:"条形码",
            placeholder:"输入条形码,以逗号分隔",
          },
          {
            type:"select",
            prop:"nature",
            label:"标签属性",
            optList:[
              {value:"1",label:"属性一"},
              {value:"2",label:"属性二"},
            ]
          }
        ],
        /* 按钮 */
        operate: [
          {
            icon: "",
            type: "primary",
            name: '打印',
            handleClick: this.search
          },
          {
            icon:"",
            type:"",
            name:"打印测试",
            handleClick:""
          }
        ]
      },
      incompleteFormConfig:{
        formItemList:[
          {
            type:"input",
            prop:"search",
            label:"搜索",
            placeholder:"搜索",
            icon:"el-icon-search"
          },
          {
            type:"select",
            prop:"address",
            label:"站点",
            optList:[
              {label:"北京", value:"1"},
              {label:"上海", value:"2"},
              {label:"深圳", value:"3"},
              {label:"广州", value:"4"},
            ]
          },
        ],
        /* 按钮 */
        operate: [
          {
            icon: "el-icon-search",
            type: "primary",
            name: '',
          },
        ]
      },
      handeForm:{},
      incompleteForm:{},
      orderForm:{
        prifix:"",//前缀
        suffix:"",//后缀
        number:"",
        start:"",
        nature:""
      },


      /* 打印条形码--表格 */
      tableData:[],
      columns:[],
      showheader:true
    };
  },
  methods: {
    tips() {
      const h = this.$createElement;
      this.$notify({
        title: "提示",
        message: h("h3", {}, "为新的和已有的资产生成条形码"),
        type: "warning",  
        position: "top-right"
      });
    },

    open() {
      this.$message.error('出错了！！！');
    },
    getData(){
      this.tableData = mine.incompleteTable.tableData
      this.columns = mine.incompleteTable.columns
    },
    search(){
      console.log(this.handeForm);
    }
  },
  mounted() {
    this.tips();
    this.getData()
  }
};
</script>

<style scoped>
.el-tag{
  font-size: 16px;
}
.el-carousel__item h3 {
  color: #eff2f7;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #eff2f7;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #eff2f7;
}
.step{
  background-color: #fff;
  margin: 1.3rem 0;
  padding-top: 1rem;
  border-radius: 5px;
}
.el-row-step{
  margin-top: 2.5rem;
}
.el-row h2 {
  margin-bottom: 1rem;
}
.el-tabs p{
  text-align: left;
}

.el-form{
  margin: 1rem 0;
  width: 55%;
}
</style>
