import type { App } from 'vue'

export function install(app: App) {
  app.directive('lazy', {
    mounted(el, binding) {
      const img = new Image()
      img.src = binding.value
      el.src = 'https://hnust-ticknet-swzl.oss-cn-hangzhou.aliyuncs.com/secondClass/2022/03/31/02c9ddd3-aac8-44e7-82d1-13bfead2d07a.gif'
      img.onload = () => {
        el.src = binding.value
      }
    },
  })
}
