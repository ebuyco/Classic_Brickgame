// next.config.js
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withFonts({
  exportTrailingSlash: true,
  cssModules: true,
  parser: true,
  config: {
    ctx: {
      theme: JSON.stringify(process.env.REACT_APP_THEME)
    }
  },
  devIndicators: {
    autoPrerender: true,
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {

  },
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|otf)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: `/_next/static/images/`,
          outputPath: `${options.isServer ? '../' : ''}static/images/`,
          name: '[name]-[hash].[ext]'
        }
      }
    })
    return config
  }
},

);
