<template>
  <div class="container-wrapper"
  :style="{backgroundImage:`url(${backgroundImage})`}"
  >
    <div class="container">
      <!--  头部标题-->
      <div class="header">
        <h1>{{ title }}</h1>
        <div class="sub-title">{{ subTitle }}</div>
      </div>
      <!--  主题内容-->
      <div class="content">
               <ul class="list">
          <li class="item"
              :class="{
              'last-item': index === titleList.length - 1
            }"
              :key="index"
              v-for="(item, index) in titleList">
<!--            <router-link v-bind:to="'list'">》》{{ item.title }}</router-link>-->
            <a @click="handleTarget(item)">》》{{ item.title }}</a>
          </li>
        </ul>
      </div>
      <!--  页脚-->
      <div class="footer">
        {{ footer }}
      </div>
    </div>
  </div>
</template>

<script src="./index.js">

</script>

<style scoped lang="less">
@import "index";
</style>
