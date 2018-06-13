import { createLogic } from 'redux-logic';
import gql from 'graphql-tag';
import apollo from 'helpers/apollo';
import { round } from 'helpers/decimal';
import { CONVERT_CURRENCY_VALUE } from './constants';
import { getConvertedCryptocurrencyToBrl } from './actions';

async function obterValorMoeda(moeda) {
  return apollo.query({
    query: gql`
      query GetCoinPrice{
        ${moeda}{
          buy,
          sell
        }
      }
    `,
  });
}


const convertCurrencyLogic = createLogic({
  type: CONVERT_CURRENCY_VALUE,
  debounce: 600,
  latest: true,
  async process({ action }, dispatch, done) {
    try {
      const { moeda, valor } = action.currencies;
      const response = await obterValorMoeda(moeda);

      const { buy } = response.data[moeda];

      const convertedValue = round(valor / buy, 5);

      dispatch(getConvertedCryptocurrencyToBrl(convertedValue));
      done();
    } catch (error) {
      done();
    }
  }
});

export default [convertCurrencyLogic];
