import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import BookItem from '@components/BookItem';
import { BOOKS_MOCK as books } from '@constants/mockBooks';
import { BookDetail } from '@interfaces/books';
import { RootStackParamList } from '@interfaces/navigation';
import { ROUTES } from '@constants/navigation';

import styles from './styles';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, ROUTES.bookList>;
}

function BookList({ navigation }: Props) {
  const onPressBook = (book: BookDetail) => navigation.navigate(ROUTES.bookDetail, book);
  const keyExtractor = ({ id }: BookDetail) => String(id);
  const renderBook: ListRenderItem<BookDetail> = ({ item }) => <BookItem book={item} onPress={onPressBook} />;

  return (
    <FlatList style={styles.container} data={books} renderItem={renderBook} keyExtractor={keyExtractor} />
  );
}

export default BookList;
