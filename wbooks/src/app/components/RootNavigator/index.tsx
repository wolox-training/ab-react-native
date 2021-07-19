import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookList from '@screens/BookList';
import BookDetail from '@screens/BookList/screens/BookDetail';
import WishList from '@screens/WishList';
import { navigatorConfig, ROUTES, TABS, tabNavigatorConfig } from '@constants/navigation';
import { RootStackParamList } from '@interfaces/navigation';

import TabIcon from './components/TabIcon';

const { Screen, Navigator } = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function BookListStackScreen() {
  return (
    <Navigator screenOptions={navigatorConfig}>
      <Screen name={ROUTES.bookList} component={BookList} options={{ title: 'Library' }} />
      <Screen name={ROUTES.bookDetail} component={BookDetail} options={{ title: 'Book Detail' }} />
    </Navigator>
  );
}

function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => <TabIcon isFocused={focused} route={route} />
      })}
      tabBarOptions={tabNavigatorConfig.tabBarOptions}>
      <Tab.Screen name={TABS.bookList} component={BookListStackScreen} />
      <Tab.Screen name={TABS.wishList} component={WishList} />
    </Tab.Navigator>
  );
}

export default RootNavigator;
