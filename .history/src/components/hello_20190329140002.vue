<template>
  <div>
    <p>{{count}}</p>
    <button @click="add">+</button>
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

  methods: {
    add(){
      this.count=this.count+1
      
       this.$emit('hellClick', {
            value: this.count
        });
    }
  }
}
</script>

<style lang='less' scoped>

</style>
