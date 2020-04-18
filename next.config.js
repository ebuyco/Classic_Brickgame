// next.config.js
const withFonts = require('next-fonts');

module.exports = withFonts({
  exportTrailingSlash: true,
  parser: true,
  config: {
    ctx: {
      theme: JSON.stringify(process.env.REACT_APP_THEME)
    }
  },
  devIndicators: {
    autoPrerender: true,
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
