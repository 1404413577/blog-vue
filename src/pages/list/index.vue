<template>
  <div class="container">
    <Loading v-show="loading"/>
    <GuitorAd/>
    <!--  头部header-->
    <Header/>
    <!--  主题内容-->
    <div class="content-box">
      <!--    tips-->
      <Tips/>
      <!--    github-->
      <!--    文章列表区域 todo 浮动自适应-->
      <div class="article">
        <!--      列表展示-->
        <div class="article-list">
          <!--        文章搜索框-->
          <Lib :styleInput="{
                width: '60%'
              }"
               @input="handleSearch">
          </Lib>
          <el-button type="primary" class="button">主要按钮</el-button>
          <div class="search-box">
            <span class="title"></span>
            <span class="input"></span>
            <span class="submit"></span>
          </div>
          <div class="article-box">
            <!--        提示-->
            <Htips/>
            <!--        文章-->
            <div class="article-list-item clear">
              <ul class="list">
                <li class="item"
                    v-for="(item, index) in blogList"
                    :key="item.title">
                  <div class="item-left">
                    <div class="title-box">
                      <span class="title"
                            @click="handleDetail(item)"
                      >{{ item.title }}</span>
                      <template v-if="item.type">
                        <span class="tag"
                              v-for="type in item.type.split(',')"
                              :key="type"
                        >{{ type }}</span>
                      </template>
                    </div>
                    <div class="extra-info">
                  <span class="time">
<!--                    2019-05-29 10:25 星期三-->
                    {{ untilTime(item.createTime) }}
                  </span>
                      <span class="icon-info">
                    <img class="icon" src="~@/static/images/smile.png">
                    {{ item.like }}
                  </span>
                      <span class="icon-info">
                    <img class="icon" src="~@/static/images/smile.png">
                    {{ item.visitor }}
                  </span>
                    </div>
                  </div>
                  <div class="item-right">
                    <img class="article-type-icon" src="http://images.static.liuweibo.cn/image/icon/others.jpg">
                  </div>
                </li>
              </ul>
            </div>
            <!--        分页-->
            <div class="article-list-pages">
              <div class="tips">我说有底线的……</div>
              <div class="pagination">
                <span class="previous">previous</span>
                <ul class="list">
                  <li class="item"
                      v-for="(item, index) in  blogListTotal"
                      :class="{
                        active: num === index + 1
                      }"
                      :key="index"
                      @click="handlePagination(index)"
                  >{{ index + 1 }}
                  </li>
                </ul>
                <span class="next">next</span>
              </div>
            </div>
          </div>
        </div>
        <!--      额外的信息-->
        <div class="article-extra">
        </div>
      </div>
    </div>
    <!--  页脚-->
    <Footer/>
  </div>
</template>

<script src="./index.js">

</script>

<style scoped lang="less">
@import "./index";

</style>
