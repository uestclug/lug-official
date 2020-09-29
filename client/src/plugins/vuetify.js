import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5cbdb9', // Blue Greeny
        secondary: '#ebf6f5', // Teeny Greeny
        accent: '#fbe3e8', // Pinky
      },
    },
  },
});
