<template>
  <div>
      <Table :columns="columns1" :data="data1"></Table>
      <Button @click="test">按钮{{testValue}}</Button>
      <ul class="test">
        <li>1</li>
        <li>2</li>
      </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      testValue: 1,
      columns1: [
        {
          title: 'Name',
          key: 'name'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        }
      ]
    }
  },
  methods: {
    test () {
      console.log(11)
    }
  }
}
</script>
<style lang="scss" scoped>
.test{
  display: flex;
  li{
    background: rgb(192, 78, 78);
  }
}
</style>
