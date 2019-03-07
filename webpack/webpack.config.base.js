const VueLoaderPlugin = require('vue-loader/lib/plugin');

/** @type {import('webpack').Configuration} */
const baseConfig = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = baseConfig;
