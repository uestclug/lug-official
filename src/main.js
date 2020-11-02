import Vue from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import router from '@/router/index';

import Bus from '@/Bus';
import Common from '@/common/common';
import DevData from '@/common/devData';
import Utils from '@/utils/index';

import '@/common/main.css'; // 自定义 css 文件

Vue.prototype.$Bus = Bus;
Vue.prototype.$Common = Common; // 全局变量
Vue.prototype.$Utils = Utils; // 通用 js 函数

if (process.env.VUE_APP_DEV_MODE === 'frontend') {
  Vue.prototype.$DevMode = true;
  Vue.prototype.$DevData = DevData;
} else {
  Vue.prototype.$DevMode = false;
  Vue.prototype.$DevData = null;
}

Vue.config.productionTip = false;

Vue.use(VueAxios, Axios);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
