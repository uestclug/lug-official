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

if (process.env.VUE_APP_DEV_MODE === 'frontend' ||
    process.env.VUE_APP_DEPLOYMENT_MODE === 'github') {
  Vue.prototype.$DevMode = true;
  Vue.prototype.$DevData = DevData;
} else {
  Vue.prototype.$DevMode = false;
  Vue.prototype.$DevData = null;
}

Vue.config.productionTip = false;

// 设置 axios 的 request 拦截
// const axiosPromiseArr = [];
axios.interceptors.request.use(
    (config) => {
      // 设置 cancel token
      // config.cancelToken = new axios.CancelToken(function(cancel) {
      //   axiosPromiseArr.push({cancel});
      // });
      // 设置请求头
      // config.headers.Authorization = localStorage.getItem('token');
      // 设置请求体
      config.data = {
        ...config.data,
        githubId: localStorage.getItem('githubId'),
        token: localStorage.getItem('token'),
        tokenAdmin: localStorage.getItem('tokenAdmin'),
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
      // if (axios.isCancel(error)) {
      //   console.log('Cancel request.');
      // }

      if (error.response) {
        switch (error.response.status) {
          // 如果响应错误码为 401，则清除登录账户信息，回到 login 页面
          case 401:
            Utils.removeLocalStorageUserInfo();
            router.push({name: 'login'});
        }
      }
      return Promise.reject(error.response.data);
    },
);

// 设置 router 的 axios 取消拦截
// router.beforeEach((to, from, next) => {
//   axiosPromiseArr.forEach((ele, index) => {
//     ele.cancel();
//     delete axiosPromiseArr[index];
//   });
// });

Vue.use(VueAxios, axios);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
