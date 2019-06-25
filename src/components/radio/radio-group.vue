<template>
  <div :class="classes" :name="name">
      <slot></slot>
  </div>
</template>

<script>
import { oneOf,findComponentsDownward } from '../../utils/index';
import Emitter from '../../utils/emitter';
let seed = 0;
const now = Date.now();
const groupName=()=>`iFastRadioGroup_${now}_${seed++}`;;

const prefixCls='ifast';
export default {
  name: "RadioGroup",
  mixins:[Emitter],
  props: {
    value: {
        type: [String, Number],
        default: ''
    },
    size: {
        validator (value) {
            return oneOf(value, ['sm', 'lg']);
        },
    },
    type: {
        validator (value) {
            return oneOf(value, ['button']);
        }
    },
    vertical: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        default: groupName
    }
  },
  computed: {
    classes () {
        return [
            {
                [`${prefixCls}-group-radio`]:true,
                [`${this.size}`]: !!this.size,
                [`${prefixCls}-radio-button`]:!!this.type,
                [`${prefixCls}-radio-block`]: this.vertical
            }
        ];
    }
  },

  data() {
    return {
        currentValue: this.value,
        childrens: []
    };
  },

  mounted() {
    this.updateValue();
  },
  methods: {
    updateValue() {
      this.childrens = findComponentsDownward(this, "Radio");
      console.log(this.currentValue)
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.currentValue = this.currentValue === child.label;
          child.group = true;
        });
      }
    },
    change(data) {
      this.currentValue = data.value;
      this.updateValue();
      this.$emit("input", data.value);
      this.$emit("on-change", data.value);
      // this.dispatch("FormItem", "on-form-change", data.value);
    }
  },
  watch: {
    value() {

      if (this.currentValue !== this.value) {
        this.currentValue = this.value;
        this.$nextTick(() => {
          this.updateValue();
        });
      }
    }
  }
};
</script>

<style lang='less' scoped>
</style>
