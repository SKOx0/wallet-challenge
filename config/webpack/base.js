
const webpack = require('webpack');
const path = require('path');
// Módulo base responsável por relacionar configurações comuns entre dev e prod
const webPackBaseConfigurator = (opt) => ({
  mode: opt.mode,
  entry: opt.entry,
  target: 'web',
  devtool: opt.devtool,
  output: Object.assign({ path: path.resolve(process.cwd(), 'dist'), publicPath: '/' }, opt.output),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader'
        }],
      },
      {
        // Responsável por compilar estilos de terceiro
        test: /\.(css|sass|scss)$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // Responsável por carregar fonts
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
    ]
  },
  plugins: [...opt.plugins, ...[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: [
      '.js',
      '.jsx'
    ],
    mainFields: [
      'browser',
      'main',
      'jsnext:main'
    ]
  },
  performance: opt.performance || {},
  optimization: {
    namedModules: true,
    splitChunks: {
      name: 'vendor',
      minChunks: 2
    }
  }
});

module.exports = webPackBaseConfigurator;
