const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry:"./src/js/main.js",
  output:{
    // resolve used to join two function
    // __dirname save path of current file
    path:path.resolve(__dirname, "dist"),
    filename:"bundle.js",
    // when picture over limit
    // publicPath: "dist/"
  },
  module: {
    rules: [
      {
        // file which prefix is .css
        test: /\.css$/i,
        // css-loader just load, style-loader can analyze css to html(add template to DOM)
        // precedence follow right to left
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // when picture below limit, picture will compile to base64 string
              // when picture over limit, we will need file-loader help us compile
              // when file-loader is loading, picture will transfer to dist doc. we need set publicPath to modify the path
              limit: 8192,
              name: "img/[name].[hash:8].[ext]",
            },
          },
          // {
          //   loader: 'file-loader',
          // }
        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif|jpeg)$/i,
      //   use: [
      //     {
      //     },
      //   ],
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test:/\.vue$/,
        use:["vue-loader"]
      }
    ],
  },
  resolve:{
    alias:{
      "vue$":"vue/dist/vue.esm.js"
    }
  },
  plugins:[
      new webpack.BannerPlugin("Just exercise,So MIT license"),
      new htmlWebpackPlugin({
        template:"vuefile.html"
      }),
      //npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
      new uglifyjsWebpackPlugin()
  ],
}