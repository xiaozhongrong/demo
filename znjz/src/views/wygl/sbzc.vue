<template>
  <div class="sbzc">
    <div>
      <el-select v-model="type">
        <el-option v-for="item in options" :key="item.label" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-input v-model="key" placeholder="输入关键字" class="search-input"></el-input>
    </div>
    <el-table :data="tableData.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" max-height="700px" stripe class="m-top"
      :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
      <el-table-column prop="assetName" label="资产名称" align="center" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="assetType" label="资产类型" align="center" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="buyTime" label="购买时间" align="center" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="dueDate" label="到期时间" align="center" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="newMtbm" label="最近一次维修时间" align="center" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="state" label="状态" align="center" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.state === 0 ? 'danger' : 'success'"
            close-transition
            v-text="scope.row.state === 0 ? '异常' : '正常'"
          ></el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="newDialog=true">详细</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="page" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="pageIndex" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>

    <el-dialog :visible.sync="newDialog" width="65%" :modal-append-to-body='false'>
      <div slot="title" class="active">
        <h3 style="text-align:center;color:#606266">资产详情</h3>
        
      </div>
      <div>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td class="title" rowspan="3">基础信息</td>
                <td>显示名称</td>
                <td></td>
                <td>类型</td>
                <td>windows服务器</td>
            </tr>
            <tr>
                <td>制造商</td>
                <td>To be filled by O.E.M</td>
                <td>型号</td>
                <td>To be filled by O.E.M</td>
            </tr>
            <tr>
                <td>SN</td>
                <td>To be filled by O.E.M</td>
                <td>备注</td>
                <td></td>
            </tr>
            <tr>
                <td class="title">主板</td>
                <td>制造商</td>
                <td>Colorful Technology And Development..</td>
                <td>型号</td>
                <td>C.B75PTPRO</td>
            </tr>
            <tr>
                <td class="title" rowspan="4">配置信息</td>
                <td>IP</td>
                <td>12.168.2.66</td>
                <td>操作系统</td>
                <td></td>
            </tr>
            <tr>
                <td>CPU名称及主频</td>
                <td>Intel(R) Core(TM) i3-2012 CPU @3.30GNz</td>
                <td>CPU数量</td>
                <td>1</td>
            </tr>
            <tr>
                <td>内存容量</td>
                <td>8GB</td>
                <td>磁盘容量</td>
                <td>465.66GB</td>
            </tr>
            <tr>
                <td>网卡类型</td>
                <td>WAN Minipor(IKEv2)</td>
                <td>网卡MAC地址</td>
                <td>00:E0:70:79:F7:9B,00:50:56:C0:00:01,00:50:56:C0:00</td>
            </tr>
            <tr>
                <td class="title" rowspan="5">维护信息</td>
                <td>购买时间</td>
                <td>2020-05-13</td>
                <td>责任人</td>
                <td></td>
            </tr>
            <tr>
                <td>维保开始时间</td>
                <td>2020-05-13</td>
                <td>联系电话</td>
                <td></td>
            </tr>
            <tr>
                <td>维保结束时间</td>
                <td>2021-05-13</td>
                <td>邮件地址</td>
                <td></td>
            </tr>
            <tr>
                <td>最后维保时间</td>
                <td></td>
                <td>厂商联系人</td>
                <td></td>
            </tr>
            <tr>
                <td>固定资产编号</td>
                <td></td>
                <td>备注信息</td>
                <td></td>
            </tr>
        </table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import sbzc from '../../../static/data/wygl';
  export default {
    name: 'sbzc',
    data() {
      return {
        newDialog: false,
        pageIndex: 1,
        pageSize: 10,
        total: 0,
        tableData: [],
        options: [{
            label: '所有类型',
            value: 0
          },
          {
            label: '服务器',
            value: 1
          },
          {
            label: '交换机',
            value: 2
          },
          {
            label: '数据库',
            value: 3
          },
        ],
        type: 0,
        key: '',
      }
    },
    methods: {
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(pageIndex) {
        this.pageIndex = pageIndex;
      },
      getData(){
        this.tableData = sbzc.sbzcData
        this.total = this.tableData.length
      }
    },
    created(){
      this.getData()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    width: 96%;
    border: solid 1px #999;
    margin: auto;
}
table tr td{
    line-height: 45px;
    padding: 0px 5px;
    border: solid 1px #999;
}
table tr .title{
    color: #64B0F7;
    text-align: center;
    font-size: 18px;
}
</style>
