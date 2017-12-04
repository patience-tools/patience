const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//const CleanWebpackPlugin = require('clean-webpack-plugin')

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
  if (true) {
    return ExtractTextPlugin.extract({
      use: loaders,
      fallback: 'vue-style-loader'
    })
  } else {
    return [ 'vue-style-loader' ].concat(loaders)
  }
}

module.exports = function (env = {}) {
  if (env.production)
    process.env.NODE_ENV = 'production'

  return {
    entry: {
      'follower-report': './src/app.js'
    },
    output: {
      path: path.resolve(__dirname, 'build/'),
      filename: env.produciton ? 'assets/js/[name].min.js' : 'assets/js/[name].js'
    },
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: makeStyleLoader(),
            scss: makeStyleLoader('sass'),
            sass: makeStyleLoader('sass')
          }
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: makeStyleLoader()
      }, {
        test: /\.scss$/,
        use: makeStyleLoader('sass')
      }, {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options: {
          path: path.resolve(__dirname, './'),
          name: 'assets/images/[name].[ext]',
          publicPath: '../../'
        }
      }, {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          path: path.resolve(__dirname, './'),
          name: 'assets/fonts/[name].[ext]',
          publicPath: '../../'
        }
      }]
    },
    resolve: {
      extensions: [ '.js', '.vue', '.json', '.scss' ],
      alias: {
        'vue$': 'vue/dist/vue.common.js',
        'home': path.resolve(__dirname, '..')
      }
    },
    // devtool: '#cheap-module-eval-source-map',
    plugins: env.production ? [
      //new CleanWebpackPlugin([ 'assets' ], { root: path.resolve(__dirname, '../'), verbose: true }),
      new ExtractTextPlugin({
        filename: './assets/css/[name].min.css'
      }),
      // short-circuits all Vue.js warning code
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      // minify with dead-code elimination
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          comparisons: false // don't optimize comparisons. prevents mapbox gl from breaking in production mode
        }
      }),
      // Webpack 1 only - optimize module ids by occurrence count
      new webpack.optimize.OccurrenceOrderPlugin()
    ] : [
      //new CleanWebpackPlugin([ 'assets' ], { root: path.resolve(__dirname, '../'), verbose: true }),
      new ExtractTextPlugin({
        filename: './assets/css/[name].min.css'
      })
    ]
  }
}
