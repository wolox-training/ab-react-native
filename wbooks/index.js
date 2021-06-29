/**
 * @format
 */

if (__DEV__) {
  // eslint-disable-next-line no-console
  import('@config/reactotronConfig').then(() => console.log('Reactotron Configured'));
}

import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
