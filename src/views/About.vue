<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <div class="animate__animated animate__flash">动画效果</div>
    <a href="">哈哈哈哈</a>
    <Button @click="show = !show">显示或消失</Button>
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconxiaoxi"></use>
    </svg>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    test () {
      console.log(1)
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  },
  mounted () {
    this.test()
    this.drawLine()
  }
}
</script>
