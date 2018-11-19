import webpack from 'webpack'
import BaseConfig from './webpack.config.base'

const DevelopmentConfig: webpack.Configuration = {
  ...BaseConfig,
  mode: 'development',
  devServer: {
    historyApiFallback: true
  }
}

export default DevelopmentConfig
