import { createTypes, completeTypes } from 'redux-recompose';
import { getBooks } from '@services/BookService';

export const actions = createTypes(completeTypes({ primaryActions: ['GET_BOOKS'] }), '@@BOOKS');

export const actionCreators = {
  getBooks: () => ({ type: actions.GET_BOOKS, target: 'books', service: getBooks })
};

export default actionCreators;
