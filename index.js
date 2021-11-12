/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './src/App';
 import {name as appName} from './app.json';
 import ReactNativeForegroundService from '@supersami/rn-foreground-service';
 import 'intl';
 import 'intl/locale-data/jsonp/en';
 import 'intl/locale-data/jsonp/ko';
 import 'intl/locale-data/jsonp/id';

 ReactNativeForegroundService.register();
 AppRegistry.registerComponent(appName, () => App);
 