<template>
    <label :class="wrapClasses">
        <span :class="radioClasses">
            <span :class="innerClasses"></span>
            <input
                type="radio"
                :class="inputClasses"
                :disabled="disabled"
                :checked="currentValue"
                :name="radioName"
                @change="change"
                @focus="onFocus"
                @blur="onBlur">
          
        </span>
        <span><slot>{{ label }}</slot></span>
    </label>
</template>
<script>
      import { oneOf,findComponentUpward } from '../../utils/index';
    import Emitter from '../../utils/emitter';
    const prefixCls = 'ifast';

    export default {
        name: 'Radio',
        mixins: [ Emitter ],
        props: {
            value: {
                type: [String, Number, Boolean],
                default: false
            },
            trueValue: {
                type: [String, Number, Boolean],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean],
                default: false
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            }
        },
        data () {
            return {
               parent:findComponentUpward(this,'RadioGroup'),
               radioName:this.name,
               currentValue:this.value,
            };
        },
        computed: {
            wrapClasses(){
                return[
                    `${prefixCls}-radio-label`,
                    [{
                        [`${prefixCls}-radio-checked`]:this.currentValue,
                         [`${prefixCls}-disabled`]:this.disabled
                    }]
                ]
            },
            radioClasses(){
                return [
                    `${prefixCls}-radio`
                ]
            },
            innerClasses(){
               
                return [
                    `${prefixCls}-radio-inner`
                ]
            },
            inputClasses(){
                return [
                     `${prefixCls}-radio-input`
                ]
                   
            }
        },
        mounted () {
            if(this.parent){
                this.group = true;
                if(this.name&& this.name !== this.parent.name){
                    console.warn('[ifast] Name does not match Radio Group name.')
                }else{
                    this.radioName=this.parent.name
                }
            }
            if(this.group){
                this.parent.updateValue();
            }else{
                this.updateValue();
            }
        },
        methods: {
            updateValue () {
                this.currentValue = this.value === this.trueValue;
            },
            change(evnet){
                let e=evnet||window.event;
                if (this.disabled) {
                    return false;
                }
                const checked = e.target.checked;
                this.currentValue = checked;
                this.$emit('input', value);

                const value = checked ? this.trueValue : this.falseValue;
                //传给父级
                if(this.group){
                    this.parent.change({
                        value: this.label,
                        checked: this.value
                    })
                }else{
                    this.$emit('on-chang',this.value);
                }
               
            },
            onFocus(){
                this.$emit('on-flur')
            },
            onBlur(){
                this.$emit('on-flur')
            }
        },
        watch: {
            value:(val)=>{
                val
                if (val === this.trueValue || val === this.falseValue) {
                    this.updateValue();
                } else {
                    throw 'Value should be trueValue or falseValue.';
                }
            }
        }
    };
</script>
