import { ImageSourcePropType } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { BottomTabNavigationConfig } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import HeaderBackground from '@components/HeaderBackground';
import { WHITE, CERULEAN, DUSTY_GRAY } from '@constants/colors';
import bookListIconActive from '@assets/ic_library_active.png';
import bookListIconInactive from '@assets/ic_library.png';
import wishlistIconActive from '@assets/ic_wishlist_active.png';
import wishlistIconInactive from '@assets/ic_wishlist.png';

import { FONT_SEMIBOLD } from './fonts';

export enum ROUTES {
  bookList = 'Library',
  bookDetail = 'BookDetail',
  wishList = 'WishList'
}

export enum TABS {
  bookList = 'Library',
  wishList = 'WishList'
}

interface TabIcons {
  [key: string]: { active: ImageSourcePropType; inactive: ImageSourcePropType };
}

export const tabIcons: TabIcons = {
  [ROUTES.bookList]: {
    active: bookListIconActive,
    inactive: bookListIconInactive
  },
  [ROUTES.wishList]: {
    active: wishlistIconActive,
    inactive: wishlistIconInactive
  }
};

export const navigatorConfig: StackNavigationOptions = {
  headerBackground: HeaderBackground,
  headerBackTitleVisible: false,
  headerStyle: {
    height: 100
  },
  headerTintColor: WHITE,
  headerTransparent: true,
  headerTitleStyle: {
    color: WHITE,
    fontSize: 17,
    fontWeight: FONT_SEMIBOLD,
    letterSpacing: -0.4,
    textTransform: 'uppercase'
  }
};

export const tabNavigatorConfig: BottomTabNavigationConfig = {
  tabBarOptions: {
    activeTintColor: CERULEAN,
    inactiveTintColor: DUSTY_GRAY,
    labelStyle: {
      fontSize: 10,
      letterSpacing: 0.12,
      lineHeight: 12,
      marginTop: 3
    },
    tabStyle: {
      paddingBottom: 3,
      paddingTop: 10
    }
  }
};
