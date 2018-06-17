const axios = require('axios');
const dateformat = require('dateformat');
const env = require('../../../env/env');
const {
  round
} = require('../../../helpers/decimal');

function getUrl(dataInicial, dataFinal) {
  return `${env.bitraApi}?@moeda='USD'&@dataInicial='${dateformat(dataInicial, 'mm-dd-yyyy')}'&@dataFinalCotacao='${dateformat(dataFinal, 'mm-dd-yyyy')}'&$format=json&$orderby=dataHoraCotacao desc&$top=1`;
}

const requestBrita = async (dataInicial, dataFinal) => {
  const model = {
    buy: null,
    sell: null
  };

  const result = await axios.get(getUrl(dataInicial, dataFinal));

  if (result.status !== 200) {
    return model;
  }

  const {
    cotacaoCompra,
    cotacaoVenda
  } = result.data.value[0];


  model.buy = round(cotacaoCompra, 4);
  model.sell = round(cotacaoVenda, 4);

  return model;
};

const getBritaPrice = async () => {
  const dataFinal = new Date();
  const dataInicial = new Date().setDate(dataFinal.getDate() - 1);

  const model = await requestBrita(dataInicial, dataFinal);

  return model;
};


module.exports = {
  getBritaPrice
};
