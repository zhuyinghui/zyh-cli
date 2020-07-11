/*
 * @Author: zhuyinghui
 * @Date: 2020-07-11 23:05:38
 * @Last Modified by: zhuyinghui
 * @Last Modified time: 2020-07-12 00:54:11
 */
<template>
  <div class="bread_crumb">
        <Breadcrumb>
            <BreadcrumbItem>
                <span class="bread-hover"  @click="toPage('/')">首页</span>
            </BreadcrumbItem>
            <BreadcrumbItem v-for="(item, index) in breadData" :key="index">
                <span v-if="index !== (breadData.length - 1)" class="bread-hover" @click="toPage(item.path)">{{item.title}}</span>
                <span v-else>{{item.title}}</span>
            </BreadcrumbItem>
        </Breadcrumb>
  </div>
</template>

<script>
import { getBread } from './index'
export default {
  mounted () {
    this.breadData = getBread(this.$route.path)
  },
  watch: {
    $route: function (val) {
      this.breadData = getBread(val.path)
    }
  },
  data () {
    return {
      breadData: []
    }
  },
  methods: {
    toPage (path) {
      this.$router.push({
        path,
        query: this.$route.query
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.bread-hover:hover{
    cursor: pointer;
    font-weight: bold;
}
</style>
