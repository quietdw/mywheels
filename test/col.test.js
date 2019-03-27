const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在.Col', () => {
    expect(Col).to.be.ok
  })
  describe('props', () => {
    it('span 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      const vm = new Constructor({
        propsData: {
          span: '12'
        }
      }).$mount(div)
      const element = vm.$el
      expect(element.classList.contains('col-12')).to.eq(true)
      div.remove()
      vm.$destroy()
    })
    it('offset 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      const vm = new Constructor({
        propsData: {
          offset: '12'
        }
      }).$mount(div)
      const element = vm.$el
      expect(element.classList.contains('offset-12')).to.eq(true)
      div.remove()
      vm.$destroy()
    })
    it('ipad 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      const vm = new Constructor({
        propsData: {
          ipad: {
            span: 1,
            offset: 2
          }
        }
      }).$mount(div)
      const element = vm.$el
      expect(element.classList.contains('col-ipad-1')).to.eq(true)
      expect(element.classList.contains('offset-ipad-2')).to.eq(true)
      div.remove()
      vm.$destroy()
    })
    it('narrowPc 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      const vm = new Constructor({
        propsData: {
          narrowPc: {
            span: 1,
            offset: 2
          }
        }
      }).$mount(div)
      const element = vm.$el
      expect(element.classList.contains('col-narrow-pc-1')).to.eq(true)
      expect(element.classList.contains('offset-narrow-pc-2')).to.eq(true)
      div.remove()
      vm.$destroy()
    })
    it('pc 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      const vm = new Constructor({
        propsData: {
          pc: {
            span: 1,
            offset: 2
          }
        }
      }).$mount(div)
      const element = vm.$el
      expect(element.classList.contains('col-pc-1')).to.eq(true)
      expect(element.classList.contains('offset-pc-2')).to.eq(true)
      div.remove()
      vm.$destroy()
    })
    it('widePc 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      const vm = new Constructor({
        propsData: {
          widePc: {
            span: 1,
            offset: 2
          }
        }
      }).$mount(div)
      const element = vm.$el
      expect(element.classList.contains('col-wide-pc-1')).to.eq(true)
      expect(element.classList.contains('offset-wide-pc-2')).to.eq(true)
      div.remove()
      vm.$destroy()
    })
  })

})