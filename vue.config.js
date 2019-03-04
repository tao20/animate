const path = require('path');

//自定义文件的目录
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
        .set('assets',path.resolve(__dirname, './src/assets'))
        .set('components', path.resolve(__dirname, './src/components'))
        .set('utils', path.resolve(__dirname, './src/utils'))
    },

//加入一个反向代理
    devServer: {
        proxy: {
          '/Recommend': {
            target: 'https://m.ac.qq.com',
            changeOrigin: true
          }
        }
      }
}

