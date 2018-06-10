import { createLogic } from 'redux-logic';
import { AUTHENTICATE, CANCEL_AUTHENTICATE } from './constants';

const authLogic = createLogic({
  type: AUTHENTICATE,
  cancelType: CANCEL_AUTHENTICATE,
  latest: true
});

export default [authLogic];
