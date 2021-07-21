import { Dispatch } from 'redux';
import { BOOKS_MOCK } from '@constants/mockBooks';

export enum actions {
  GET_BOOKS = '@@BOOKS/GET_BOOKS',
  GET_BOOKS_SUCCESS = '@@BOOKS/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE = '@@BOOKS/GET_BOOKS_FAILURE'
}

const responseMock = { ok: true, data: BOOKS_MOCK, problem: null };

export const actionCreators = {
  getBooks: () => (dispatch: Dispatch) => {
    dispatch({ type: actions.GET_BOOKS });

    if (responseMock.ok) {
      dispatch({ type: actions.GET_BOOKS_SUCCESS, payload: responseMock.data });
    } else {
      dispatch({ type: actions.GET_BOOKS_FAILURE, payload: responseMock.problem });
    }
  }
};

export default actionCreators;
