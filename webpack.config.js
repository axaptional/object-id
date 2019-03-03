const TerserPlugin = require('terser-webpack-plugin');
const TSDeclarationPlugin = require('ts-declaration-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/object-id.ts',
  output: {
    filename: 'object-id.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new TSDeclarationPlugin({
      name: './object-id.d.ts'
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          warnings: false,
          ecma: 6
        }
      })
    ]
  }
};
