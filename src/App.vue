<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>
<style lang="less">
@import "~@/assets/reset.less";
@import "~@/assets/common.less";
.content-box{
  margin-top: 64px;
  padding: 0 160px;
}
</style>
