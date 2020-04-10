<!--
 * @Author: your name
 * @Date: 2020-04-07 21:42:48
 * @LastEditTime: 2020-04-10 21:49:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /web/src/views/Home.vue
 -->

<template>
  <div class="index">
    <el-container>
      <el-header height="80px">
        <div class="logo">
          <img :src= "logo"  alt="">
        </div>
        <div class="nav-menu">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/home" >网站首页</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <el-menu-item index="/culture">企业文化</el-menu-item>
          <el-menu-item index="/news">新闻中心</el-menu-item>
          <el-menu-item index="/products">产品中心</el-menu-item>
          <el-menu-item index="/messages">在线留言</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// // @ is an alias to /src
import logo from '@/assets/images/logo-22.jpg'

export default {
  name: 'Home',
  data () {
    return {
      logo,
      activeIndex: '/home'
    }
  }
}

</script>
<style lang="less" scoped>
  .el-header{
    // height: 80px !important;
    min-width: 1100px;
    width: 65%;
    margin:0 auto;
    padding-top:20px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;

    .logo{
      height: 60px;
      overflow: hidden;

      img{
        height: 100%;
      }
    }
  }
  .el-main{
    min-height: calc(100vh - 260px);
    margin:0;
    padding: 0;
  }
  footer{
    padding: 30px 0 0 0;
    background: #161616;
    color: #CCC;
    font-size: 14px;
    min-height: 180px;
    border-bottom: 1px solid #313131;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(49, 49, 49);
    padding-bottom: 20px;
  }
</style>
