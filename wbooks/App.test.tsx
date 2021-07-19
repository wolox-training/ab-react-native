import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from './src/app';
import { INITIAL_STATE } from './src/redux/books/reducer';

const mockStore = configureStore([thunk]);
const store = mockStore({ bookReducer: INITIAL_STATE });

it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
