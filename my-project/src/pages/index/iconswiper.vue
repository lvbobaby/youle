<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(page, index) in pages" :key="index + '_item_swiper'">
        <div class="icon-contanier">
          <div class="icon-swiper" v-for="item in page">
            <img :src="item.imgUrl" class="icon-img">
            <p class="title">{{item.title}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination icon-pagination"  slot="pagination"></div>
    </swiper>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        swiperOption: {
          autoplay: false,
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
      }
    },

    computed: {
      pages: function () {
        var pages = [];
        for( var i=0; i<this.icons.length; i++ ) {
            var page = Math.floor( i/8 );
            if(!pages[page]) {
                pages[page] = [];
            }
          pages[page].push(this.icons[i]);
        }
        return pages;
      }
    },
    props: ["icons", "recommends"]
  }
</script>

<style scoped>
  .icon-contanier {
    overflow: hidden;
    padding-bottom: .4rem;
    height: 2.88rem;
    background: #fff;
  }
  .icon-swiper {
    overflow: hidden;
    width: 25%;
    float: left;
    padding-top: .3rem;
  }
  .icon-img {
    width: .66rem;
    display: block;
    margin: 0 auto;
  }
  .title {
    text-align: center;
    color: #212121;
    font-size: .28rem;
    margin-top: .2rem;
  }
  .icon-pagination {
    bottom: .1rem;
  }
  .recommend {
    display: flex;
    background: #fff;
  }
  .recommend-item {
    flex: 1;
    line-height: 1rem;
    text-align: center;
    border-top: .02rem solid #ccc;
    border-bottom: .02rem solid #ccc;
  }
</style>
