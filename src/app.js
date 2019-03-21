import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
  }
})

// 单元测试  button有几个props属性就车市几个 外加一个点击事件
import chai from 'chai'
const expect = chai.expect;

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  const use = vm.$el.querySelector('use')
  expect(use.getAttribute('xlink:href')).to.eq('#i-settings')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true,
    }
  })
  vm.$mount()
  const use = vm.$el.querySelector('use')
  expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: false,
      iconPosition: "right"
    }
  })
  vm.$mount(div)
  const svg = vm.$el.querySelector('svg')
  let {
    order
  } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()

}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  vm.$on('click', function () {
    console.log(1)
  })

  vm.$el.click()
  vm.$el.remove()
  vm.$destroy()
}