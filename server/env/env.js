
const env = process.env.NODE_ENV === 'development' ? require('./development') : require('./production');

module.exports = env;
