let config = {}

// Get environment from .env file
config.env = process.env.REACT_APP_ENV

// PROD
config.email = ''
config.password = ''

// LOCAL
if (config.env === 'LOCAL') {
  config.email = 'dummy@example.com'
  config.password = '123456'
}

// Display environment variables
console.info(['Environment: ' + config.env].join('\n'))

export default config
