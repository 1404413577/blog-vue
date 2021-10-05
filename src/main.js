import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from "vue-router";
import store from './store'
import http from './request'
import Lib from "@/lib/w-input/index.vue"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import './plugin'

Vue.use(Antd);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.component('Lib', Lib)
new Vue({
  VueRouter,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
