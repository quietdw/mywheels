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
  // describe('事件', () => {
  //   const Constructor = Vue.extend(Input)
  //   let vm
  //   afterEach(function () {
  //     vm.$destroy()
  //   })
  //   it('支持 change/input/focus/blur 事件', () => {
  //     ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
  //       vm = new Constructor({}).$mount()
  //       const callback = sinon.fake();
  //       vm.$on(eventName, callback)
  //       //触发input的change 事件
  //       let event = new Event(eventName);
  //       Object.defineProperty(
  //         event, 'target', {
  //           value: {
  //             value: 'hi'
  //           },
  //           enumerable: true
  //         }
  //       )
  //       let inputElement = vm.$el.querySelector('input')
  //       inputElement.dispatchEvent(event)
  //       expect(callback).to.have.been.calledWith('hi') // 回调的第一个参数是event
  //     })
  //   })
  // })

})