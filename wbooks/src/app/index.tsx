import React from 'react';
import { SafeAreaView, ScrollView, View, StatusBar } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import BookItem from '@components/BookItem';
import { BOOKS_MOCK } from '@constants/mockBooks';

import styles from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <View style={styles.body}>
            <BookItem book={BOOKS_MOCK[0]} />
            <BookItem book={BOOKS_MOCK[1]} />
            <BookItem book={BOOKS_MOCK[2]} />
            <BookItem book={BOOKS_MOCK[3]} />
            <BookItem book={BOOKS_MOCK[4]} />
            <BookItem book={BOOKS_MOCK[5]} />
            <BookItem book={BOOKS_MOCK[6]} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
