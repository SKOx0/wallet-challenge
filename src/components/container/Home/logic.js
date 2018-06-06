import { createLogic } from 'redux-logic';
import { TESTE, CANCEL_TESTE } from './constants';

const homeLogic = createLogic({
  type: TESTE,
  cancelType: CANCEL_TESTE,
  latest: true
});

export default [homeLogic];
