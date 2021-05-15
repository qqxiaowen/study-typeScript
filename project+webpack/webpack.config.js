const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  // mode: 'development',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: { // 编译后使用的环境设置
      arrowFunction: false, // 不适用箭头函数
    }
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [ // 从下往上加载
          { // 指定加载器
            loader: 'babel-loader',
            options: {
              presets:[ // 设置预定义环境
                [
                  '@babel/preset-env', // 指定环境的插件
                  {
                    targets: { // 要兼容的目标浏览器
                      'chrome': '58',
                      'ie': 11, 
                    },
                    'corejs': '3', // 指定corejs的版本
                    'useBuiltIns': 'usage', // 使用corejs的方式 usage 表示按需加载
                  }
                ]
              ]
            }
          },
          'ts-loader',
        ],
        exclude: '/node_modules/'
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      // title: '这是自定义的title'
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}