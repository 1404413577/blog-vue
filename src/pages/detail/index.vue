<template>
  <div>
    <Herder/>
    <GuitorAd/>
    <div class="content-box">
      <Tips>
        <span slot="extra" style="color: #009A61">这是详情页</span>
      </Tips>
      <div class="article clear">
        <!--        左边icon-->
        <div class="left-icon-wrapper fl">
          <span class="like-num">12</span>
          <a-tooltip placement="right">
            <template slot="title">
              赞一个吧!
            </template>
            <a-button class="icon-item">
              <a-icon type="like" :style="{fontSize: '20px'}"/>
            </a-button>
          </a-tooltip>
          <a-icon class="icon-item" type="weibo" :style="{fontSize: '20px'}"/>
          <a-tooltip placement="right">
            <template slot="title">
              来评论吧
            </template>
            <a-icon class="icon-item"
                    type="message"
                    :style="{
                    fontSize: '20px',
                  }"/>
          </a-tooltip>
        </div>
        <!--        右边文章区域-->
        <div class="article-wrapper fr">
          <!--        文章标题区域-->
          <div class="article-title-wrapper clear">
            <div class="left fl">
              <h1 class="title">shell简单脚本</h1>

            </div>
            <div class="right fr">
              <div class="ad fr">
                <DetailAd/>
              </div>
            </div>
          </div>
          <!--        文章区域-->
          <div class="article-detail-wrapper" v-html="content">
          </div>
        </div>
      </div>
      <!--  评论-->

    </div>
    <!--  页脚-->
    <Footer/>
  </div>
</template>

<script src="./index.js"></script>

<style>
@import "~@/assets/markdown.less";
</style>
<style scoped lang="less">
@import "~@/assets/reset.less";
@import "./index";

body {
  background-color: #f0f2f5;
}

.content-box {
  margin-top: 64px;
  padding: 0px 180px;
}
</style>
