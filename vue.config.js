/* eslint-disable quote-props */
module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("md-text-loader")
      .loader("md-text-loader")
      .end();
  },
  // devServer: {
  //   proxy: {
  //     '': {
  //       target: 'http://127.0.0.1:3000',
  //       changeOrigin: true,
  //       pathRewrite: {'^': ''},
  //     },
  //   },
  // },
  publicPath:
    process.env.NODE_ENV === "production" &&
    process.env.VUE_APP_DEPLOYMENT_MODE !== "github"
      ? "/lug-official/"
      : "/",
  outputDir: process.env.VUE_APP_DEPLOYMENT_MODE !== "github" ? "dist" : "docs",
};
