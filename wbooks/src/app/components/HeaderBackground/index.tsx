import React from 'react';
import { Image } from 'react-native';
import background from '@assets/bc_nav_bar.png';

import styles from './styles';

function HeaderBackground() {
  return <Image style={styles.image} source={background} resizeMode="stretch" />;
}

export default HeaderBackground;
