import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import appReducer from '../components/container/App/reducer';
// Modulo responsável por combinar todos os reducers

const routeInitialState = {
  location: null,
};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    global: appReducer,
    ...injectedReducers,
  });
}
