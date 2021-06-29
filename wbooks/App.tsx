import React from 'react';
import Reactotron from 'reactotron-react-native';

import App from './src/app';

export default function index() {
  Reactotron.log('App index reactotron console');
  return <App />;
}
