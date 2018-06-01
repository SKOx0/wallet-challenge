const path = require('path');
const webpackBase = require('./base');

const webpackDev = webpackBase({
  mode: 'development',
  entry: [
    path.join(process.cwd(), 'src/main.js')
  ]
});

module.exports = webpackDev;
