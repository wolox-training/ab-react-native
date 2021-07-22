import { NativeModules } from 'react-native';
import Reactotron, { overlay, trackGlobalErrors } from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import reactotronApisauce from 'reactotron-apisauce';

interface Tron {
  log: (...args: any[]) => void;
  clear: () => void;
  customCommand: (arg: any) => void;
  display: (arg: any) => void;
}

declare global {
  interface Console {
    tron: Tron;
  }
}

if (__DEV__) {
  // Reactotron.setAsyncStorageHandler(AsyncStorage).configure({ name: 'wbooks' }).useReactNative().connect();
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];

  Reactotron.configure({ name: 'wbooks', host: scriptHostname })
    .use(trackGlobalErrors())
    .use(reactotronRedux())
    .use(reactotronApisauce())
    .setAsyncStorageHandler(AsyncStorage)
    .use(overlay())
    .connect();

  // eslint-disable-next-line no-console
  console.tron = {
    log: Reactotron.logImportant,
    clear: Reactotron.clear,
    customCommand: Reactotron.onCustomCommand,
    display: Reactotron.display
  };
}

export default Reactotron;
