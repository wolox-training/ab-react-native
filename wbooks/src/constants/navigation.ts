import { StackNavigationOptions } from '@react-navigation/stack';
import HeaderBackground from '@components/HeaderBackground';
import { WHITE } from '@constants/colors';

import { FONT_SEMIBOLD } from './fonts';

export enum ROUTES {
  bookList = 'BookList',
  bookDetail = 'BookDetail'
}

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
