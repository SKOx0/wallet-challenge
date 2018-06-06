import { combineReducers } from 'redux';
import homeReducer from 'components/container/Home/reducer';

import routeReducer from './location';


// Modulo responsável por combinar todos os reducers

export default combineReducers({
  route: routeReducer,
  homeReducer
});
