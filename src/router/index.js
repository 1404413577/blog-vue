import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from "@/pages/index/index.vue"
import ListPage from "@/pages/list/index.vue"
import Page404 from "@/pages/404/index.vue"
import MePage from "@/pages/my/index.vue"
import DetailPage from "@/pages/detail/index.vue"
import RemarkPage from "@/pages/remark/index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: IndexPage,
    mata: {
      title: '首页',
    }
  },
  {
    path: '/list',
    component: ListPage
  },
  {
    path: '*',
    component: Page404
  },
  {
    path: '/my',
    component: MePage
  },
  {
    path: '/detail/:id',
    component: DetailPage,
  },
    {
    path: '/remark',
    component: RemarkPage,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
      next({
        path: '/',
      })
      return
    }
    next()
  }
)


export default router
