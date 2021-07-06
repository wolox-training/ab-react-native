import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from '@screens/BookList';
import BookDetail from '@screens/BookList/screens/BookDetail';
import { ROUTES } from '@constants/routes';
import { RootStackParamList } from '@interfaces/navigation';

const { Screen, Navigator } = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Navigator initialRouteName={ROUTES.bookList}>
      <Screen name={ROUTES.bookList} component={BookList} options={{ title: 'Book List' }} />
      <Screen name={ROUTES.bookDetail} component={BookDetail} options={{ title: 'Book Detail' }} />
    </Navigator>
  );
}

export default RootNavigator;
