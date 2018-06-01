const path = require('path');
const webpackBase = require('./base');

const webpackProd = webpackBase({
  mode: 'production',
  entry: [
    path.join(process.cwd(), 'src/main.js')
  ]
});

module.exports = webpackProd;
