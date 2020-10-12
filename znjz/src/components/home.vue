<template>
  <div class="home">
    <el-container>
        <el-header>
            <v-head></v-head>
        </el-header>
        <el-main>
          <v-menu></v-menu>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import vHead from './header'
import vMenu from './menu'
export default {
  name: 'home',
  components:{
      vHead,
      vMenu,
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
