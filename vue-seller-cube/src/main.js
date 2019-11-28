import Vue from 'vue'
import {router} from '@/router'
import './cube-ui'
import App from './App.vue'

import "./common/css/reset.css";
import "./common/less/index.less";
// better-scroll官网地址：https://ustbhuangyi.github.io/better-scroll/#/examples/vertical-scroll
import BScroll from 'better-scroll';
Vue.prototype.bScroll = BScroll;

import data from '@/data.js';
Vue.prototype.tdata = data;

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
