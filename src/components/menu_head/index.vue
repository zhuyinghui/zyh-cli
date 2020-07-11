/*
 * @Author: zhuyinghui
 * @Date: 2020-07-05 01:55:27
 * @Last Modified by: zhuyinghui
 * @Last Modified time: 2020-07-12 01:38:45
 */

<template>
<div class="menu-head">
    <div class="logo">
      zyh的后台管理系统
    </div>
    <Menu mode="horizontal" theme="light" :active-name="currentRoute" @on-select="onSelect">
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
import menuItem from './menu_item'
import menuSubmenu from './menu_submenu'
import menuList from './index'
export default {
  components: {
    menuItem,
    menuSubmenu
  },
  created () {
    menuList.then(data => {
      this.menuList = data
    })
  },
  data () {
    return {
      currentRoute: this.$route.path, // 当前路由
      menuList: []
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
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-head {
  display: flex;
  .logo {
    width: 240px;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
  }
}
</style>
