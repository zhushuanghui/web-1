<!--
 * @Author: your name
 * @Date: 2020-04-10 15:31:45
 * @LastEditTime: 2020-04-10 19:33:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /tt/web/src/views/Culture.vue
 -->
<template>
  <div class="culture">
    <div class="banner" :style="bg">
      <!-- <img :src="banner" alt=""> -->
    </div>
    <section class="content">
      <contentslot>
        <span slot="title">企业文化</span>
        <article slot="article">
          this is 企业文化
        </article>
      </contentslot>
    </section>
  </div>
</template>
<script>
import contentslot from '@/components/Content.vue'
export default {
  name:'culture',
  data(){
    return{
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
</style>
