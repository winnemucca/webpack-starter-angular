const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ngToolsWebpack = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

entry: {
    'app': './src/main.ts'
},
output: {
    filename: 'app.js'
}