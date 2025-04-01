import { createApp } from 'vue' // Для Vue 3
import App from './App.vue'

let app = null

export const mount = (container) => {
  app = createApp(App)
  app.mount(container)
}

export const unmount = () => {
  app.unmount()
  app = null
}