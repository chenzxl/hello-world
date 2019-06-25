import * as msd from '@';
import '@/styles/ifast-px.scss';
import'./styles/reast.scss';
import '@/assets/fonts/css/ionicons.css';
// import 'vuep/dist/vuep.css'
// import 'vuep/dist/vuep.css'
// import VueRouter from 'vue-router'

export default ({ 
  Vue, // VuePress 正在使用的 Vue 构造函数
 }) => {
  Vue.use(msd)
  window.Vue=Vue;
};
