import { createLogic } from 'redux-logic';
import gql from 'graphql-tag';
import apollo from 'helpers/apollo';
import { round } from 'helpers/decimal';
import { actions } from 'react-redux-toastr';
import { getBasicToast } from 'helpers/toast';
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

const genericErrorMessage = 'Falha ao converter valores';

const convertCurrencyLogic = createLogic({
  type: CONVERT_CURRENCY_VALUE,
  debounce: 600,
  latest: true,
  async process({ action }, dispatch, done) {
    try {
      const { moeda, valor } = action.currencies;
      const response = await obterValorMoeda(moeda);

      const { buy } = response.data[moeda];

      if (!buy) {
        dispatch(actions.add(getBasicToast('error', genericErrorMessage)));
      }

      const convertedValue = round(valor / buy, 5);

      dispatch(getConvertedCryptocurrencyToBrl(convertedValue));
      done();
    } catch (error) {
      dispatch(actions.add(getBasicToast('error', genericErrorMessage)));
      done();
    }
  }
});

export default [convertCurrencyLogic];
