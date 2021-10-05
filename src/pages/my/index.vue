<template>
  <div>
    <div class="container">
      <Header/>
      <GuitorAd/>
      <div class="content_me"></div>
      <el-descriptions title="用户信息">
        <el-descriptions-item label="用户名">lion</el-descriptions-item>
        <el-descriptions-item label="手机号">17754434165</el-descriptions-item>
        <el-descriptions-item label="居住地">黄石市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">湖北省黄石市阳新县 1188 号</el-descriptions-item>
      </el-descriptions>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue"
import GuitorAd from "@/components/GuitorAd/index.vue"


export default {
  name: "index",
  components: {
    Header,
    Footer,
    GuitorAd,
  }
}
</script>

<style scoped>
@import "../../assets/reset.less";

.container {
  width: 100%;
  height: auto;

}

.content_me{
  margin: 100px 0 0 0;
  width: 500px;

}
</style>
