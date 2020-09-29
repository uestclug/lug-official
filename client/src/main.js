import Vue from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import router from '@/router/index';

import Bus from '@/Bus';
import Common from '@/common/index';

Vue.prototype.Bus = Bus;
Vue.prototype.Common = Common;

Vue.config.productionTip = false;

Vue.use(VueAxios, Axios);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
