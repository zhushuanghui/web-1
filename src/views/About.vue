<!--
 * @Author: your name
 * @Date: 2020-04-07 21:42:48
 * @LastEditTime: 2020-04-10 22:06:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tt/web/src/views/About.vue
 -->
<template>
  <div class="about">
    <div class="banner" :style="bg">
      <!-- <img :src="banner" alt=""> -->
    </div>
    <section class="content">
      <!-- <el-row class="tac" :gutter="20" type="flex" justify="space-between">
        <el-col class="menu">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="rgba(229,229,229,0.5)"
            text-color="#000"
            active-text-color="#fff"
            router
            >
            <el-menu-item class="menu-top">
              <span slot="title">关于我们</span>
            </el-menu-item>
            <el-menu-item index="about">
              <i class="el-icon-user"></i>
              <span slot="title">关于我们</span>
            </el-menu-item>
            <el-menu-item index="culture">
              <i class="el-icon-connection"></i>
              <span slot="title">企业文化</span>
            </el-menu-item>
            <el-menu-item index="messages">
              <i class="el-icon-chat-line-round"></i>
              <span slot="title">在线留言</span>
            </el-menu-item>
            <el-menu-item index="contact">
              <i class="el-icon-phone-outline"></i>
              <span slot="title">联系我们</span>
            </el-menu-item>
          </el-menu>
        </el-col>

        <el-col class="article">
            <div class="header flex">
              <p>关于我们</p>
              <el-breadcrumb separator-class="el-icon-arrow-left">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>关于我们</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
        </el-col>
      </el-row> -->
      <contentslot>
        <span slot="title">关于我们</span>
        <article slot="article">
          this is 关与我们
        </article>
      </contentslot>
    </section>
  </div>
</template>
<script>
// import video2 from '@/assets/videos/2.mp4'
import about from '@/assets/images/about.jpg'
import contentslot from '@/components/Content.vue';

export default {
  name:'baout',
  data(){
    return{
      banner:about,
      bg: {
        backgroundImage: "url(" + require("../assets/images/about.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
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
  .header{
    border-bottom:1px solid #999;
  }

  .article{
    flex: 1;
  }

</style>