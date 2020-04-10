

<template>
  <el-row class="tac" :gutter="20" type="flex" justify="space-between">
    <el-col class="menu">
      <!-- <h5>自定义颜色</h5> -->
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="rgba(229,229,229,0.5)"
        text-color="#000"
        active-text-color="#fff"
        router
        >
        <el-menu-item class="menu-top">
          <!-- <i class="el-icon-menu"></i> -->
          <!-- <span slot="title">关于我们</span> -->
          <slot slot="title" name="title" class="left-title">关于我们</slot>
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
        <div class="header flex" style="display:flex;align:center;justify-content:space-between">
          <slot name="title">关于我们</slot>
          <el-breadcrumb separator-class="el-icon-arrow-left">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item> <slot name="title">关于我们</slot></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <article>
          <slot name="article">999</slot>
        </article>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name:"content-slot"
}
</script>

<style lang="less" scoped>
  .content{
    width: 70%;
    margin: 0 auto;
    padding: 40px 0;
  }
  .header{
    border-bottom:1px solid #999;
    height: 40px;
  }

  .article{
    flex: 1;
  }

  .menu.el-col {
    width: 180px;
    // flex-grow: 0;
    text-align: center;
  }
  .menu .el-menu-item, .el-submenu__title{
    height: 45px;
    line-height: 45px;

    // :hover{
    //   color: #fff;
    // }
  }
  .el-menu{
    border-radius: 10px;
    overflow: hidden;
  }
  .menu .el-menu-item.menu-top{
    height: 60px;
    line-height: 60px;
    border-bottom:1px dashed #ccc ;
  }
  .menu-top .left-title{
    font-size: 18px;
    color: #333;
  }
  .menu-top:hover{
    cursor: default;
    background: rgba(229, 229, 229,0.5) !important;
  }
  .menu-top .left-title:hover{
    color: #666 !important;
  }
</style>