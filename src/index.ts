import type { App } from 'vue'

export function install(app: App) {
  app.directive('lazy', {
    mounted(el, binding) {
      el.src = 'https://img-blog.csdnimg.cn/4dc2155d272343ff9b9cc71e0044d9f0.gif'
      el.onload = () => {
        el.src = binding.value
      }
    },
  })
}
