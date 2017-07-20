import Vue from 'vue'
//APP.vue是程序的入口大组件
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource';
import FastClick from 'fastclick'


FastClick.attach(document.body);//避免300ms延迟，但是有可能出现点透事件

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);

new Vue({
  el: '#app',
  router, //router: router
  template: '<App/>',
  components: { App }
});
