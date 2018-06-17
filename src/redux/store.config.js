import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import logics from '../sideEffects/logics';

export default function configureStore(initialState = {}, history) {
  const logicMiddleware = createLogicMiddleware(logics, { });

  const middlewares = [logicMiddleware, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(
    connectRouter(history)(reducers),
    initialState,
    composedEnhancer
  );

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const newRootReducer = reducers.default;
        store.replaceReducer(newRootReducer);
      });
    }
  }

  return store;
}
