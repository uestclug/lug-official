import Vue from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router/index';

import Bus from '@/Bus';
import Common from '@/common/common';
import DevData from '@/common/devData';
import Utils from '@/utils/index';

import '@/styles/main.scss';
import '@/styles/media.scss';

Vue.prototype.$Bus = Bus;
Vue.prototype.$Common = Common; // 全局变量
Vue.prototype.$Utils = Utils; // 通用 js 函数

if (process.env.NODE_ENV === 'development') {
  Vue.prototype.$DevMode = true;
  Vue.prototype.$DevData = DevData;
} else {
  Vue.prototype.$DevMode = false;
  Vue.prototype.$DevData = null;
}

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
