const CopyPlugin = require('copy-webpack-plugin');

/*
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  entry: {
    main: './src/index.js',
  },
  builtins:{
    html: [
      {
        template: './index.html'
      }
    ]
  },
  module: {
    rules: [
      {
        test: /src\/.*\.js$/,
        type: 'jsx',
      },
    ],
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'public',
        to: '.',
      },
    ]),
  ],
};
