<template>
  <div class="confirm-wrapper" v-show="display">
    <div class="modal" @click="handleAction('confirm')" @touchmove.prevent></div>
    <transition name="confirm-bounce" @after-leave="afterLeave">
      <div class="confirm-box" v-show="visible">
        <div class="confirm-header" v-if="title">
          <strong class="confirm-header-title">{{ title }}</strong></div>
        <div class="confirm-body"  v-if="message">
          <div>{{ message }}</div>
        </div>
        <div class="confirm-footer">
           <button-group>
              <i-button @click="handleAction('cancel')" v-if="showCancelBtn">{{ cancelBtnText}}</i-button>
              <i-button type="primary" @click="handleAction('confirm')" v-if="showConfirmButton">{{ confirmBtnText }}</i-button>
          </button-group>
          <!-- <button class="cancel-btn" @click="handleAction('cancel')" v-if="showCancelBtn">
            {{ cancelBtnText}}
          </button>
          <button class="confirm-btn" @click="handleAction('confirm')" v-if="showConfirmButton">
            {{ confirmBtnText }}
          </button> -->
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  data () {
    return {
      display: false,
      visible: false
    }
  },
  methods: {
    afterLeave () {
      this.display = false
    },
    handleAction (action) {
      if (action === 'cancel' || action === 'confirm') {
        this.callBack && this.callBack(action)
      }
    }
  },
  props: {
    title: {
      type: String,
      default: '提示'
    },
    message: String,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    callBack: Function
  }
}
</script>

<style lang="less" scoped>
  .confirm-wrapper {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background:rgba(35,36,40,0.30);
  }
  .confirm-box {
    width: 80%;
    border-radius: 4px;
    font-size: 16px;
    overflow: hidden;
    background-color: #fbfdff;
    .confirm-header {
      padding: 1.3em 1.6em .5em;
      text-align: center;
      .confirm-header-title{
        font-weight: 400;
        font-size: 18px;
      }      
    }
    .confirm-body {
      padding: 0 18px 10px;
    }
    .confirm-footer {
      display: flex;
      border-top: 1px solid #e1e1e1;
      text-align: right;
      line-height: 44px;
      button {
        flex: 1;
        &.cancel-btn {
          border-right: 1px solid #e1e1e1;
        }
        &.confirm-btn {
          color: #26a2ff;
        }
      }
    }
  }
  // 添加动画效果
  .confirm-bounce-enter-active, .confirm-bounce-leave-active {
    transition: all 0.3s ease;
  }
  .confirm-bounce-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  .confirm-bounce-leave-active {
    opacity: 0;
    transform: scale(0.8);
  }
</style>

