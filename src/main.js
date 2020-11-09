import Vue from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
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

if (process.env.VUE_APP_DEV_MODE === 'frontend') {
  Vue.prototype.$DevMode = true;
  Vue.prototype.$DevData = DevData;
} else {
  Vue.prototype.$DevMode = false;
  Vue.prototype.$DevData = null;
}

Vue.config.productionTip = false;

// 设置 axios 的 request 拦截
axios.interceptors.request.use(
    (config) => {
      // 设置请求头
      // config.headers.Authorization = localStorage.getItem('token');
      // 设置请求体
      config.data = {
        ...config.data,
        userId: localStorage.getItem('userId'),
        token: localStorage.getItem('token'),
        tokenAdmin: localStorage.getItem('tokenAdmin'),
        githubAccessToken: localStorage.getItem('githubAccessToken'),
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
);

// 设置 axios 的 response 拦截
axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          // 如果响应错误码为 401，则清除登录账户信息，回到 login 页面
          case 401:
            Utils.removeLocalStorageUserInfo();
            router.push({
              name: 'login',
            });
        }
      }
      return Promise.reject(error.response.data);
    },
);

Vue.use(VueAxios, axios);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
