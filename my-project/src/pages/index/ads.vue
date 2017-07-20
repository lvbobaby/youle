<template>
    <div class="ads border-topbottme">
      <div class="ads-item border-right"  v-for="(item, index) in adsInfo" :key="index + '_imgads'">
        <img class="ads-img"" :src="item.imgUrl">
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        adsInfo: [
          {
              imgUrl: "https://imgs.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png",
              link: ""
          },
          {
            imgUrl: "https://imgs.qunarzz.com/piao/fusion/1608/b6/5f3ce97effee602.png",
            link: ""
          }
        ]
      }
    }
  }
</script>

<style scoped>
    .ads {
      display: flex;
      background: #fff;
      margin-top: .2rem;
    }
    .ads-item {
      flex: 1;
      height: 0;
      padding-bottom: 21.5625%;
      overflow: hidden;
    }
  .ads-img {
    width: 100%;
  }
</style>
