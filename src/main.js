import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入 rem的js
import 'utils/rem';

//注册使用 swiper
import Swiper from 'vue-awesome-swiper';
Vue.use(Swiper);

new Vue({
  render: h => h(App),
}).$mount('#app')
