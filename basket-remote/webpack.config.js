const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    port: 3002
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'basket',
      filename: 'remoteEntry.js',
      exposes: {
        './Basket': './src/components/Basket.tsx'
      },
      shared: {
        react: {
          singleton: true,
          eager: true
        },
        'react-dom': {
          singleton: true,
          eager: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
