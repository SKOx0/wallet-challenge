import { createLogic } from 'redux-logic';
import { actions } from 'react-redux-toastr';
import { getBasicToast } from 'helpers/toast';
import { getUser, getUserInformations } from 'helpers/query';
import { AUTHENTICATE, CANCEL_AUTHENTICATE, NEW_ACCOUNT, CANCEL_NEW_ACCOUNT } from './constants';
import { newAccountSuccess, authenticateSuccess } from './actions';

const authLogic = createLogic({
  type: AUTHENTICATE,
  cancelType: CANCEL_AUTHENTICATE,
  latest: true,
  process({ action }, dispatch, done) {
    try {
      const { email, senha } = action.payload;

      const userFound = getUser(email, (user) => user.email === email && user.senha === senha);

      if (!userFound) {
        dispatch(actions.add(getBasicToast('error', 'Carteira não encontrada!')));
        done();
      }

      localStorage.setItem('authToken', btoa(`${userFound.email}`));

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

      const { email, senha } = action.payload;

      const userFound = getUser(email, (user) => user.email === email);

      if (userFound) {
        dispatch(actions.add(getBasicToast('error', 'Usuário já cadastrado!')));
        done();
      }

      const response = await getUserInformations(email);

      users = [...users, {
        ...response.data.userInitialInfo, email, senha, transactions: []
      }];

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
