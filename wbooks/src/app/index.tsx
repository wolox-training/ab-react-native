import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import BookItem from '@components/BookItem';
import { BOOKS_MOCK } from '@constants/mockBooks';

import styles from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.body}>
          <BookItem book={BOOKS_MOCK[0]} />
          <BookItem book={BOOKS_MOCK[1]} />
          <BookItem book={BOOKS_MOCK[2]} />
          <BookItem book={BOOKS_MOCK[3]} />
          <BookItem book={BOOKS_MOCK[4]} />
          <BookItem book={BOOKS_MOCK[5]} />
          <BookItem book={BOOKS_MOCK[6]} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
