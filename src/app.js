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
import Tabs from './tabs/tabs'
import TabsPane from './tabs/tabs-pane'
import TabsItem from './tabs/tabs-item'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'


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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)


Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: "hi",
    selectedTab: ['2']
  },
  created() {

  },
  methods: {
    xxx() {
      this.$toast('<strong>我是信息我是信息我我是信息</strong>', {
        closeButton: {
          text: "知道了"
        },
        enableHTML: true,
        align: 'middle',
        autoClose: 5
      })
    },
    yyy() {
      console.log('yyy')
    }
  }

})