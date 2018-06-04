import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogicMiddleware } from 'redux-logic';
import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
  const logicMiddleware = createLogicMiddleware([], {});

  const middlewares = [
    logicMiddleware,
    routerMiddleware(history)
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false }) : compose;

  const store = createStore(
    createReducer(),
    { ...initialState },
    composeEnhancers(...enhancers)
  );

  return store;
}
