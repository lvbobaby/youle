<template>
    <div class="main">
        <index-header></index-header>
        <img-swiper :data="swiperInfo"></img-swiper>
        <icon-swiper :icons="iconInfo" :recommends="recommendInfo"></icon-swiper>
        <ads></ads>
    </div>
</template>

<script>

  import header from './header'
  import imgswiper from './imgswiper'
  import iconswiper from './iconswiper'
  import ads from './ads'
  import detect from '@/utils/detect'

  export default {
      created: function () {
        this.$http.get('/static/index.json').then(response => {
            console.log(response);
            this.swiperInfo = response.body.data.swiperInfo;
            this.iconInfo = response.body.data.iconInfo;
          this.recommendInfo = response.body.data.recommendInfo;
        }, response => {

        });
      },

    data () {
      return {
        swiperInfo: [],
        iconInfo: [],
        recommendInfo: []
      }
    },
    components: {
        "index-header": header,
        "img-swiper": imgswiper,
        "icon-swiper": iconswiper,
        "ads": ads
    }
  }
</script>

<style>
  .main {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
  }
</style>
