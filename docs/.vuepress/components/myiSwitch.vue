<template>
    <div>
      <iSwitch  v-model="falg" 
      :trueValue="trueValue" 
      :falseValue="falseValue" 
      :trueText="trueText" 
      :falseText="falseText"
      :disabled="disabled"
      :size="size"
      ></iSwitch>
        <p v-if="showText">{{falg}}</p>
    </div>
</template>

<script>
export default {
  name: 'myiSwitch',
  props:{
      value:{
        type:[String,Number,Boolean],
        default:false
      },
      showText:{
        type:Boolean,
        default:true
      },
      trueValue:{
        type:[String,Number,Boolean],
        default:true
      },
      falseValue:{
        type:[String,Number,Boolean],
        default:false
      },
      trueText:{
        type:String,
        default:''
      },
      falseText:{
        type:String,
        default:''
      },
      disabled:{
        type:Boolean,
        default:false
      },
      size:{
        type:String,
        validator(value){
          return ['lg','sm'].indexOf(value)!=-1
        }
      }
  },
  data () {
    return {
      falg: false
    }
  },
  mounted(){
    console.log(this.$children)
  }
}
</script>