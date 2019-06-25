<template>
  <div>
    <p>{{count}}</p>
    <button @click="add">+</button>
    <button @click="count--">-</button>
  </div>
</template>

<script>
import Emitter from '../utils/emitter.js'
export default {
  name: 'Hell',
  mixins:[Emitter],
  data () {
    return {
      count:0
    }
  },

  methods: {
    add(){
      this.count=this.count+1
      console.log(23123)
      this.dispatch('HelloWorld','hellClick',{
        value:this.count
      })
       this.$emit('hellClick', {
            value: this.count
        });
    }
  }
}
</script>

<style lang='less' scoped>

</style>
