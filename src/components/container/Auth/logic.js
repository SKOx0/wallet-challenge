import { createLogic } from 'redux-logic';
import { actions } from 'react-redux-toastr';
import { getBasicToast } from 'helpers/toast';
import gql from 'graphql-tag';
import apollo from 'helpers/apollo';
import { AUTHENTICATE, CANCEL_AUTHENTICATE, NEW_ACCOUNT, CANCEL_NEW_ACCOUNT } from './constants';
import { newAccountSuccess, authenticateSuccess } from './actions';

function getUser(userEmail, predict) {
  const users = JSON.parse(localStorage.getItem('users'));

  if (!users) return null;

  const user = users.find(predict);

  return user;
}

async function getUserInformations(email) {
  return apollo.query({
    query: gql`
      query GetUserInformations{
        userInitialInfo(email: "${email}"){
          britaHash,
          bitcoinHash,
          saldo
        }
      }
    `,
  });
}

const authLogic = createLogic({
  type: AUTHENTICATE,
  cancelType: CANCEL_AUTHENTICATE,
  latest: true,
  process({ action }, dispatch, done) {
    try {
      const { email, senha } = action.user;

      const userFound = getUser(email, (user) => user.email === email && user.senha === senha);

      if (!userFound) {
        dispatch(actions.add(getBasicToast('error', 'Carteira não encontrada!')));
        done();
      }

      localStorage.setItem('authToken', btoa(`${userFound.email}:${userFound.saldo}`));

      dispatch(authenticateSuccess(true));

      done();
    } catch (ex) {
      dispatch(actions.add(getBasicToast('error', ex.message)));
      done();
    }
  }
});

const newAccountLogic = createLogic({
  type: NEW_ACCOUNT,
  cancelType: CANCEL_NEW_ACCOUNT,
  latest: true,
  async process({ action }, dispatch, done) {
    try {
      let users = JSON.parse(localStorage.getItem('users')) || [];

      const { email, senha } = action.account;

      const userFound = getUser(email, (user) => user.email === email);

      if (userFound) {
        dispatch(actions.add(getBasicToast('error', 'Usuário já cadastrado!')));
        done();
      }

      const response = await getUserInformations(email);

      users = [...users, { ...response.data.userInitialInfo, email, senha }];

      localStorage.setItem('users', JSON.stringify(users));

      dispatch(actions.add(getBasicToast('success', 'Usuário cadastrado com sucesso!')));

      dispatch(newAccountSuccess(true));

      done();
    } catch (ex) {
      dispatch(actions.add(getBasicToast('error', ex.message)));
      done();
    }
  }
});

export default [authLogic, newAccountLogic];
