'use strict'

module.exports = {
  configs: {
    recommended: require('./config')
  },
  rules: {
    'jsx-uses-vars': require('./rules/jsx-uses-vars')
  }
}
