const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const rules = [
  {
    test: /\.(css|scss)$/i,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',

      { loader: 'postcss-loader' },
    ],
  },
  {
    test: /\.(jsx|js|ts|tsx)$/i,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    use: [
      'url-loader',
      {
        loader: 'file-loader',
      },
    ],
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
  {
    test: /\.(csv|tsv)$/i,
    use: ['csv-loader'],
  },
  {
    test: /\.xml$/i,
    use: ['xml-loader'],
  },
];

module.exports = {
  target: 'web',
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[contenthash].bundle.js',
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    server: 'http',
    liveReload: true,
    compress: true,
    headers: {
      'X-Custom-Author': 'saddam',
    },
    client: {
      logging: 'log',
    },
    hot: false,
    historyApiFallback: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      title: 'react boilerplate',
      template: './public/index.html',
    }),
  ],
  module: { rules },
};
