<template>
  <div class="demo">
    <img
      v-for="it in 20"
      :key="it"
      v-lazy="'https://unsplash.it/1600/900?random=' + Math.random()"
      alt="img" />
  </div>
</template>

<style>
.demo {
  text-align: center;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
img {
  width: 250px;
  margin: 2em;
  height: 200px;
}
</style>
