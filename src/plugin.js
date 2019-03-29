import Toast from './toast'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, buttonOptions, enableHTML) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        enableHTML,
        message,
        propsData: buttonOptions,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}

// helpers
function createToast({
  Vue,
  message,
  propsData,
  onClose
}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}