import React,{useEffect,useState,useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BackHandler,ToastAndroid} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './redux/reducers';
import Stack from './stack';
import SplashScreen from 'react-native-splash-screen';
let exitApp=false;
let store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware()),
);

function App() {  
  const ref = useRef(null)
  useEffect(() => {   
    const backAction = () => {
      let tmp =
        ref.current?.getRootState().index != undefined
          ? ref.current?.getRootState().index
          : tmp;
  
      let timeout;
  
      if (tmp == 0) {
        if (exitApp == undefined || !exitApp) {
          ToastAndroid.show(
            '한번 더 누르면 앱을 종료합니다.',
            ToastAndroid.SHORT,
          );
          exitApp=true;
  
          timeout = setTimeout(() => {
            exitApp=false;
          }, 2000);
        } else {
          clearTimeout(timeout);
          BackHandler.exitApp(); // 앱 종료
        }
        return true;
      }
    };
    setTimeout(() => {
      SplashScreen.hide();  
    }, 1000);
    const backHandler = BackHandler.addEventListener('hardwareBackPress',backAction);
    return () =>  BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }, [])
  return (
          <NavigationContainer ref={ref}>
            <Provider store={store}>
                <Stack/>
            </Provider>
          </NavigationContainer>
  );
}

export default App;
