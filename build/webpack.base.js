'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require('./config')
const _ = require('./utils')

function makeStyleLoader (type) {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: true,
      importLoaders: 1,
      name: 'styles/[name].[ext]'
    }
  }
  const loaders = [ cssLoader ]
  loaders.push({ loader: 'postcss-loader', options: {
    config: {
      path: './postcss.config.js'
    }
  }})
  if (type)
    loaders.push(type + '-loader')

  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader'
  })
}

module.exports = {
  entry: {
    client: './client/index.js'
  },
  output: {
    path: _.outputPath,
    filename: '[name].js',
    publicPath: config.publicPath,
    // Point sourcemap entries to original disk location
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath),
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },
  resolve: {
    extensions: [ '.js', '.vue', '.json', '.scss' ],
    alias: {
      root: path.join(__dirname, '../client'),
      components: path.join(__dirname, '../client/components')
    },
    modules: [
      _.cwd('node_modules'),
      // this meanse you can get rid of dot hell
      // for example import 'components/Foo' instead of import '../../components/Foo'
      _.cwd('client')
    ]
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader'/*,
      options: {
        loaders: {
          css: makeStyleLoader(),
          scss: makeStyleLoader('sass'),
          sass: makeStyleLoader('sass')
        }
      }*/
    }, {
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    },/* {
      test: /\.css$/,
      use: makeStyleLoader()
    }, {
      test: /\.scss$/,
      use: makeStyleLoader('sass')
    },*/ {
      test: /\.(ico|jpg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.svg$/,
      loader: 'raw-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      template: path.resolve(__dirname, 'index.html'),
      filename: _.outputIndexPath
    }),
    new webpack.LoaderOptionsPlugin(_.loadersOptions()),
    new CopyWebpackPlugin([
      {
        from: _.cwd('./static'),
        // to the root of dist path
        to: './'
      }
    ])
  ],
  target: _.target
}

