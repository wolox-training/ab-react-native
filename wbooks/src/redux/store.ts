import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';

import { bookReducer } from './books/reducer';

const rootReducer = combineReducers({ bookReducer });
const middlewares = [applyMiddleware(thunk)];

if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer());
}

export default createStore(rootReducer, compose(...middlewares));
