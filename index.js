/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Apptowebrnsignmalvsnrasbh from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Apptowebrnsignmalvsnrasbh);

setImmediate(() => {
  const { getMessaging, setBackgroundMessageHandler } = require('@react-native-firebase/messaging');
  const { towebrnsignmalvsnrasbhOnMessageRecieved } = require('./services/intowebrnsignmalvsnrasbhitializationShared');
  const messaging = getMessaging();
  setBackgroundMessageHandler(messaging, async remoteMessage => {
    await towebrnsignmalvsnrasbhOnMessageRecieved(remoteMessage);
  });
});
