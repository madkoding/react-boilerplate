const { defaults } = require('jest-config')

console.log(defaults.moduleFileExtensions)

module.exports = {
  verbose: true,
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'js',
    'jsx',
    'ts',
    'tsx'
  ],
  moduleNameMapper: {
    '@(.*)': '<rootDir>/src/$1'
  }
}
