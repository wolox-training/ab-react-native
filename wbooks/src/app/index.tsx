import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import BookList from '@screens/BookList';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <BookList />
      </SafeAreaView>
    </>
  );
};

export default App;
