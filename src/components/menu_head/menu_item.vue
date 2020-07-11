/*
 * @Author: zhuyinghui
 * @Date: 2020-07-12 01:15:11
 * @Last Modified by:   zhuyinghui
 * @Last Modified time: 2020-07-12 01:15:11
 */
<template>
    <MenuItem :name="menuItemData.path">
        <Icon :type="menuItemData.icon" />
        {{menuItemData.title}}
    </MenuItem>
</template>
<script>
export default {
  props: ['menuItemData']
}
</script>
