<template>
  <div class="about">
    about页面
    <quill v-model="content"></quill>
  </div>
</template>

<script>
import quill from '@/components/quill'
export default {
  components: {
    quill
  }
}
</script>

<style>

</style>
