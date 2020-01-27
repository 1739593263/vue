const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const webpackMerge = require("webpack-merge");
const baseconfig = require("./base.config.js")

module.exports = webpackMerge(baseconfig,{
  plugins:[
    new uglifyjsWebpackPlugin()
  ]
});