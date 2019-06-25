<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>
<script>
    const prefixCls = 'ifast-icon';

    export default {
        name: 'Icon',
        props: {
            type: {
                type: String,
                default: 'add'
            },
            size: [Number, String],
            color: String,
            custom: {
                type: String,
                default: ''
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-${this.type}`
                ];
            },
            styles () {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.color) {
                    style.color = this.color;
                }

                return style;
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        }
    };
</script>
