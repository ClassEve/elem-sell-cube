const appData = require('./data.json')

const { seller, goods, ratings } = appData

module.exports = {
  devServer: {
    // 模拟数据
    before(app) {
      app.get('/api/seller', function(req, res){
        res.json({
          errno: 0,
          data: seller
        })
      })

      app.get('/api/goods', function(req, res){
        res.json({
          errno: 0,
          data: goods
        })
      })

      app.get('/api/ratings', function(req, res){
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  },
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
  }
}
