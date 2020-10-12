<template>
  <el-row>
    <el-col class="el-col-mine">
      <Card title="租约登记" btn-name="刷新">
        <div slot="content">
          <SmallForm
            :form-config="FormConfig.formConfig1"
            :value="form1"
          ></SmallForm>
          <MsgTable
          :list="tableDataCheck.list"
          @handleSelectionChange="handleSelectionChange"
          :options="tableDataCheck.options"
          :columns="tableDataCheck.columns"
          :operates="tableDataCheck.operates"
          @details-child="getDetails"></MsgTable>

        </div>
      </Card>
    </el-col>
    <el-col class="el-col-mine">
			<Card title="已租赁" btn-name="逾期">
				<div slot="content">
					<SmallForm :form-config="FormConfig.formConfig3" :value="form3"></SmallForm>
					<MsgTable
          :list="tableDataRent.list"
          @handleSelectionChange="handleSelectionChange"
          :options="tableDataRent.options"
          :columns="tableDataRent.columns"
          :operates="tableDataRent.operates"
          @details-child="getDetails"></MsgTable>
				</div>
			</Card>
    </el-col>
    <el-col class="el-col-mine">
      <Card title="可租赁">
				<div slot="content">
					<SmallForm :form-config="FormConfig.formConfig2" :value="form2"></SmallForm>
				</div>
			</Card>
    </el-col>
  </el-row>
</template>

<script>
import MsgTable from '../../components/msgTable'
import SmallForm from "../../components/smallForm";
import Card from "../../components/card";
import mange from "../../../static/data/mange";
export default {
  components: {
    MsgTable,
    SmallForm,
    Card
  },
  data() {
    return {
      FormConfig: {
        formConfig1: {
          formItemList: [
            {
              type: "select",
              prop: "sort",
							label: "显示:",
							placeholder:"租赁中",
              optList: [
                { label: "已关闭", value: "1" },
                { label: "已租赁", value: "2" },
                { label: "租赁中", value: "3" }
              ]
            },
            {
              type: "select",
              prop: "minute",
							placeholder:"--所有地点--",
              label: "",
              optList: [
                { label: "广州", value: "1" },
                { label: "北京", value: "2" },
                { label: "上海", value: "3" },
                { label: "不在任何地点", value: "4" }
              ]
            }
          ],
          operate: [
						{
              icon: "el-icon-document-delete",
              type: "info",
              name: "退回租赁资产",
              handleClick: ""
            },
            {
              icon: "el-icon-plus",
              type: "success",
              name: "新建租约",
              handleClick: ""
            }
          ]
				},
				formConfig2:{
					formItemList:[
            {
              type: "select",
              prop: "type",
							placeholder:"--所有产品--",
              label: "过滤",
              optList: [
                { label: "交换机", value: "1" },
                { label: "服务器", value: "2" },
								{ label: "工作站", value: "3" },                
								{ label: "路由器", value: "4" },
                { label: "打印机", value: "5" },
								{ label: "扫描仪", value: "6" },                
								{ label: "投影仪", value: "7" },
                { label: "储存设备", value: "8" },
                { label: "平板电脑", value: "9" },
              ]
						},
						{
              type: "select",
              prop: "pro",
							placeholder:"--所有产品类型--",
              label: "",
              optList: [
                { label: "一类", value: "1" },
                { label: "二类", value: "2" },
                { label: "三类", value: "3" },
              ]
						},
						{
              type: "select",
              prop: "minute",
							placeholder:"--所有地点--",
              label: "",
              optList: [
                { label: "广州", value: "1" },
                { label: "北京", value: "2" },
                { label: "上海", value: "3" },
                { label: "不在任何地点", value: "4" }
              ]
            }
					],
					 operate: [
            {
              icon: "el-icon-refresh-right",
              type: "danger",
              name: "重置",
              handleClick: ""
						},
						{
              icon: "el-icon-delete",
              type: "info",
              name: "移除可租赁资产",
              handleClick: ""
						},
						{
              icon: "el-icon-paperclip",
              type: "success",
              name: "标记可租赁资产",
              handleClick: ""
            }
          ] 
				},
				formConfig3:{
					formItemList:[
						{
              type: "select",
              prop: "beOverdue",
							placeholder:"全部",
              label: "显示:",
              optList: [
                { label: "租约本周将到期", value: "1" },
                { label: "租约本月将逾期", value: "2" },
              ]
            },
            {
              type: "select",
              prop: "type",
							placeholder:"--所有产品--",
              label: "",
              optList: [
                { label: "交换机", value: "1" },
                { label: "服务器", value: "2" },
								{ label: "工作站", value: "3" },                
								{ label: "路由器", value: "4" },
                { label: "打印机", value: "5" },
								{ label: "扫描仪", value: "6" },                
								{ label: "投影仪", value: "7" },
                { label: "储存设备", value: "8" },
                { label: "平板电脑", value: "9" },
              ]
						},
						{
              type: "select",
              prop: "pro",
							placeholder:"--所有产品类型--",
              label: "",
              optList: [
                { label: "一类", value: "1" },
                { label: "二类", value: "2" },
                { label: "三类", value: "3" },
              ]
						},
						{
              type: "select",
              prop: "minute",
							label: "",
							placeholder:"--所有地点--",
              optList: [
                { label: "广州", value: "1" },
                { label: "北京", value: "2" },
                { label: "上海", value: "3" },
                { label: "不在任何地点", value: "4" }
              ]
            }
					],
					 operate: [
            {
              icon: "el-icon-refresh-right",
              type: "danger",
              name: "重置",
              handleClick: ""
            },
          ] 
				},
				
      },
      form1: {},
      form2: {},
			form3: {},
			      /* 表格数据 */
      tableDataCheck:{
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
			tableDataRent:{
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

    };
	},
	methods:{
		getData(){
			this.tableDataCheck.list = mange.data.tableDataCheck
			this.tableDataCheck.columns = mange.columns.columnCheck
			this.tableDataRent.list = mange.data.tableDataRent
			this.tableDataRent.columns = mange.columns.columnRent
		}
	},
	mounted(){
		this.getData()
	}
};
</script>

<style scoped>
.el-col-mine {
  margin-bottom: 20px;
}
</style>
