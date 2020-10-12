<template>
  <div class="v-main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-main{
  background: #F2F6FC;
  border-radius: 5px;
  padding: 10px;
}
</style>
