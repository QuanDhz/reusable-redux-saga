import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';
import App from './containers/App';
import { PAGE } from './containers/config';
import { reducer, sagas } from '../../../build';

const store = configureStore({ [PAGE]: reducer(PAGE) });
store.runSaga(sagas[0]);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
