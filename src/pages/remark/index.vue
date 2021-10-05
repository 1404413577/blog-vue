<template>
  <div>
    <Header/>
    <GuitorAd/>
    <div class="container">
          <common/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue"
import GuitorAd from "@/components/GuitorAd/index.vue"
import Common from "@/components/Comments/index.vue"

export default {
  name: "index",
  components: {
    Header,
    Footer,
    GuitorAd,
    Common,
  }
}
</script>

<style scoped>
.container{
  margin: 60px auto 0px;
}

</style>
