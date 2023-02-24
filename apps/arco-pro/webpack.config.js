const path = require('path');
const htmlPlugin = require('@rspack/plugin-html').default;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
    historyApiFallback:true
  },
  plugins: [
    new htmlPlugin({
      template: './index.html',
      publicPath: '/',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        },
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader', options: {
              modules: {
                auto: true
              }
            }
          },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.svg$/,
        use: [
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
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
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
    warnings: true,
  },
  experiments: {
    css: true,
  },
  
};
