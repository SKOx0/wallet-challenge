const axios = require('axios');
const env = require('../../../env/env');
const { round } = require('../../../helpers/decimal');

const getBitcoinPrice = async () => {
  const result = await axios.get(env.bitcoinApi);

  const model = { buy: null, sell: null };

  if (result.status !== 200) { return model; }

  const { buy, sell } = result.data.ticker;

  model.buy = round(buy, 4);
  model.sell = round(sell, 4);

  return model;
};

module.exports = { getBitcoinPrice };
