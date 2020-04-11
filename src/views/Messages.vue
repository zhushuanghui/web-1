

<template>
  <div class="messages">
    <div class="banner" :style="bg">
      <!-- <img :src="banner" alt=""> -->
    </div>
    <section class="content">
      <contentslot>
        <span slot="title">在线留言</span>
        <article slot="article">
          <div class="card">
            <div class="header">
              提交留言
            </div>
            <el-form id="form" :label-position="labelPosition" label-width="110px" :model="formLabelAlign">
              <el-form-item label="姓名">
                <el-input v-model="formLabelAlign.name" placeholder="请输入您的姓名"></el-input>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="formLabelAlign.tel" placeholder="请输入电话号码"></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="formLabelAlign.email" placeholder="请输入邮箱地址"></el-input>
              </el-form-item>
              <el-form-item label="其他联系方式">
                <el-input v-model="formLabelAlign.other" placeholder="请输入其他联系方式"></el-input>
              </el-form-item>
              <el-form-item label="留言内容">
                <el-input  type="textarea" v-model="formLabelAlign.msg" placeholder="请输入留言内容"></el-input>
              </el-form-item>
              <el-form-item >
                <el-button type="primary">提交信息</el-button>
              </el-form-item>
            </el-form>
          </div>
        </article>
      </contentslot>
    </section>
  </div>
</template>
<script>
import contentslot from '@/components/Content.vue';

export default {
  name:'message',
  data(){
    return{
      bg: {
        backgroundImage: "url(" + require("../assets/images/about.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      labelPosition: 'left',
        formLabelAlign: {
          name: '111',
          tel: '222',
          email: '333',
          oteher:'',
          msg:''
        }
    }
  },
  components:{
    contentslot
  }
}
</script>
<style lang="less" scoped>
  .banner{
    width: 100%;
    height: 380px;
    // overflow: hidden;
  }
  .flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content{
    width: 70%;
    margin: 0 auto;
    padding: 40px 0;
  }
  .article{
    flex: 1;
  }
  article{
    padding: 15px;
  }
  .card{
    border:1px solid #ddd;
  }
  .header{
    line-height: 60px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    background: #ddd;
    border-bottom: 1px solid #ddd;
  }
  .el-form{
    // padding-top:15px ;
  }
  .el-form-item{
    padding: 15px 20px;
    margin:0;
    border-bottom: 1px solid #ddd;
  }
  
</style>
