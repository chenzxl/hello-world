<template>
  <div>
    <p>{{count}}</p>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
  </div>
</template>

<script>
export default {
  name: 'Hell',

  data () {
    return {
      count:0
    }
  },

  methods: {}
}
</script>

<style lang='less' scoped>

</style>
