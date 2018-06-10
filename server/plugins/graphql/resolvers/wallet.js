const bech32 = require('bech32');

const getCoinHash = (coin, userInfo) => {
  const words = bech32.toWords(Buffer.from(userInfo, 'utf8'));
  return bech32.encode(coin, words);
};

module.exports = { getCoinHash };
