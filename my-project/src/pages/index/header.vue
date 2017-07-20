<template>
  <header class="mp-header">
    <a class="mp-header-left"><</a>
    <div class="mp-header-title">
      <router-link to="/list">
        <span class="mp-single-line">输入城市/景点/游玩主题</span>
      </router-link>
    </div>
    <div class="mp-header-right">
        <span class="mp-nav-city">北京</span>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  .mp-header {
    position: relative;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    width: 100%;
    height: .88rem;
    background: #00bcd4;
    text-align: center;
    color: #fff;
  }
  .mp-header-left {
    display: inline-block;
    width: .4rem;
    line-height: .88rem;
    padding: 0 .2rem;
    color: #fff;
    font-size: .36rem;
    text-align: left;
  }
  .mp-header-title {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    box-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    position: relative;
    height: .6rem;
    margin: .14rem 0;
    background: #fff;
    line-height: .6rem;
    border-radius: .06rem;
  }
  .mp-header .mp-single-line {
    display: inline-block;
    overflow: hidden;
    position: absolute;
    left: .3rem;
    top: 0;
    width: 3.6rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #cccccc;
  }
  .mp-nav-city {
    padding: 0 .22rem;
    line-height: .88rem;
    color: #fff;
  }
</style>
