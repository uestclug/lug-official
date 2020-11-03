import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa', // [Font Awsome 5](https://fontawesome.com/icons?d=gallery&m=free)
  },
  theme: {
    themes: {
      light: {
        primary: '#5cbdb9', // Blue Greeny
        secondary: '#212121', // grey darken-4
        accent: '#ed738d', // Pinky Red
        error: '#e22828',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#ef6602',
      },
    },
  },
});
