import React,{useEffect,usestate} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {IntlProvider} from 'react-intl';
import en from './locale/en';
import ko from './locale/ko';
import {useSelector,useDispatch} from 'react-redux';
import ConferenceCodeScreen from './Screens/ConferenceCodeScreen';
import SettingScreen from './Screens/SettingScreen';
import TosScreen from './Screens/SettingScreen/TosScreen';
import SessionScreen from './Screens/SessionScreen';
import {set_check,set_end_check} from './redux/actions/loginAction';
import messaging from '@react-native-firebase/messaging';
const Stack = createStackNavigator();

function stack() {
  let langs = useSelector(state => state.LangsReducer.langs);  
  let message = langs === 'ko' ? ko : en;
  const dispatch = useDispatch();
  messaging().onMessage(async remoteMessage => { 
    console.log(remoteMessage);
    if(remoteMessage.data.title=='ing'){   
      dispatch(set_check({check:true}))  
    }else if(remoteMessage.data.title=='end'){      
      dispatch(set_end_check({endcheck:true}))  
    }
  });
  messaging().setBackgroundMessageHandler(async remoteMessage => { 
    console.log(5555555525252,remoteMessage);
    if(remoteMessage.data.title=='ing'){   
      dispatch(set_check({check:true}))  
    }else if(remoteMessage.data.title=='end'){      
      dispatch(set_end_check({endcheck:true}))  
    }
  }) 
  return (
    <IntlProvider locale={langs} messages={message}>
      <Stack.Navigator>
        <Stack.Screen name="ConferenceCode" component={ConferenceCodeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Setting" component={SettingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Tos" component={TosScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Session" component={SessionScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </IntlProvider>
  );
}

export default stack;


