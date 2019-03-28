import Toast from './toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, buttonOptions) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: buttonOptions
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}