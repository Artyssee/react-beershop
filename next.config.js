const sass = require('@zeit/next-sass');
const { withPlugins } = require('next-compose-plugins');

module.exports = withPlugins([
  [sass, {
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: '[path]___[local]___[hash:base64:5]'
    }
  }
  ]
]);
