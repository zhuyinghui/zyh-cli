/*
 * @Author: zhuyinghui
 * @Date: 2020-07-12 01:15:14
 * @Last Modified by:   zhuyinghui
 * @Last Modified time: 2020-07-12 01:15:14
 */
<template>
    <Submenu :name="submenuData.path">
        <template slot="title">
            <Icon :type="submenuData.icon" />
            {{submenuData.title}}
        </template>
        <template v-for="(item, index) in submenuData.children">
            <template v-if="!item.children">
                <menu-item :menuItemData="item" :key="index"></menu-item>
            </template>
            <template v-else>
                <menu-submenu :submenuData="item" :key="index"></menu-submenu>
            </template>
        </template>
    </Submenu>
</template>
<script>
import menuItem from './menu_item'
export default {
  name: 'menuSubmenu',
  components: {
    menuItem
  },
  props: ['submenuData']
}
</script>
