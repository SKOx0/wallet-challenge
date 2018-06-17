import { createLogic } from 'redux-logic';
import { change } from 'redux-form';
import { round } from 'helpers/decimal';
import { actions } from 'react-redux-toastr';
import * as dateformat from 'dateformat';
import { getBasicToast } from 'helpers/toast';
import { obterValorMoeda, getUser, getAllUsers, addTransaction, getAllTransactions } from 'helpers/query';
import { normalizeValue } from 'helpers/currency';
import { CONVERT_BRL_CURRENCY, CONVERT_CRYPTOCURRENCY_TO_BRL, LIST_TRANSACTIONS, CONVERT_CRYPTOCURRENCY_TO_CRYPTOCURRENCY, LIST_AVAILIBLE_CURRENCIES, EXCHANGE_CRYPTOCURRECY, GET_BALANCE } from './constants';
import { availibleCurrencies, getBalance, currentBalance, transactions, listTransactions } from './actions';

const genericErrorMessage = 'Falha ao converter valores';

const convertCryptocurrencyToBrlLogic = createLogic({
  type: CONVERT_CRYPTOCURRENCY_TO_BRL,
  debounce: 600,
  latest: true,
  async process({ action }, dispatch, done) {
    try {
      const { moeda, valor, form } = action.payload;
      const response = await obterValorMoeda(moeda);

      const { sell } = response.data[moeda];

      if (!sell) {
        dispatch(actions.add(getBasicToast('error', genericErrorMessage)));
        return;
      }

      const convertedValue = round(valor * sell, 2) || 0;

      dispatch(change(form.name, form.targetField, convertedValue));

      done();
    } catch (error) {
      dispatch(actions.add(getBasicToast('error', genericErrorMessage)));
      done();
    }
  }
});

const convertCurrencyLogic = createLogic({
  type: CONVERT_BRL_CURRENCY,
  debounce: 600,
  latest: true,
  async process({ action }, dispatch, done) {
    try {
      const { moeda, valor, form } = action.payload;
      const response = await obterValorMoeda(moeda);

      const { buy } = response.data[moeda];

      if (!buy) {
        dispatch(actions.add(getBasicToast('error', genericErrorMessage)));
        return;
      }

      const convertedValue = round(valor / buy, 2) || 0;

      dispatch(change(form.name, form.targetField, convertedValue));

      done();
    } catch (error) {
      dispatch(actions.add(getBasicToast('error', genericErrorMessage)));
      done();
    }
  }
});

const convertCryptocurrencyToCryptocurrencyLogic = createLogic({
  type: CONVERT_CRYPTOCURRENCY_TO_CRYPTOCURRENCY,
  debounce: 600,
  latest: true,
  validate({ action }, allow, reject) {
    const { moedaTroca } = action.payload;

    if (moedaTroca) {
      allow(action);
    } else {
      reject(actions.add(getBasicToast('error', 'Selecione uma moeda de troca!')));
    }
  },
  async process({ action }, dispatch, done) {
    try {
      const {
        moeda, moedaTroca, valor, form
      } = action.payload;

      const response = await obterValorMoeda(moeda);
      const responseMoedaTroca = await obterValorMoeda(moedaTroca);

      const { buy } = response.data[moeda];
      const buyMoedaTroca = responseMoedaTroca.data[moedaTroca].buy;
      if (!buy || !buyMoedaTroca) {
        dispatch(actions.add(getBasicToast('error', genericErrorMessage)));
        return;
      }

      const convertedValueBrl = round(valor * buy, 2) || 0;
      const convertedValue = round(convertedValueBrl / buyMoedaTroca, 2) || 0;

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
      let allCurrenciesMock = ['bitcoin', 'brita'];

      allCurrenciesMock = allCurrenciesMock.filter((value) => value !== action.payload);

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
  validate({ action }, allow, reject) {
    const { exchangeCurrencyValue, cryptoCurrencyValue } = action.payload;

    if (exchangeCurrencyValue && cryptoCurrencyValue) {
      allow(action);
    } else {
      reject(actions.add(getBasicToast('error', 'Falha ao tentar converter moedas')));
    }
  },
  async process({ action }, dispatch, done) {
    try {
      const users = getAllUsers();
      const email = atob(localStorage.getItem('authToken'));
      const userFound = getUser(email, (user) => user.email === email);
      const exchangeCurrencyValue = normalizeValue(action.payload.exchangeCurrencyValue) / 100;
      const { cryptoCurrencyValue, moeda, moedaTroca } = action.payload;

      const { saldo } = userFound.moedas[moedaTroca];
      const saldoMoeda = userFound.moedas[moeda].saldo;

      if (saldo >= exchangeCurrencyValue) {
        userFound.moedas[moedaTroca] = { ...{ saldo: round(saldo - exchangeCurrencyValue, 2) } };
        userFound.moedas[moeda] = { ...{ saldo: round(saldoMoeda + cryptoCurrencyValue, 2) } };
      } else {
        dispatch(actions.add(getBasicToast('warning', 'Saldo insuficiênte!')));
        done();
        return;
      }

      const keepUsers = users.filter((value) => value.email !== email);

      localStorage.setItem('users', JSON.stringify([...keepUsers, userFound]));

      dispatch(actions.add(getBasicToast('success', 'Transação realizada com sucesso!')));
      dispatch(getBalance());

      const dataTransacao = dateformat(new Date(), 'dd/mm/yyyy');

      addTransaction(email, {
        data: dataTransacao,
        tipoTransacao: action.payload.tipoTransacao,
        moeda: moedaTroca,
        valor: exchangeCurrencyValue,
        moedaTroca: moeda,
        valorConvertido: cryptoCurrencyValue
      });

      dispatch(listTransactions());

      done();
    } catch (error) {
      dispatch(actions.add(getBasicToast('error', 'Falha ao trocar moedas!')));
      done();
    }
  }
});

const getBalanceLogic = createLogic({
  type: GET_BALANCE,
  latest: true,
  async process(obj, dispatch, done) {
    try {
      const email = atob(localStorage.getItem('authToken'));
      const userFound = getUser(email, (user) => user.email === email);

      dispatch(currentBalance(userFound.moedas));

      done();
    } catch (error) {
      dispatch(actions.add(getBasicToast('error', 'Falha ao obter saldos!')));
      done();
    }
  }
});

const listTransactionsLogic = createLogic({
  type: LIST_TRANSACTIONS,
  latest: true,
  async process(obj, dispatch, done) {
    try {
      const email = atob(localStorage.getItem('authToken'));
      const userTransactions = getAllTransactions(email);

      dispatch(transactions(userTransactions));

      done();
    } catch (error) {
      dispatch(actions.add(getBasicToast('error', 'Falha ao listar transações')));
      done();
    }
  }
});

export default [convertCurrencyLogic,
  convertCryptocurrencyToBrlLogic,
  convertCryptocurrencyToCryptocurrencyLogic,
  listAvailicleCurrenciesLogic, exchargeCryptocurrencyLogic,
  getBalanceLogic,
  listTransactionsLogic
];
