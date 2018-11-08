import { variables } from '../definitions'

const env = {
  PRODUCTION: JSON.stringify(false),
  DEVELOPMENT: JSON.stringify(true),
  FRONTEND_VERSION: JSON.stringify(variables.version)
}

export default env
