const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsPane from '../src/tabs/tabs-pane'
import TabsItem from '../src/tabs/tabs-item'
import TabsHead from '../src/tabs/tabs-head'
import TabsBody from '../src/tabs/tabs-body'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.ok
  })
  describe('props', () => {
    it('selected', () => {
      Vue.component('g-tabs', Tabs)
      Vue.component('g-tabs-pane', TabsPane)
      Vue.component('g-tabs-item', TabsItem)
      Vue.component('g-tabs-head', TabsHead)
      Vue.component('g-tabs-body', TabsBody)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <g-tabs selected="finace">
      <g-tabs-head>
        <template slot="actions">
          <button>
            设置
          </button>
        </template>
        <g-tabs-item name="woman" :disabled="true">
          女性
        </g-tabs-item>
        <g-tabs-item name="finace"></g-tabs-item>
        <g-tabs-item name="sports"></g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="woman"></g-tabs-pane>
        <g-tabs-pane name="finace" id="xxx">财经</g-tabs-pane>
        <g-tabs-pane name="sports"></g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    `
      const vm = new Vue({
        el: div
      })
      setTimeout(() => {
        var xxx = vm.$el.querySelector('#xxx')
        expect(xxx.classList.contains('active')).to.equal(true)
      })
    })
    it('direction', () => {})
  })
})