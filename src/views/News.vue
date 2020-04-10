<!--
 * @Author: your name
 * @Date: 2020-04-10 11:22:32
 * @LastEditTime: 2020-04-10 22:18:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tt/web/src/views/Messages.vue
 -->

<template>
  <div class="news">
    <div class="banner" :style="bg">
      <!-- <img :src="banner" alt=""> -->
    </div>
    <section class="content">
      <el-row class="tac" :gutter="20">
        
        <el-col class="article" :span="16">
          <div class="header flex spb">
            <div name="title">新闻中心</div>
            <el-breadcrumb separator-class="el-icon-arrow-left">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>企业新闻</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <article>
            <ul>
              <li v-for="item in 5" :key="item">
                <h2>  我司移动项目顺利通过验收</h2>
                <div class="record flex spb">
                  <span>2015年12月8日</span>
                  <span>在看</span>
                </div>
                <div>
                  <img :src="img" alt="">
                </div>
                <div class="desc">
                  2011年11月25日，我司互联网信息服务有限公司在与韶关移动分公司洽谈后，移动对我司在移动通信行业的应用产品表示强烈的合作意向，并成功成为移动的采购项目
                </div>
                <p class="read"><a href="#">阅读全文</a></p>
              </li>
            </ul>
            <div class="pagination">
              <el-pagination
              background
              layout="prev, pager, next"
              :total="300">
              </el-pagination>
            </div>
          </article>
        </el-col>

        <el-col class="right" :span="8">
          <ol>
              <li v-for="(item,index) in 4" :key="item" class="flex">
                <span class="num">{{index}}</span>
                <p> 我司移动项目顺利通过验收,上海自贸区跨境通试运行 建国内唯一跨国电子交易平台</p>
              </li>
            </ol>
        </el-col>

      </el-row>
    </section>
  </div>
</template>
<script>
import contentslot from '@/components/Content.vue';
import img from "../assets/images/1.jpg"
export default {
  name:'news',
  data(){
    return{
      img,
      bg: {
        backgroundImage: "url(" + require("../assets/images/1.jpg") + ")",
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
  .news{
    background: #fafafa;
  }
  .banner{
    width: 100%;
    height: 380px;
    // overflow: hidden;
  }
  .header{
    margin-bottom: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
  .flex{
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .spb{
    justify-content: space-between;
  }

  .content{
    width: 70%;
    margin: 0 auto;
    padding: 40px 0;
  }
  .article{
    flex: 1;
  }
  ol li{
    margin-bottom: 10px;
    color: #333;

    p{
      // flex: 0;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .num{
    display: inline-block;
    width: 26px;
    height: 26px;
    margin-right: 5px;
    border-radius: 3px;
    line-height: 26px;
    background: #dbdbdb;
    text-align: center;
    overflow: hidden;
    color: #fff;
    flex-shrink: 0;
    // vertical-align: middle;
  }
  article{
    padding: 0 40px;
    background: #fff;
    overflow: auto;
    h2{
      font-size: 24px;
      color:#333;
      font-weight: 400;
    }
    img{
      width: 100%;
    }
    .record{
      color:#999;
      font-size: 12px;
      margin-bottom: 5px;
    }
    .desc{
      color: #818181;
      height: 40px;
      overflow:hidden; 
      text-overflow:ellipsis;
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2; 
    }
    .read{
      text-align: right;
    }
  }
  .pagination{
    text-align: center;
    margin-bottom: 40px;
  }
</style>
