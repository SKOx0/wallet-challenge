import { createLogic } from 'redux-logic';
import { change } from 'redux-form';
import { round } from 'helpers/decimal';
import { actions } from 'react-redux-toastr';
import { getBasicToast } from 'helpers/toast';
import { obterValorMoeda, getUser } from 'helpers/query';
import { normalizeValue } from 'helpers/currency';
import { CONVERT_CURRENCY_VALUE, LIST_AVAILIBLE_CURRENCIES, EXCHANGE_CRYPTOCURRECY } from './constants';
import { availibleCurrencies } from './actions';

const genericErrorMessage = 'Falha ao converter valores';

const convertCurrencyLogic = createLogic({
  type: CONVERT_CURRENCY_VALUE,
  debounce: 600,
  latest: true,
  async process({ action }, dispatch, done) {
    try {
      const { moeda, valor, form } = action.currencies;
      const response = await obterValorMoeda(moeda);

      const { buy } = response.data[moeda];

      if (!buy) {
        dispatch(actions.add(getBasicToast('error', genericErrorMessage)));
      }

      const convertedValue = round(valor / buy, 5) || 0;

      dispatch(change(form.name, form.targetField, convertedValue));

      done();
    } catch (error) {
      dispatch(actions.add(getBasicToast('error', genericErrorMessage)));
      done();
    }
  }
});

const listAvailicleCurrenciesLogic = createLogic({
  type: LIST_AVAILIBLE_CURRENCIES,
  latest: true,
  async process({ action }, dispatch, done) {
    try {
      let allCurrenciesMock = ['bitcoin', 'brita', 'real'];

      allCurrenciesMock = allCurrenciesMock.filter((value) => value !== action.currentCurrency);

      dispatch(availibleCurrencies(allCurrenciesMock));

      done();
    } catch (error) {
      dispatch(actions.add(getBasicToast('error', 'Falha ao listar moedas disponíveis!')));
      done();
    }
  }
});

const exchargeCryptocurrencyLogic = createLogic({
  type: EXCHANGE_CRYPTOCURRECY,
  latest: true,
  debounce: 1000,
  async process({ action }, dispatch, done) {
    try {
      const users = JSON.parse(localStorage.getItem('users'));
      const email = atob(localStorage.getItem('authToken'));

      const real = normalizeValue(action.exchangeInformations.brlValue) / 100;
      const { cryptoCurrencyValue, moeda } = action.exchangeInformations;

      const userFound = getUser(email, (user) => user.email === email);

      const { saldo } = userFound.moedas.real;
      const saldoCurrency = userFound.moedas[moeda].saldo;

      if (saldo >= real) {
        userFound.moedas.real = { ...{ saldo: saldo - real } };
        userFound.moedas[moeda] = { ...{ saldo: round(saldoCurrency + cryptoCurrencyValue, 5) } };
      } else {
        dispatch(actions.add(getBasicToast('warning', 'Saldo insuficiênte!')));
        done();
      }

      const keepUsers = users.filter((value) => value.email !== email);

      localStorage.setItem('users', JSON.stringify([...keepUsers, userFound]));

      dispatch(actions.add(getBasicToast('success', 'Compra realizada com sucesso!')));

      done();
    } catch (error) {
      dispatch(actions.add(getBasicToast('error', 'Falha ao listar moedas disponíveis!')));
      done();
    }
  }
});


export default [convertCurrencyLogic, listAvailicleCurrenciesLogic, exchargeCryptocurrencyLogic];
