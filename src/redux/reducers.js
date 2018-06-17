import { combineReducers } from 'redux';
import homeReducer from 'components/container/Home/reducer';
import authReducer from 'components/container/Auth/reducer';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

// Modulo responsável por combinar todos os reducers
export default combineReducers({
  home: homeReducer,
  auth: authReducer,
  form: formReducer,
  toastr: toastrReducer
});
