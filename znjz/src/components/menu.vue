<template>
  <el-container class="menu-box">
    <el-aside style="width:auto" class="asideMenu">
      <el-menu :default-active="$route.path" router class="el-menu-demo" @select="handleSelect"
        active-text-color="#ffd04b" :collapse="isCollapse" unique-opened>
        <div style="width:auto;min-width:200px;"></div>
        <el-submenu :index="item.menuCode" v-for="(item,index) in menuData" :key="(item,index)">
          <template slot="title">
            <i :class="item.menuIcon"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item :index="child.menuUrl" v-for="(child,index) in item.children" :key="(child,index)">
            <i :class="child.menuIcon"></i>
            <span>{{child.name}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <div class="top-nav" @click="coll()">
        <i class="el-icon-s-fold fold"></i>
      </div>
      <el-main style="padding:0px 10px;overflow: auto;height:94%;">
        <el-tabs v-model="activeIndex" @tab-click="handleClick" closable @tab-remove="tabRemove">
          <el-tab-pane label="首页" name="11">
            <v-homepage></v-homepage>
          </el-tab-pane>
          <el-tab-pane v-for="item in options" :key="item.route" :label="item.name" :name="item.route">
            <v-index v-if="activeIndex==item.route"></v-index>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import menuData from '../../static/data/menu'
  import vHomepage from '../views/homePage'
  import vIndex from './index'
  export default {
    name: 'menu-box',
    components: {
      vHomepage,
      vIndex
    },
    data() {
      return {
        menuData: [],
        tab: {},
        isCollapse: false,
        activeIndex: '11',
        options: [],
      }
    },
    created() {
      this.menuData = menuData;
    },
    // mounted() {
    //   window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
    // },
    // destroyed() {
    //   window.removeEventListener('beforeunload', e => this.beforeunloadHandler(e))
    // },
    methods: {
      // beforeunloadHandler(e) {
      //   e = e || window.event
      //   if (e) {
      //     e.returnValue = '关闭提示'
      //   }
      //   return '关闭提示'
      // },
      handleSelect(key, keyPath) {
        let path = '',
          flag = false,
          name = '';
        this.menuData.forEach(row => {
          if (row.menuCode == keyPath[0]) {
            row.children.forEach(e => {
              if (e.menuUrl == key) {
                path = key;
                name = e.name;
              }
            });
          }
        });
        if (this.options.length == 0) {
          this.options.push({
            route: path,
            name: name
          })
        } else {
          for (let option of this.options) {
            if (option.route === key) {
              flag = true
              break;
            }
          }
          if (!flag) {
            this.options.push({
              route: path,
              name: name
            })
          }
        }
        this.activeIndex = key;
      },
      handleClick(tab, event) {
        if (this.$route.path != tab.name) {
          if (tab.name != '11') {
            this.$router.push(tab.name);
          }
        }
      },
      tabRemove(targetName) {
        let index = 0;
        for (let option of this.options) {
          if (option.route == targetName) {
            break;
          }
          index++;
        }
        this.options.splice(index, 1);
        if (targetName != this.$route.path) {
          this.activeIndex = this.$route.path;
        } else {
          if (this.options.length <= 0 || index == 0) {
            this.activeIndex = '11';
          } else {
            this.activeIndex = this.options[index - 1].route;
            this.$router.push(this.activeIndex);
          }
        }
      },
      coll() {
        this.isCollapse = !this.isCollapse;
      },
    },
    watch: {
      $route: {
        handler(val, oldval) {
          let flag = false;
          if (val.name == 'win-服务器详情'||val.name=='linux-服务器详情'||val.name=='交换机详情') {
            let hostId= val.path.split('/')[3];
            for (let option of this.options) {
              if (option.route === val.path) {
                flag = true
                break;
              }
            }
            if (!flag&&val.name == 'win-服务器详情') {
              this.options.push({
                route: val.path,
                name: 'Win-'+hostId+'详情'
              });
            }
            if (!flag&&val.name == 'linux-服务器详情') {
              this.options.push({
                route: val.path,
                name: 'Linux-'+hostId+'详情'
              });
            }
            if (!flag&&val.name == '交换机详情') {
              this.options.push({
                route: val.path,
                name: '交换机'+hostId+'详情'
              });
            }
          }
          this.activeIndex = val.path;
        },
        deep: true
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flod {
    float: left;
    cursor: pointer;
    font-size: 24px;
    color: #666;
    z-index: 1;
  }

</style>
