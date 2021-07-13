import { BookDetail } from '@interfaces/books';

import { actions } from './actions';

export interface BookState {
  books: BookDetail[];
  booksLoading: boolean;
  booksError: string | null;
}

export const INITIAL_STATE: BookState = {
  books: [],
  booksLoading: false,
  booksError: null
};

interface GetBooks {
  type: actions.GET_BOOKS;
}

interface GetBooksSuccess {
  type: actions.GET_BOOKS_SUCCESS;
  payload: BookDetail[];
}

interface GetBooksFailure {
  type: actions.GET_BOOKS_FAILURE;
  payload: string;
}

type Action = GetBooks | GetBooksSuccess | GetBooksFailure;

export const bookReducer = (state = INITIAL_STATE, action: Action): BookState => {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        booksLoading: true
      };
    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        booksLoading: false,
        booksError: null
      };
    case actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        booksError: action.payload,
        booksLoading: false
      };
    default:
      return state;
  }
};
