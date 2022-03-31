<script setup lang="ts">
const flush = () => {
  document.location.reload(true)
}
</script>

<template>
  <div class="demo">
    <img
      v-for="it in 20"
      :key="it"
      v-lazy="'https://i.pinimg.com/474x/2e/b9/c1/2eb9c1a03b3b995e001915af141283b6.jpg?random=' + Math.random()"
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
