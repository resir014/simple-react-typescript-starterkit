// tslint:disable:no-require-imports

import * as path from 'path'
import * as webpack from 'webpack'

import { CheckerPlugin } from 'awesome-typescript-loader'

// Use require() imports since we have no typings for these files.
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV || 'development'
const __DEV__ = env === 'development'
const __TEST__ = env === 'test'
const __PROD__ = env === 'production'

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'dist')
const APPLICATION_BASEPATH = path.join(__dirname, 'public')

// Modify this to change the dev server port.
const DEV_SERVER_PORT = '8080'

// PostCSS configuration.
// Learn more about what it does here: http://postcss.org/
const postcssConfig: webpack.Loader = {
  loader: 'postcss-loader',
  options: {
    plugins: (loader: any) => [
      require('autoprefixer')({ browsers: ['last 2 versions'] }),
      require('cssnano')()
    ]
  }
}

const extractStyles = new ExtractTextPlugin({
  filename: 'assets/styles/[name].[contenthash].css',
  allChunks: true,
  disable: __DEV__
})

function getPlugins(): webpack.Plugin[] {
  const plugins: webpack.Plugin[] = [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env)
      }
    })
  ]

  if (__PROD__) {
    plugins.push(new CleanWebpackPlugin(['dist']))
    plugins.push(new CopyWebpackPlugin([
      {from: APPLICATION_BASEPATH, to: BUILD_DIR}
    ]))
    plugins.push(new webpack.optimize.CommonsChunkPlugin({ names: ['main'] }))
    plugins.push(new webpack.optimize.UglifyJsPlugin({}))
  }

  if (__DEV__) {
    plugins.push(new webpack.HotModuleReplacementPlugin()),
    plugins.push(new webpack.NamedModulesPlugin())
  }

  plugins.push(extractStyles)

  plugins.push(new HtmlWebpackPlugin({
    template: path.join(APP_DIR, 'index.html'),
    inject: true,
    minify: {
      collapseWhitespace: true,
    },
  }))

  plugins.push(new CheckerPlugin())

  return plugins
}

const config: webpack.Configuration = {
  entry: {
    main: [
      path.join(APP_DIR, 'index.tsx')
    ].concat(__DEV__
      ? `webpack-hot-middleware/client.js?path=/__webpack_hmr`
      : [])
  },
  output: {
    path: BUILD_DIR,
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
    publicPath: '/'
  },
  devtool: __DEV__ ? 'source-map' : false,
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: [/(node_modules|bower_components)/],
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        use: extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            postcssConfig
          ]
        })
      },
      {
        test: /\.(sass|scss)$/,
        use: extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            postcssConfig,
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'assets/images/[name].[hash:8].[ext]'
        },
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: getPlugins(),
  devServer: {
    contentBase: APPLICATION_BASEPATH,
    compress: true,
    port: DEV_SERVER_PORT
  }
}


export default config
