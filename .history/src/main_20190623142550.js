import Vue from 'vue'
import 'ifast/src/assets/fonts/css/ionicons.css';
import App from './App.vue'
import "./styles/index.scss";
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import Notice from 'iview/src/components/notice';
// import ElementUI from 'element-ui';
import ElementUI for'./element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// let index=require()
// Vue.prototype.$Notice = Notice;
Vue.use(Notice);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
