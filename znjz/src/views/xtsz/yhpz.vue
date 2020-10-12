<template>
  <div class="yhpz">
    <el-row>
      <el-col :span="12">
        <el-input v-model="key" class="search-input" placeholder="输入用户名或手机号码" suffix-icon="el-icon-search"
          @keyup.enter.native="getlist"></el-input>
      </el-col>
      <el-col :span="12">
        <el-button class="r-btn" icon="el-icon-plus" type="primary" @click="add">新增
        </el-button>
      </el-col>
    </el-row>
    <el-row class="m-top">
      <el-col>
        <el-table :data="tableData" max-height="700px" stripe 
          :header-cell-style="{background:'#25304C',color:'#FFF',opacity:'0.6'}">
          <el-table-column prop="username" label="用户名称" width="180" align="center"></el-table-column>
          <el-table-column prop="nickName" label="昵称" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="usertype" label="用户类型" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="tle" label="手机号码" align="center" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="状态" align="center" width="120">
            <template slot-scope="scope">
              <el-tag :type="scope.row.Status===1?'danger' : 'success'" close-transition
                v-text="scope.row.Status===1?'禁用' : '正常'"></el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="edit(scope.row,scope.$index)">编辑</el-button>
              <el-button size="mini" type="danger" @click="remove(scope.row,scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="page">
          <el-pagination :current-page="pageIndex" :page-sizes="[10,20,50,100]" :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
        </div>
      </el-col>
    </el-row>
    <!-- 新增/编辑用户 -->
    <el-dialog :title="title" :visible.sync="newDialog" width="30%" :modal-append-to-body='false'>
      <el-form ref="newForm" :model="newForm" label-width="80px" style="padding:0px 20px;">
        <el-form-item label="用户名称" prop="UserName">
          <el-input v-model="newForm.UserName" placeholder="请输入用户名称" :maxlength="20" :disabled="newForm.Id>0">
          </el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="UserPwd">
          <el-input type="password" v-model="newForm.UserPwd" placeholder="请输入用户密码" :maxlength="20"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" prop="NickName">
          <el-input v-model="newForm.NickName" placeholder="请输入用户昵称" :maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="用户类型">
          <el-radio-group v-model="newForm.RoleId">
            <el-radio label="2">普通管理员</el-radio>
            <el-radio label="3">用户</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机号码" prop="Mobile">
          <el-input v-model="newForm.Mobile" placeholder="请输入手机号码" :maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="newForm.UserState">
            <el-radio label="1">正常</el-radio>
            <el-radio label="0">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="newDialog = false">取 消</el-button>
        <el-button type="primary" @click="sumbit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import user from '../../../static/data/user'
  export default {
    name: 'yhpz',
    data() {
      return {
        newDialog: false,
        key: '',
        total: 0,
        pageIndex: 1,
        pageSize: 10,
        title: '',
        tableData: [],
        newForm: {
          Id: '0',
          UserName: '',
          UserPwd: '',
          NickName: '',
          RoleId: '3',
          Mobile: '',
          UserState: '1'
        },
      }
    },
    created() {
      this.getlist();
    },
    methods: {
      getlist() {
        this.tableData = [];
        if (this.key == '') {
          this.tableData = user.userData;
        } else {
          user.userData.forEach(row => {
            if (row.username == this.key || row.tle == this.key) {
              this.tableData.push(row)
            }
          });
        }
        this.total = this.tableData.length;
      },
      add() {
        this.newDialog = true;
        this.title = '新增用户';
        this.newForm = {
          Id: '0',
          UserName: '',
          UserPwd: '',
          NickName: '',
          RoleId: '3',
          Mobile: '',
          UserState: '1'
        };
        this.$nextTick(() => {
          this.$refs['newForm'].resetFields();
        })
      },
      edit(row, index) {
        this.newDialog = true;
        this.title = '编辑用户';
      },
      remove(row, index) {},
      sumbit() {
        this.newDialog = false;
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
