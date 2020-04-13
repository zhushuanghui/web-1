<template>
  <div class="home">
    <div class="home-top flex jcsb">
      <div class="top-left">
        <div class="left-title top-title flex jcsb ac">
          <p>图片新闻</p>
          <el-link :underline="false">更多</el-link>
        </div>
        <swiper ref="swiperTop"  class="my-swiper" v-if="banners.length>1"  :options="swiperOptions">
          <swiper-slide  v-for="banner in bannerImgs" :key="banner">
            <img  class="big-item" :src="banner" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>  
      </div>
      <div class="top-right">
        <el-link :underline="false" class="more" @click="handleClick">更多</el-link>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="公司新闻" name="first">
            <li v-for="i in 8" :key="i" class="flex jcsb ac">
                <span>  这是第{{i}} 条新闻内容</span>
                <span>2020-04-{{i}}</span>
            </li>
          </el-tab-pane>
          <el-tab-pane label="基层动态" name="second">
            <li v-for="i in 8" :key="i" class="flex jcsb ac">
                <span>  这是第{{i}} 条基层动态</span>
                <span>2020-04-{{i}}</span>
            </li>
          </el-tab-pane>
          <el-tab-pane label="媒体报道" name="third">
            <li v-for="i in 8" :key="i" class="flex jcsb ac">
                <span>  这是第{{i}} 条媒体报道</span>
                <span>2020-04-{{i}}</span>
            </li>
          </el-tab-pane>
          <!-- <el-tab-pane  label="更多"></el-tab-pane> -->
        </el-tabs>
      </div>
    </div>

    <div class="home-center">
      <div class="center-title">
        参建项目
      </div>
      <div class="project-list flex">
        <li v-for="i in 4" :key="i" >
          <img :src="bannerImgs[0]" alt="">
          <span>上海迪士尼</span>
        </li>
      </div>
    </div>
    

    <div class="detail">
      <div class="top">
        <p class="title">服务范围简介</p>
        <p class="desc">为您量身定制的互联网服务,为您的企业插上互联网翅膀</p>
      </div>
      <ul class="content">
        <li v-for="item in service" :key="item">
          <div class="img">

          </div>
          <p>一条龙服务</p>
        </li>
      </ul>
    </div>

    <div class="detail">
      <div class="top">
        <p class="title">行业资讯新闻</p>
        <p class="desc">聚焦最新的互联网行业动态</p>
      </div>
      <!-- <ul class="content news">
        <li v-for="item in news" :key="item">{{item}}</li>
      </ul> -->
      <ul class="content news">
        <el-card :body-style="{ padding: '0px' }" v-for="item in news" :key="item" >
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <!-- this is a test -->
              <!-- <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button> -->
            </div>
          </div>
        </el-card>
      </ul>
    </div>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// import { videoPlayer } from 'vue-video-player'
// import 'video.js/dist/video-js.css'
import img1 from '@/assets/images/banner-2.jpeg'
import img2 from '@/assets/images/banner-3.jpeg'
import video1 from '@/assets/videos/1.mp4'
import video2 from '@/assets/videos/2.mp4'
// import video3 from '@/assets/videos/3.mov'
// import video4 from '@/assets/videos/4.mov'

export default {
  name: 'home',
  data () {
    return {
      // banners: [video1, video2, video3, video4],
      banners: [video1, video2],
      bannerImgs: [img1, img2],
      activeName: 'second',
      service: [1, 2, 3, 4],
      news: [1, 2, 3],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        observer: true,
        observeParents: true,
        autoplay: true,
        // autoplay: {
        //   // delay: 3000,
        //   // disableOnInteraction: false
        // },
      },
    
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }

}
</script>

<style lang="less" scopeded>
  .home{
    width:70%;
    min-width: 1080px;
    margin:0 auto;
    box-sizing: border-box;
  }
  .home-top{
    margin-bottom: 40px;
    box-sizing: border-box;
  }
  .top-right,.top-left{
    width: 48%;
  }
  .top-title{
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    height: 40px;
  }
  .top-right .el-tabs__header {
    margin: 0 0 20px;
  }
  .my-swiper{
    width: 100%;
    height: 320px;
    overflow: hidden;
    img{
      width: 100%;
      height: 320px;
    }
  }
  .swiper-pagination{
    padding: 0 10px;
    box-sizing: border-box;
    text-align: right;
  }
  .swiper-pagination-bullet{
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 0;
    opacity: 0.5;
    color: #fff;
  }
  .swiper-pagination-bullet .swiper-pagination-bullet-active{
    background:red;
  }

  .top-right{
    position: relative;

    .more{
      position: absolute;
      right: 0;
      top: 20px;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 11;
    }
  }
  

  .el-tab-pane li{
    height: 40px;
    border-bottom:1px solid #efefef;
  }

  .center-title{
    margin-bottom: 15px;
    padding-bottom: 5px;
    font-size: 16px;
    border-bottom: 1px solid #efefef;
  }

  .project-list{
    li{
      width: 25%;
      height: 200px;
      overflow: hidden;
      position: relative;
      border:1px solid #fff;
      img{
        width: 100%;
        height: 100%;
      }
      span{
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 3px;
        background: rgba(16, 117, 184, 0.774);
        color: #fff;
      }
    }
  }



  .detail{
    .top{
      text-align: center;
      padding-top: 40px;

      .title{
        font-size: 26px;
      }
      .desc{
        font-size: 17px;
      }
    }
    .content{
      margin-top: 40px;
      display: flex;
      justify-content: space-evenly;
    }
    li{
      text-align: center;
      .img{
        width: 180px;
        height: 180px;
        background: #ccc;
        border-radius: 50%;
        line-height: 180px;
      }
    }
    .el-card{
      img:hover{
        opacity: 0.6;
        cursor: pointer;
      }
    }
  }
</style>
