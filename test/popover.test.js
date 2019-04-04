const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  describe('props', () => {
    it('position', (done) => {
      Vue.component('g-popover', Popover)
      const div = document.createElement('div') //不好构造slot
      document.body.appendChild(div)
      div.innerHTML = `
      <g-popover position="left" ref="a">
        <template slot="content" slot-scope="{close}">
          <div>内容1内容1内容1内容1
          <button @clcik="close">关闭</button>
          </div>
        </template>
        <button>点我</button>
      </g-popover>
      `
      const vm = new Vue({
        el: div
      })
      setTimeout(() => {
        vm.$el.querySelector('button').click()
        setTimeout(() => {
          const {
            contentWapper
          } = vm.$refs.a.$refs
          expect(contentWapper.classList.contains('position-left')).to.be.true
          done()
        }, 500)
      }, 0)

    })
    xit('可以设置trigger', () => {
      Vue.component('g-popover', Popover)
      const div = document.createElement('div') //不好构造slot
      document.body.appendChild(div)
      div.innerHTML = `
      <g-popover trigger="hover" ref="a">
        <template slot="content" slot-scope="{close}">
          <div>内容1内容1内容1内容1
          <button @clcik="close">关闭</button>
          </div>
        </template>
        <button>点我</button>
      </g-popover>
      `
      const vm = new Vue({
        el: div
      })
      let event = new Event('mouseenter')
      vm.$el.dispatchEvent(event)
    })
  })

})