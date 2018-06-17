import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'helpers/history';
import ReduxToastr from 'react-redux-toastr';
import './styles/global.scss';

import App from './components/container/App';
import configureStore from './redux/store.config';

// Main entry, todos os modulos, plugins ou frameworks de terceiro devem ser importados aqui.
const root = document.getElementById('root');

const store = configureStore({}, history);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
        <ReduxToastr />
      </div>
    </Provider>,
    root
  );
};

if (module.hot) {
  module.hot.accept(['components/container/App'], () => {
    ReactDOM.unmountComponentAtNode(root);
    render();
  });
}

render();
