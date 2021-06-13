const path = require('path')
const alias = {}
const basePath = './src'
const aliases = [
  'assets',
  'components',
  'hooks',
  'services',
  'utils',
  'views'
]
aliases.forEach(name => {
  alias[`@${name}`] = path.resolve(__dirname, `${basePath}/${name}`)
})

module.exports = {
  webpack: {
    alias
  }
}
