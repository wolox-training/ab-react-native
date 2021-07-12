import React from 'react';
import { Image } from 'react-native';
import { tabIcons } from '@constants/navigation';

interface Props {
  isFocused: boolean;
  route: { name: string };
}

function TabIcon({ isFocused, route }: Props) {
  return <Image source={tabIcons[route.name][isFocused ? 'active' : 'inactive']} />;
}

export default TabIcon;
