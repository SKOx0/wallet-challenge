const axios = require('axios');
const dateformat = require('dateformat');
const env = require('../../../env/env');
const { round } = require('../../../helpers/decimal');

const getBritaPrice = async () => {
  const today = new Date();
  const yesterday = new Date().setDate(today.getDate() - 1);

  const result = await axios.get(`${env.bitraApi}?@moeda='USD'&@dataInicial='${dateformat(yesterday, 'dd-mm-yyyy')}'&@dataFinalCotacao='${dateformat(today, 'dd-mm-yyyy')}'&$format=json&$orderby=dataHoraCotacao desc&$top=1`);

  const model = { buy: null, sell: null };

  if (result.status !== 200) { return model; }

  const { cotacaoCompra, cotacaoVenda } = result.data.value[0];

  model.buy = round(cotacaoCompra, 4);
  model.sell = round(cotacaoVenda, 4);

  return model;
};

module.exports = { getBritaPrice };
