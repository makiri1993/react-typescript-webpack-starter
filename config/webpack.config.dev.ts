import webpack from 'webpack'
import BaseConfig from './webpack.config.base'

const DevelopmentConfig: webpack.Configuration = {
  ...BaseConfig,
  mode: 'development'
}

export default DevelopmentConfig
