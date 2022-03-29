const path = require("path");

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, './src')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/scss/common/_media.scss";
        `
      }
    }
  }
}