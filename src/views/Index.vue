<!--
 * @Author: your name
 * @Date: 2020-04-07 21:42:48
 * @LastEditTime: 2020-04-11 13:24:52
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
      <div class="footer">
        <div class="inner">
          <div class="left">
            <p>联系我们</p>
            <ul>
              <li>地址: 合肥市黄山路西环中心广场</li>
              <li>电话: 13931140805 15075171310</li>
              <li>手机：13931140805 15075171310</li>
              <li>Email: 2212322343@qq.com 2050001400@qq.com</li>
            </ul>
          </div>
          <div class="right">
            <p>友情链接</p>
            <div class="tem_img"> 
              <a href="" title="" target="_blank"><img :src="links" title="" alt=""></a> 
              <a href="" title="" target="_blank"><img :src="links" title="" alt=""></a>
              <a href="" title="" target="_blank"><img :src="links" title="" alt=""></a> 
              <a href="" title="" target="_blank"><img :src="links" title="" alt=""></a>
              <a href="" title="" target="_blank"><img :src="links" title="" alt=""></a> </div>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
// // @ is an alias to /src
import logo from '@/assets/images/logo-22.jpg'
import links from '@/assets/images/logo-8.png'

export default {
  name: 'Home',
  data () {
    return {
      logo,
      links,
      activeIndex: '/home'
    }
  },
  watch: {
    '$route.path': function (newVal, oldVal) {
      this.activeIndex = this.$route.path;
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  mounted () {
    // 检测浏览器路由改变页面不刷新问题,hash模式的工作原理是hashchange事件
    window.addEventListener('hashchange', () => {
      let currentPath = window.location.hash.slice(1)
        this.activeIndex = currentPath;
    }, false)
    this.activeIndex = this.$route.path;
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
  .footer{
    height: 100%;
    padding: 30px 0 0 0;
    background: #161616;
    color: #CCC;
    font-size: 14px;
    // min-height: 250px;
    border-bottom: 1px solid #313131;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(49, 49, 49);
    padding-bottom: 20px;
    .inner{
      width: 70%;
      margin:0 auto;
      display: flex;
      justify-content: space-between;

      .left{
        li{
          padding-top: 5px;
          padding-right: 48px;
          min-height: 35px;
          color: #CCC;
        }
      }
      .right{
        .tem_img{
          display: flex;

          a{
            margin-right: 5px;
          }
          img{
            width: 100px;
            height: 50px;
            }
        }
      }
    }
  }
</style>
