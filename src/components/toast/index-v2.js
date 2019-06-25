import Vue from 'vue'
import ToastConfig from './toast.vue'
let instance = null
let timer = null
// https://cn.vuejs.org/v2/api/#Vue-extend
const ToastConstructor = Vue.extend(ToastConfig)
ToastConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', this.destroyeInstance.bind(this))
}

ToastConstructor.prototype.destroyeInstance = function () {
  instance = null
  // 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。
  this.$destroy(true)
  this.$el.removeEventListener('transitionend', this.destroyeInstance)
  this.$el.parentNode.removeChild(this.$el)
}

const toast={
  show:({msg = '默认信息',time=2000})=>{
    if (instance) {
      instance.visible = true
      instance.msg = msg
      if (timer) {
        clearInterval(timer)
      }
      instance.$el.removeEventListener('transitionend', instance.destroyeInstance)
    } else {
      // https://cn.vuejs.org/v2/api/#vm-mount
      instance = new ToastConstructor({
        el: document.createElement('div'),
        propsData: {
          msg: msg,
          visible: false
        }
      })
      document.body.appendChild(instance.$el)
    }
    Vue.nextTick(() => {
      console.log(this)
      instance.visible = true
      timer = setTimeout(() => {
        //移除节点
        if(instance){
          instance.$el.parentNode.removeChild(instance.$el)
        }
      }, time)
    })
  },
  hide:()=>{

    if (instance) {
      instance.visible = true
      instance.close()
    }
  }
}
// function init ({msg = '默认信息',time=2000}) {
//   debugger;
//   if (instance) {
//     instance.visible = true
//     instance.msg = msg
//     if (timer) {
//       clearInterval(timer)
//     }
//     instance.$el.removeEventListener('transitionend', instance.destroyeInstance)
//   } else {
//     // https://cn.vuejs.org/v2/api/#vm-mount
//     instance = new ToastConstructor({
//       el: document.createElement('div'),
//       propsData: {
//         msg: msg,
//         visible: false
//       }
//     })
//     console.log(instance)
//     document.body.appendChild(instance.$el)
//   }
//   Vue.nextTick(() => {
//     instance.visible = true
//     timer = setTimeout(() => {
//       instance.close()
//     }, time)
//   })
// }

export default toast
