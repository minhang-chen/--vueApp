<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="table border-1px">
      <div class="table-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="table-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="table-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller" ></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import {urlParse} from './common/js/util.js'
  import header from './components/header/header.vue'

  const ERR_OK = 0

  export default{
      data() {
        return {
          seller: {
            id: (() => {
              let queryParam = urlParse()
              return queryParam.id
            })()
          }
        }
      },
      created() {
        this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
          response = response.body
          if (response.errno === ERR_OK) {
            this.seller = response.data
          }
        })
      },
      components: {
        'v-header': header
      }
  }
</script>

<style style="stylesheet/scss" lang="scss" >
  /*解决 1px*/
  @import "./common/sass/mixin.scss";

  .table{
    display: flex;
    height: 40px;
    line-height: 40px;
      @include border-1px(rgba(7,17,27,0.1));
    .table-item{
      flex: 1; 
      text-align: center;
      & > a{
        display: block;
        color:rgb(77,85,93);
        &.active{
          color:rgb(240,20,20);
        }
      }
    }
  }
</style>
