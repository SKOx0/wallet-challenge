
const path = require('path');

//Módulo base responsável por relacionar configurações comuns entre dev e prod
const webPackBaseConfigurator = (opt) => ({
  mode: opt.mode,
  entry: opt.entry,
  output: { path: path.resolve(process.cwd(), 'dist'), publicPath: '/' }
});

module.exports = webPackBaseConfigurator;
