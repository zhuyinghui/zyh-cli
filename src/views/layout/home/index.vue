<template>
  <div class="home">
    home页面
    <div v-for="n in 100" :key="n">
      {{n}}
    </div>
  </div>
</template>
