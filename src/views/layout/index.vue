<template>
  <div class="layout">
    <div class="layout-header">
      <menu-head></menu-head>
    </div>
    <div class="layout-box">
      <div class="layout-sider">
        <div class="layout-sider-box">
          <menu-side></menu-side>
        </div>
      </div>
      <div class="layout-content">
        <div class="layout-bread">
          <bread-crumb></bread-crumb>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import menuHead from '@/components/menu_head'
import menuSide from '@/components/menu_side'
import breadCrumb from '@/components/bread_crumb'
export default {
  name: 'layout',
  components: {
    menuHead,
    menuSide,
    breadCrumb
  }
}
</script>
<style lang="scss" scoped>
$siderWidth: 240px; // 侧边栏宽度
$headHeight: 60px; // 头部高度
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  .layout-header {
    z-index: 999;
    height: $headHeight;
    border-bottom: 1px solid #dcdee2;
    box-sizing: border-box;
  }
  .layout-box {
    flex: 1;
    overflow-y: auto;
    display: flex;
    .layout-sider {
      width: $siderWidth;
      overflow: hidden;
      border-right: 1px solid #dcdee2;
      .layout-sider-box {
        overflow-x: hidden;
        width: $siderWidth + 20px;
        height: 100%;
      }
    }
    .layout-content {
      flex: 1;
      overflow: auto;
      padding: 10px;
      .layout-bread {
        padding-bottom: 15px;
      }
    }
  }
 }

</style>
