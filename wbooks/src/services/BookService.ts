// import api from '@config/api';
import { BOOKS_MOCK } from '@constants/mockBooks';

// export const getBooks = () => api.get('/books'); // does not work without authentication token
export const getBooks = () => Promise.resolve({ ok: true, data: BOOKS_MOCK, problem: '' });
