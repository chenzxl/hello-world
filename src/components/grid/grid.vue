<template>
    <div :class="classes" @click="handleClick">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/index';
    const flexCs = 'ifast-flex';
    const gridCs = 'ifast-row';
    const gridCol= 'ifast-col';
    export default {
        name: 'Row',
        props: {
            type: {
                type: String,
                default: 'grid',
                validator (value) {
                    return oneOf(value, ['flex','grid']);
                }
            },
            direction:{
                type:String,
                 validator (value) {
                    return oneOf(value, ['row']);
                }
            },
            wrap:{
                type:String,
                validator (value) {
                    return oneOf(value, ['wrap', 'wrap-reverse']);
                }
            },
            align: {
                type:String,
                default:'center',
                validator (value) {
                    return oneOf(value, ['flex-start', 'center', 'flex-end','baseline','stretch']);
                }
            },
            justify: {
                type:String,
                default:'center',
                validator (value) {
                    return oneOf(value, ['flex-start','flex-end','center','space-between','space-around']);
                }
            },
            className:String,
            gutter: {
                type: Number,
                default: 0
            },
        },
        computed: {
            classes () {
                let p='';
                if(oneOf(this.type, ['grid'])){
                    p={
                        [`${gridCs}`]: oneOf(this.type, ['grid']),
                       
                        [`${this.className}`]: !!this.className
                    }
                }else{
                    p={
                        [`${flexCs}`]: oneOf(this.type, ['flex']),
                        [`${flexCs}-${this.wrap}`]:!!this.wrap,
                        [`${flexCs}-${this.direction}`]:!!this.direction,
                        [`${flexCs}-align-${this.align}`]:!!this.align,
                        [`${flexCs}-justify-${this.justify}`]:!!this.justify,
                        [`${this.className}`]: !!this.className
                    }
                }
                console.log(p)
                return [p];
                
            },
            styles () {
                
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        }
    };
</script>
