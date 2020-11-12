/* eslint-disable quote-props */
module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData: [
          //
        ],
      },
    },
  },
  devServer: {
    proxy: {
      '': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {'^': ''},
      },
    },
  },
  publicPath: process.env.VUE_APP_DEPLOYMENT_MODE !== 'github' ?
    '/nu-official/' :
    '/',
  outputDir: process.env.VUE_APP_DEPLOYMENT_MODE !== 'github' ?
    'dist' :
    'docs',
};
