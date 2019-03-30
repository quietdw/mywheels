const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在Toast', () => {
    expect(Toast).to.be.ok
  })

  describe('props', () => {
    const Constructor = Vue.extend(Toast)
    let vm
    afterEach(function () {
      vm.$destroy()
    })
    it('autoClose', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(div.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('closeButton', (done) => {
      const callback = sinon.fake()
      vm = new Constructor({
        propsData: {
          closeButton: {
            text: "关闭123",
            callback
          }
        }
      }).$mount()
      let colseButton = vm.$el.querySelector('.close')
      expect(colseButton.textContent.trim()).to.eq('关闭123')
      setTimeout(() => {
        colseButton.click()
        expect(callback).to.have.been.called
        done()
      }, 0)
    })
    it('enableHTML', (done) => {
      vm = new Constructor({
        propsData: {
          enableHTML: true
        }
      })

      vm.$slots.default = ['<strong id ="hihi">111</strong>']
      vm.$mount()
      let messageStrong = vm.$el.querySelector('#hihi')
      setTimeout(() => {
        expect(messageStrong.textContent.trim()).to.eq('111')
        done()
      }, 0)

    })
    it('align', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          align: 'middle'
        }
      }).$mount()
      setTimeout(() => {
        expect(vm.$el.classList.contains('align-middle')).to.eq(true)
        done()
      }, 0)

    })

  })

})