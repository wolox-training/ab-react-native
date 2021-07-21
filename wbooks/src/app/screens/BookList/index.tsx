import React, { useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from '@components/BookItem';
import { BookDetail } from '@interfaces/books';
import { RootStackParamList } from '@interfaces/navigation';
import { ROUTES } from '@constants/navigation';
import actionCreators from '@redux/books/actions';
import { AppState } from '@interfaces/redux';

import styles from './styles';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, ROUTES.bookList>;
}

function BookList({ navigation }: Props) {
  const dispatch = useDispatch();
  const books = useSelector<AppState, BookDetail[]>(state => state.bookReducer.books);

  const onPressBook = (book: BookDetail) => navigation.navigate(ROUTES.bookDetail, book);
  const keyExtractor = ({ id }: BookDetail) => String(id);
  const renderBook: ListRenderItem<BookDetail> = ({ item }) => <BookItem book={item} onPress={onPressBook} />;

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  return (
    <FlatList style={styles.container} data={books} renderItem={renderBook} keyExtractor={keyExtractor} />
  );
}

export default BookList;
