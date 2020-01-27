// const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const baseconfig = require("base.config.js");

module.exports= webpackMerge(baseconfig,{
  devServer:{
    contentBase:"/dist",
    // keep monitor
    inline:true
  }
})