const path = require('path');
const htmlPlugin = require('@rspack/plugin-html').default;
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isProd = process.env.NODE_ENV === 'production';
const mode = isProd ? 'production' : 'development';
const ana = process.env.ANA === 'true';
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  mode,
  context: __dirname,
  entry: { main: './src/index.tsx' },
  devServer: {
    port: 5555,
  },
  plugins:
    [
      new htmlPlugin({
        template: './index.html',
        publicPath: '/',
      }),
    ],
  module: {
    rules:
      [
        {
          test: /\.less$/,
          use: [{ loader: require.resolve('less-loader') }],
          type: 'css'
        },
        {
          test: /module\.less$/,
          use: [{ loader: require.resolve('less-loader') }],
          type: 'css/module',  // native css module
        },
        {
          test: /\.svg$/,
          use:
            [
              {
                loader: '@svgr/webpack',
              },
            ],
          type: 'javascript/auto',
        },
      ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    publicPath: '/',
  },
  infrastructureLogging: {
    debug: false,
  },
  stats: {
    all: false,
    errors: true,
    warnings: false,
  },
};
