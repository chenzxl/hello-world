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
        <span class="demonstration">显示总数</span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
      <div class="block">
        <span class="demonstration">调整每页显示条数</span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage2"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
      <div class="block">
        <span class="demonstration">直接前往</span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
      <div class="block">
        <span class="demonstration">完整功能</span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
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
// import ElPagination from './element-ui/packages/pagination/src/pager'
export default {
  name: 'app',
  components: {ElForm,ElFormItem,ElInput},
  data() {
    return {
      value:'',
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
      
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
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
