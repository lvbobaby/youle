<template>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in data" :key="index + '_item_swiper_img'">
        <div class="imgSwiper">
          <img class="img-swiper" :src="item.imgUrl" alt="">
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data () {
      return {

        swiperOption: {
          autoplay: 3000,
          direction: 'horizontal',
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          loop: true
        }

      }
    },
    props: ["data"]
  }
</script>

<style scoped>
  .imgSwiper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
  }
  .img-swiper {
    width: 100%;
  }
</style>
