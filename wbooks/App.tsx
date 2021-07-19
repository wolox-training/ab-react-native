import React from 'react';
import { Provider } from 'react-redux';

import '@config/reactotronConfig';

import App from './src/app';
import store from './src/redux/store';

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
