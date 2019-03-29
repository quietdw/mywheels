import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Layout from './layout'
import Sider from './sider'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-content', Content)
Vue.component('g-layout', Layout)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)

Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: "hi"
  },
  created() {

  },
  methods: {
    xxx() {
      this.$toast('<strong>我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息</strong>', {
        closeButton: {
          text: "知道了",
          callback: () => {
            console.log("okokokokokok")
          }
        },
        enableHTML: true,
        align: 'middle',
        autoClose: 5
      })
    }
  }
})