import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import BookItem from '@components/BookItem';
import { BOOKS_MOCK as books } from '@constants/mockBooks';
import { Book, BookDetail } from '@interfaces/books';

import styles from './styles';

function BookList() {
  const keyExtractor = ({ id }: BookDetail) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookItem book={item} />;

  return (
    <FlatList style={styles.container} data={books} renderItem={renderBook} keyExtractor={keyExtractor} />
  );
}

export default BookList;
