<template>
  <div class="home">
    <div class="my-swiper">
      <swiper ref="swiperTop" v-if="banners.length>1"  id="bigBanner" :options="swiperOptions">
        <swiper-slide  v-for="banner in bannerImgs" :key="banner">
          <!-- <video :src="banner" controls></video> -->
          <img  class="big-item" :src="banner" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- <swiper :options="swiperOptionThumbs" id="thumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide  v-for="banner in bannerImgs" :key="banner">
          <img class="small-item" :src="banner" />
        </swiper-slide>
      </swiper> -->
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
      service: [1, 2, 3, 4],
      news: [1, 2, 3],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        observer: true,
        observeParents: true,
        autoplay: true,
        // autoplay: {
        //   // delay: 3000,
        //   // disableOnInteraction: false
        // },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      },
      // swiperOptionThumbs: {
      //   spaceBetween: 10,
      //   autoplay: false,
      //   // centeredSlides: true,
      //   slidesPerView: 4,
      //   // touchRatio: 0.2,
      //   slideToClickedSlide: true,
      //   watchSlidesVisibility: true
      // }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted () {
    // this.$nextTick(async () => {
    //   const swiperTop = await this.$refs.swiperTop.$swiper
    //   const swiperThumbs = await this.$refs.swiperThumbs.$swiper
    //   console.log(swiperTop, swiperThumbs, this.$refs.swiperTop)
    //   swiperTop.controller.control = swiperThumbs
    //   swiperThumbs.controller.control = swiperTop
    // })
  }

}
</script>

<style lang="less" scopeded>
  .home{
    width:100%;
  }
  .my-swiper{
    position: relative;
  }
  #bigBanner {
    height: calc(100vh - 80px);
    min-height: 700px;

    .swiper-slide{
      height: 100%;
    }
    .big-item{
      width: 100%;
      height: 100%;
    }
    video{
      width: 100%;
      height: 100%;
    }
  }
  #thumbs{
    position: absolute;
    bottom: 20px;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    .small-item{
      width: 200px;
      height: 100px;
    }
    .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    .swiper-slide-active {
      opacity: 1;
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
