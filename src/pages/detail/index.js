import Herder from "@/components/Header/index.vue"
import Footer from "@/components/Footer/index.vue"
import Tips from "@/components/Tips/index.vue"
import GuitorAd from "@/components/GuitorAd/index.vue"
import DetailAd from "@/components/DetailAd/index.vue"
import Api from '@/api'
import marked from 'marked'
import hljs from 'highlight.js'
import {markdownConfig} from '@/plugin/markdown'

const {options, config} = markdownConfig
hljs.configure(config)
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value,
  ...options
})
export default {
  name: "index",
  Property:{

  },
  data() {
    return {
      content: ''
    }
  },
  components: {
    Herder,
    Footer,
    Tips,
    GuitorAd,
    DetailAd
  },
  created() {
    this.getDetailData()
  },

  methods: {
    // 获取博客文章
    getDetailData() {
      this.$http({
        url: Api.apiBlogDetail,
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        const data = res[0] || {}
        if (data.content) {
          this.content = marked(decodeURIComponent(data.content))
        }
      }).catch(err => {
      })
    },
  }

}

