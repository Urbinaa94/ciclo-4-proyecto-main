const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./src/views/LoguedHome.css",
    }),
],
  entry: {
    'index': './src/index.js',
  },
  output: {
    filename: 'LoguedHome.jsx',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'source-map-loader'},

      // Relevant config for MiniCssExtractPlugin:
      // (the order of `use` is important)
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};