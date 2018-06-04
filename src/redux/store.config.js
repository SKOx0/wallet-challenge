import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension';
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

  const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose;

  const store = createStore(
    createReducer(),
    { ...initialState },
    composeEnhancers(...enhancers)
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer());
    });
  }

  return store;
}
