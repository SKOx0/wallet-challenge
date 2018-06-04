import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import App from './components/container/App';
import configureStore from './redux/store.config';

// Main entry, todos os modulos, plugins ou frameworks de terceiro devem ser importados aqui.
const root = document.getElementById('root');
const history = createHistory();

const store = configureStore({}, history);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
    , root);
};

render();
