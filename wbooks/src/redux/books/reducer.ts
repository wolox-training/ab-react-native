import { completeState, createReducer, completeReducer } from 'redux-recompose';
import { BookDetail } from '@interfaces/books';

import { actions } from './actions';

export interface BookState {
  books: BookDetail[];
}

export const INITIAL_STATE: BookState = {
  books: []
};

const initialState = completeState(INITIAL_STATE);

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS]
};

export default createReducer(initialState, completeReducer(reducerDescription));
