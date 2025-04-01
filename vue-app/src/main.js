import Vue from 'vue'
import App from './App.vue'

let app = null

export const mount = (container) => {
  app = new Vue({
    render: h => h(App)
  }).$mount(container)
}

export const unmount = () => {
  app.$destroy()
}