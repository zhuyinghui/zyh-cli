/*
 * @Author: zhuyinghui
 * @Date: 2020-07-05 01:55:27
 * @Last Modified by: zhuyinghui
 * @Last Modified time: 2020-07-12 03:22:16
 */

<template>
<div class="menu-side">
    <Menu theme="light"
      :active-name="currentRoute"
      :open-names="currentSubmenu"
      @on-select="onSelect"
      @on-open-change="onOpenChange"
      ref="menuRef">
      <template v-for="(item, index) in menuList">
        <template v-if="!item.children">
          <menu-item :menuItemData="item" :key="index"></menu-item>
        </template>
        <template v-else>
          <menu-submenu :submenuData="item" :key="index"></menu-submenu>
        </template>
      </template>
    </Menu>
</div>
</template>
<script>
import menuItem from '../menu_head/menu_item'
import menuSubmenu from '../menu_head/menu_submenu'
export default {
  components: {
    menuItem,
    menuSubmenu
  },
  created () {
    // 更新菜单栏选中及菜单展开效果
    this.$nextTick(() => {
      this.$refs.menuRef.updateActiveName()
      this.$refs.menuRef.updateOpened()
    })
  },
  data () {
    return {
      currentRoute: this.$route.path, // 当前路由
      currentSubmenu: [sessionStorage.currentSubmenu], // 最近一次点击的submenu
      menuList: this.$store.state.menu.menuSide // 从store获取菜单栏数据
    }
  },
  methods: {
    // 点击菜单栏时触发
    onSelect (name) {
      if (name !== this.$route.path) {
        this.$router.push({
          path: name
        })
      }
    },
    // 展开submenu时触发
    onOpenChange (name) {
      sessionStorage.currentSubmenu = name
    }
  }
}
</script>
<style lang="scss">
  .ivu-menu-item:hover i,
  .ivu-menu-item-selected i,
  .ivu-menu-item-selected,
  .ivu-menu-submenu-title:hover i,
  .ivu-menu-submenu-title:hover{
    color: #2d8cf0;
  }
</style>
