<template>
  <div class="layout">
      <headComponent></headComponent>
      <router-view/>
  </div>
</template>

<script>
import headComponent from '@/components/headComponent/index'
export default {
  name: 'App',
  components: {
    headComponent
  }
}
</script>
