<template>
  <el-table
    :show-header="showheader"
    :data="tableData"
    mix-height="240"
    :row-style="{height:'55px'}"
    :cell-style="columnStyle"
    @row-click="handleClick" 
    style="font-size:16px"
    :header-cell-style="{
      background: '#A3E2FF',
      color: '#0093D9',
      opacity: '0.7'
    }"
  >
    <template>
      <el-table-column
        :show-overflow-tooltip="true"
        v-for="item in columns"
        :key="item.label"
        :prop="item.prop"
        :label="item.label"
        :sortable="item.sortable"
        :render-header="item.renderHeader"
        :min-width="item.width"
      >
      </el-table-column>
    </template>

  </el-table>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props: {
    
    tableData: Array,  
    columns: Array,
    showheader:Boolean,

  },
  methods: {
      handleClick(row,column,event){
          this.$emit('handleClick',row,column,event)
      },
      /* 更改列的样式 */
      columnStyle({ row, column, rowIndex, columnIndex }){
          if (columnIndex == 1) {
              return 'color:#409EFF'
          }
      }
  },
};
</script>

<style scoped>

</style>