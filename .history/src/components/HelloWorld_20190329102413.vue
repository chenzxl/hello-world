<template>
  <div class="hello">
    <h1>this is HelloWorld</h1>
  </div>
</template>

<script>
import FunctionalOptions from './select/functional-options.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      slotOptions: this.$slots.default,
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
