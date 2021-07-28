import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import Reactotron from '@config/reactotronConfig';

import bookReducer from './books/reducer';

const rootReducer = combineReducers({ bookReducer });
const middlewares = [applyMiddleware(thunk, fetchMiddleware)];

if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer());
}

export default createStore(rootReducer, compose(...middlewares));
