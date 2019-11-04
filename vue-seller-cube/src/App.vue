<template>
  <div id="app">
    <!-- header -->
    <cHeader :sellerObj='sellerObj'></cHeader>
    <div class="tab border-1px">
      <router-link to="/goods" class="tab-item">商品</router-link>
      <router-link to="/seller" class="tab-item">评价</router-link>
      <router-link to="/ratings" class="tab-item">商家</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/header/c-header"
import {seller} from "@/api/app"
export default {
  name: 'app',
  components:{
    cHeader
  },
  data(){
    return {
      sellerObj: {}
    }
  },
  mounted(){
    this.$router.push({
      path:'/goods'
    });
    this.sellerFun();
  },
  methods:{
    async sellerFun(){
      let res = await seller();
      this.sellerObj  = res.data;
    }
  }
}
</script>
<style lang="less">
@import "./common/less/mixin.less";
#app{
  .link-active{
      color: rgb(240,20,20);
    }
  .tab{
    display: flex;
    height: 80px;
    line-height: 80px;
    .border-1px(rgba(7,17,27,0.1));
    .tab-item{
      flex:1;
      text-align: center;
      font-size: 28px;
    }
    
  }
}
</style>
