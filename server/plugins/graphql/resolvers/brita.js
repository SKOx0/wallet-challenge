const axios = require('axios');
const dateformat = require('dateformat');
const env = require('../../../env/env');
const {
  round
} = require('../../../helpers/decimal');

function getUrl(dataInicial, dataFinal) {
  return `${env.bitraApi}?@moeda='USD'&@dataInicial='${dateformat(dataInicial, 'dd-mm-yyyy')}'&@dataFinalCotacao='${dateformat(dataFinal, 'dd-mm-yyyy')}'&$format=json&$orderby=dataHoraCotacao desc&$top=1`;
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
  let dataFinal = new Date();
  let dataInicial = new Date().setDate(dataFinal.getDate() - 1);

  try {
    const model = await requestBrita(dataInicial, dataFinal);

    return model;
  } catch (ex) {
    // Em caso de falha para obter as taxas de hoje, faz uma consulta com o primeiro dia do mês
    const today = new Date();

    dataFinal = dataFinal.setDate(today.getDate() - 1);

    dataInicial = new Date(today.getFullYear(), today.getMonth(), 1);

    const model = await requestBrita(dataInicial, dataFinal);

    return model;
  }
};


module.exports = {
  getBritaPrice
};
