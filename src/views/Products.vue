<!--
 * @Author: your name
 * @Date: 2020-04-10 11:22:32
 * @LastEditTime: 2020-04-13 23:30:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tt/web/src/views/Messages.vue
 -->
<template>
  <div class="product">
    <div class="banner" :style="bg">
      <!-- <img :src="banner" alt=""> -->
    </div>
    <section class="content">
      <!-- <ul class="menu-top flex">
        <li v-for="item in 5" :key="item">
          <div class="item-top" :style="bg1">
            
          </div>
          <p class="title">网站服务</p>
        </li>
      </ul> -->

      <div class="products">
        <h2> 产品中心</h2>
        <ul class=" flex">
        <li v-for="product in 8" :key="product">
          <div class="produt-top">
            <img :src="test" alt="">
          </div>
          <p>网站服务</p>
        </li>
      </ul>
      <div class="pagination">
        <el-pagination
        background
        layout="prev, pager, next"
        :total="300">
        </el-pagination>
      </div>
      </div>
      
    </section>
  </div>
</template>
<script>
import contentslot from '@/components/Content.vue';
import test from "@/assets/images/1.jpg"

export default {
  name:'news',
  data(){
    return{
      test,
      bg: {
        backgroundImage: "url(" + require("../assets/images/about.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      bg1: {
        backgroundImage: "url(" + require("../assets/images/logo-9.png") + ")",
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
  .product{
    background: #fafafa;
  }
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
    margin:0 143px;
    // padding: 40px 0;
  }
  .article{
    flex: 1;
  }
  .menu-top{
    li{
      text-align: center;
      flex: 1;
      padding-top:20px ;
      border-radius: 5px;
    }
    p{
      font-size: 18px;
      color: #666;
      font-weight: 400;
    }
    li:hover{
      background: #00aaa7;
      cursor: pointer;
      color: #fff !important;
    }
    li p:hover{
      color: #fff;
    }
    .item-top{
      margin: 10px;
      width: 80px;
      height: 80px;
      border-radius:50% ;
      overflow: hidden;
      margin: auto;
    }
  }

  .products{
    width: 100%;
    overflow: hidden;
    h2{
      text-align: center;
    }
    ul{
      flex-wrap: wrap;
    }
    li{
      width: 25%;
      text-align: center;
      .product-top{
        width:100%;  
      }

      img{
        width: 100%;
        height: 100%;
      }
      img:hover{
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }
  .pagination{
    text-align: center;
    margin-bottom: 40px;
  }
</style>
