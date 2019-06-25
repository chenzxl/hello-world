<template>
    <div :class="classes" @click="handleClick" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    //order :顺序
    import { oneOf } from '../../utils/index';
    const flexItemCs = 'ifast-flex';
    const gridItemCs= 'ifast-col';
    export default {
        name: 'Col',
        props: {
            offset:{
                type:[Number,String]
            },
            span:{
                type:String,
                default:'1',
            },
            size:{
                type:String,
                default:'md',
                validator(value){
                    return oneOf(value,['xs','sm','md','lg'])
                }
            },
            order:[Number,String],
            align: {
                type:String,
                validator (value) {
                    return oneOf(value, ['flex-start', 'center', 'flex-end','baseline','stretch']);
                }
            },
            flex:[Number,String],
            basis:Number,
            // align:{
            //     type:String,
            //     default:'center'
            // },
            // content:{
            //     type:String,
            //     default:'center'
            // },
           
            // grow:{
            //     type:[Number],
            //     default:0
            // },
            // shrink:{
            //     type:[Number],
            //     default:1
            // },
            // basis:{
            //      type:[Number],
            //     default:1
            // },
            // self:{
            //     type:String,
            // },
            classNames:String,
            offsetLeft:[Number,String],
            offsetRight:[Number,String],
        },
        computed: {
            classes(){
                let p='';
                let className=''
                if(oneOf(this.$parent.type,['flex'])){
                    p={
                        [`${flexItemCs}-item-align-${this.align}`]:!!this.align,
                        
                    }
                }else{
                    p={
                         [`${gridItemCs}-${this.size}-${this.span}`]:this.span,
                         [`${gridItemCs}-${this.size}-offset-${this.span}`]: this.offset,
                         [`${this.classNames}`]: !!this.classNames
                    }
                }
                return [p]
            },
            parent () {
                let parent=null;
                if(this.$parent.$options._componentTag==='Row'){
                    parent=this.$parent;
                }
                return parent;
            },
            styles () {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.order) {
                    style.order = this.order;
                }
                if(this.span&&oneOf(this.$parent.type,['flex'])){
                    style.flex=this.span;
                }

                return style;
            }
        },
        methods: {
            handleClick (event) {
                event.stopPropagation();
                this.$emit('click', event);
            }
        }
    };
</script>
