var webpack = require('webpack'),
    webpackMerge = require('webpack-merge'),
    path = require('path'),
    nodeEnvironment = process.env.NODE_ENV,
    _config = require('./myconfig'),
    webpackConfig, defaultConfig;

// Webpack Config
//  - Have fun here
webpackConfig = {
  context: __dirname + '/src',
  entry: {
    vendor: './vendor.js',
    app: './index.js'
  },
  output: {
    path: './dist',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor'],
      minChunks: Infinity
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
  ],
  jscs: {
    // JSCS errors are displayed by default as warnings.
    // Set `emitErrors` to `true` to display them as errors.
    emitErrors: false,

    // JSCS errors do not interrupt the compilation.
    // Set `failOnHint` to `true` if you want any file with
    // JSCS errors to fail.
    failOnHint: false
  },
  module: {
    loaders: [
      // JS
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loaders: ['ng-annotate', 'babel-loader?presets=es2015']
      },

      // CSS
      {
        test: /\.s?css$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'style!css!sass'
      },

      // HTML
      {
        test: /\.html$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loaders: ['html-loader']
      },

      // Images
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?mimetype=image/png'
      }
    ]
  }
};

// Default Webpack Config
defaultConfig = {
  devtool: 'cheap-module-eval-source-map',
  cache: true,
  debug: true,
  output: {
    filename: 'bmes-app-[name].bundle.js',
    sourceMapFilename: 'bmes-app-[name].map',
    chunkFilename: 'bmes-app-[id].chunk.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      // make ENVIRONMENT available to the app
      ENVIRONMENT: JSON.stringify(nodeEnvironment)
    })
  ],
  module: {
    preloaders: [
      // run JSCS first
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loaders: ['jscs-loader']
      }
    ],
    noParse: []
  },
  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.js']
  },
  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    port: _config.port
  },
  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  }
};

// Environment specific configs
switch (nodeEnvironment) {
  case 'production':
    break;
  case 'test':
    break;
  case 'development':
    break;
  default:
    console.warn('Unknown or Undefigned Node Environment. Please refer to package.json for available build commands.');
}

module.exports = webpackMerge(defaultConfig, webpackConfig);