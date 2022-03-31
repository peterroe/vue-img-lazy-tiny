## vue-img-lazy-tiny

A Tiny img lazy load `vue directive`

<a href="http://img.badgesize.io/https://unpkg.com/vue-img-lazy-tiny?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/vue-img-lazy-tiny?compression=gzip&label=gzip%20size:%20JS">
</a>

## Usage

Install it with `npm` or other package manager

```shell
$ npm install vue-img-lazy-tiny
```

Register vue directive

```ts
import vilt from 'vue-img-lazy-tiny'

createApp(App)
  .use(vilt)     // install vilt
  .mount('#app')
```

Use it in your template, your image will be lazy loaded.

```html
<script setup lang="ts">
  const url = 'https://avatars.githubusercontent.com/u/59404696?v=4'
</script>

<div>
  <img v-lazy="url"/>  
</div>
```

## Preview

The directive will provide a sheild element to cover the original image, and a loading spinner.

<https://peterroe.github.io/vue-img-lazy-tiny/>