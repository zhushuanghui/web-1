<!--
 * @Author: your name
 * @Date: 2020-04-10 11:22:32
 * @LastEditTime: 2020-04-12 16:40:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tt/web/src/views/Messages.vue
 -->

<template>
  <div class="contact">
    <div class="banner" :style="bg">
      <!-- <img :src="banner" alt=""> -->
    </div>
    <section class="content">
      <contentslot>
        <span slot="title">联系我们</span>
        <article slot="article">
          <div>
            <p>公司名称：潍坊京泰新型建材有限公司</p>
            <p>技术支持：亿云网络</p>
            <p>联系手机：13931140805 15075171310</p>
            <p>联系Q  Q：2212322343 2050001400</p>
            <p>联系邮箱：2212322343@qq.com 2050001400@qq.com</p>
          </div>
          <div class="map" :style="map">
        
          </div>
        </article>
      </contentslot>
    </section>
  </div>
</template>
<script>
import contentslot from '@/components/Content.vue';

export default {
  name:'contact',
  data(){
    return{
      bg: {
        backgroundImage: "url(" + require("../assets/images/about.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      map: {
        backgroundImage: "url(" + require("../assets/images/map-7.png") + ")",
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
  .map{
    width: 100%;
    height: 300px;
  }
  .article{
    flex: 1;
  }
</style>
