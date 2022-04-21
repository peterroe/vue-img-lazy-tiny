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
<template>
  <div class="demo">
    <img
      v-for="it in 20"
      :key="it"
      v-lazy="'https://unsplash.it/1600/900?random=' + Math.random()"
      alt="img" />
  </div>
</template>
```

## Preview

The directive will provide a sheild element to cover the original image, and a loading spinner.

<https://peterroe.github.io/vue-img-lazy-tiny/>