const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.Row', () => {
    expect(Row).to.be.ok
  })
  describe('props', () => {
    it('接收gutter属性', (done) => {
      Vue.component('g-row', Row)
      Vue.component('g-col', Col)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <g-row gutter="20">
      <g-col> </g-col>
      </g-row>
    `
      const vm = new Vue({
        el: div
      })
      setTimeout(() => {
        const row = vm.$el.querySelector('.row')
        expect(getComputedStyle(row).marginLeft).to.equal('-10px')
        expect(getComputedStyle(row).marginRight).to.equal('-10px')
        const col = vm.$el.querySelector('.col')
        expect(getComputedStyle(col).paddingLeft).to.equal('10px')
        expect(getComputedStyle(col).paddingRight).to.equal('10px')
        done()
        vm.$el.remove()
        vm.$destroy()
      })
    })
    it('align属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Row)
      const vm = new Constructor({
        propsData: {
          align: 'center'
        }
      }).$mount(div)
      const element = vm.$el
      expect(getComputedStyle(element).justifyContent).to.eq('center')
      div.remove()
      vm.$destroy()
    })
  })

})