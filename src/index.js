// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

import type { Store } from './types';

const initialState = {
  fichas: [
    { id: 1, emoji: '👽', spin: 'down' },
    { id: 2, emoji: '👽', spin: 'down' },
    { id: 3, emoji: '👹', spin: 'down' },
    { id: 4, emoji: '👹', spin: 'down' }
  ]
};

const store: Store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const element = document.getElementById('root');
if (!element) {
  throw new Error("couldn't find element with id root");
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  element
);
