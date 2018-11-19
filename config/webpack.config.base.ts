import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import { paths, resolver } from './definitions'
import env from './environment/dev.env'

const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')

const BaseConfig: webpack.Configuration = {
  devtool: 'inline-source-map',

  entry: [
    require.resolve('./polyfills'),
    require.resolve('react-dev-utils/webpackHotDevClient'),
    paths.reactIndex
  ],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(ts|tsx)$/,
            use: [
              {
                loader: require.resolve('ts-loader'),
                options: {
                  configFile: resolve(paths.tsconfig)
                }
              }
            ]
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: resolver.extensions,
    alias: resolver.alias,
    plugins: [new ModuleScopePlugin(paths.appSrc, [paths.packageJson])]
  },

  plugins: [
    // Makes some environment variables available in index.html.
    // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    // In development, this will be an empty string.
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.htmlIndex,
      templateParameters: {
        project: { name: 'Martin Kireew' }
      }
    }),
    // new InterpolateHtmlPlugin(env.raw),
    // Add module names to factory functions so they appear in browser profiler.
    new webpack.NamedModulesPlugin(),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === "development") { ... }. See `./env.js`.
    new webpack.DefinePlugin(env),
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin()
    // Watcher doesn"t work well if you mistype casing in a path so we use
    // a plugin that prints an error when you attempt to do this.
    // See https://github.com/facebookincubator/create-react-app/issues/240
    // new CaseSensitivePathsPlugin(),
  ]
}

export default BaseConfig
