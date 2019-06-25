<template>
  <div class="hello">
    <h1>this is HelloWorld</h1>
    <functional-options :options="selectOptions" 
                  :slot-update-hook="updateSlotOptions"
                        :slot-options="slotOptions"></functional-options>
  </div>
</template>

<script>
import FunctionalOptions from './select/functional-options.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{FunctionalOptions},
  computed:{
    selectOptions(){
      // console.log(this.slotOptions)
      const slotOptions = (this.slotOptions || []);
      console.log(this.slotOptions)
      return this.slotOptions

    }
  },
  data() {
    return {
      slotOptions: this.$slots.default,
      
    }
  },
  methods:{
    updateSlotOptions(){
       console.log('this is updateSlotOptions')
       this.slotOptions = this.$slots.default;
    }
  },
  watch:{
    slotOptions(options, old){
      debugger
      // #4626，当 Options 的 label 更新时，v-model 的值未更新
      // remote 下，调用 getInitialValue 有 bug
      // if (!this.remote) {
      //     const values = this.getInitialValue();
      //     if (this.flatOptions && this.flatOptions.length && values.length && !this.multiple) {
      //         this.values = values.map(this.getOptionData).filter(Boolean);
      //     }
      // }

      // // 当 dropdown 在控件上部显示时，如果选项列表的长度由外部动态变更了，
      // // dropdown 的位置会有点问题，需要重新计算
      // if (options && old && options.length !== old.length) {
      //     this.broadcast('Drop', 'on-update-popper');
      // }
    },
  }
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
