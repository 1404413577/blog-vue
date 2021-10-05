import {pageIndexConstantData} from "../../constants"

export default {
  data() {
    return {
      // es6新语法三个点 导出全部数据
      ...pageIndexConstantData,
      backgroundImage:"http://www.gaoimg.com/uploads/allimg/210305/1-21030513450R00.jpg"
    }
  },
  // 通常用来请求数据
  created() {

  },
  // 生命周期  mounted可以拿到页面中dom的元素
  mounted() {
    this.init()

  },
  //离开页面时清除某些定时器
  beforeDestroy() {
  },
  methods: {
    // init页面加载时执行这个init函数
    init() {
      const BG_INDEX = this.BG_INDEX
      const getRandom = this.getRandom
      const defaultIndexBg = 0
      setInterval(() => {
        let random = getRandom()
        if (random === defaultIndexBg) {
          random = getRandom()
        }
        this.backgroundImage = BG_INDEX[random].value
      }, 3000)
    },
    getRandom() {
      const BG_INDEX = this.BG_INDEX
      return Math.random() * BG_INDEX.length | 0
    },
    //绑定点击 路由跳转
    handleTarget(){
      this.$router.push('/list')
    }
  }

}
