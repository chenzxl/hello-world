<template>
  <div id="app">
      <button @click="clickOne">clickOne</button>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" ></el-input>
        </el-form-item>
        <el-form-item>
          <div type="primary" @click="submitForm('ruleForm')">立即创建</div>
          <div class="btn" @click="resetForm('ruleForm')">重置</div>
        </el-form-item>
      </el-form>
      <div class="block">
        <span class="demonstration">页数较少时的效果</span>
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
  </div>
</template>

<script>
// import {Select, Option} from 'iview/src/components/select/index';
import Notice from 'iview/src/components/notice/index';
import ElForm from'element-ui/packages/form'
import ElFormItem from'element-ui/packages/form-item'
import ElInput from'element-ui/packages/input'
import Pagination from './element-ui/packages/pagination/src/pager'
export default {
  name: 'app',
  components: {ElForm,ElFormItem,ElInput,Pagination},
  data() {
    return {
      value:'',
      ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'bbbb' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'bbbb' }
          ],
        }
    }
  },
  mounted(){
    setTimeout(() => {
      this.model1=1231321312312
    }, 2000);
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {1
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    clickOne(){
      // console.log(event,'onclickoutside')
      Notice.open({
                    title: 'Notification title',
                    desc: 'Here is the notification description. Here is the notification description. '
                })
    },
  }
}
</script>

<style lang="scss" scoped>
// @import "./styles/index.scss";
.demo-carousel{
  height: 100%;
  background-color: yellow;
  text-align:center;
}

</style>
