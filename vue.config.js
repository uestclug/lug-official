module.exports = {
  'transpileDependencies': [
    'vuetify',
  ],
  'css': {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/style/main.scss";
            @import "~@/style/media.scss";`,
      },
    },
  },
};
