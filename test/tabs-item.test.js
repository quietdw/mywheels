const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs/tabs-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.be.ok
  })
  describe('props', () => {
    const Constructor = Vue.extend(TabsItem)
    let vm
    afterEach(function () {
      vm.$destroy()
    })
    it('name', () => {
      vm = new Constructor({
        propsData: {
          name: 'xxx',
        }
      }).$mount()

      expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })
    it('disabled', () => {
      const callback = sinon.fake()
      vm = new Constructor({
        propsData: {
          disabled: true,
          name: 'xxx',
        }
      }).$mount()
      expect(vm.$el.classList.contains('disabled')).to.be.true
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).to.have.not.been.called
    })
  })
})