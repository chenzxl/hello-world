/*
 * @Author: chenzhinjian
 * @Date: 2018-12-28 14:43:00
 * @LastEditTime: 2019-01-05 09:07:34
 * @Description: 
 */
import Msg from './msg/index.vue';
import HelloWorld from './HelloWorld.vue';
import numberComma from './tools/number/comma.js'
import base64 from './tools/base64/index'
import querystring from './tools/querystring/index'
Msg.install = Vue => Vue.component(Msg.name, Msg)
const Components = [
  Msg,
  HelloWorld
];
const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export {
  Msg,
  HelloWorld,
  base64,
  numberComma,
  querystring
};