import React from 'react';
import { Image } from 'react-native';
import { TAB_ICONS } from '@constants/navigation';

interface Props {
  isFocused: boolean;
  route: { name: string };
}

function TabIcon({ isFocused, route }: Props) {
  return <Image source={TAB_ICONS[route.name][isFocused ? 'active' : 'inactive']} />;
}

export default TabIcon;
