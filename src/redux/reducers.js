import { combineReducers } from 'redux';
import homeReducer from 'components/container/Home/reducer';
import authReducer from 'components/container/Auth/reducer';
import { reducer as formReducer } from 'redux-form';

import routeReducer from './location';


// Modulo responsável por combinar todos os reducers
export default combineReducers({
  route: routeReducer,
  home: homeReducer,
  auth: authReducer,
  form: formReducer
});
