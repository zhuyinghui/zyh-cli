<template>
  <div>test3
    <Button v-if="$button('add')">新增</Button>
    <Button v-if="$button('edit')">修改</Button>
    <Button v-if="$button('del')">删除</Button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
