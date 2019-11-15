const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const data = require("./data.json");
const seller = data.seller;
const goods = data.goods;
const ratings = data.ratings;
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
    before(app) {
      app.get('/api/seller', (req, res) => {
           res.json({              
               errno: 0,   // 这里是你的json内容
               data: seller
           })
       });
       app.get('/api/goods', (req, res) => {
           res.json({              
               errno: 0,   // 这里是你的json内容
               data: goods
           })
       });
       app.get('/api/ratings', (req, res) => {
        res.json({              
            errno: 0,   // 这里是你的json内容
            data: ratings
        })
      });
    },
    host: "127.0.0.1",
    port: 8888, // 端口号
    https: false, // https:{type:Boolean}
    open: false,//配置自动启动浏览器
  },
  // 起别名
  chainWebpack: config => {
    config.resolve.alias
     .set('@', resolve('src'))
   }
 
}
