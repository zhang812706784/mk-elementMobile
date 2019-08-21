module.exports = {

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  // 它支持webPack-dev-server的所有选项
  devServer: {
    host: "192.168.1.6",
    port: 8888, // 端口号
    https: false, // https:{type:Boolean}
    open: true//配置自动启动浏览器
  }
 
}
