import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Text,
    SafeAreaView,
    TextInput,
    View,
    Image,
    Keyboard
} from 'react-native';
import styles from './style';
import { useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";
import {SetHeader} from '../../Components/headers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {set_langs} from '../../redux/actions/langsActions';
import {set_token,set_login} from '../../redux/actions/loginAction';
import SelectLangs from '../../Components/SelectLangs';
import {getToken} from '../../utils/fcm';
import post from '../../utils/axios';
import Alert from '../../Components/Alert';
function ConferenceCodeScreen({navigation}) {
    const lang = useSelector((state) => state.LangsReducer.langs);
    const [isopen,setIsopen]= useState(false);
    const [apptoken,setApptoken] = useState('');
    const [code,setCode] = useState('');
    const dispatch = useDispatch();
    const { messages } = useIntl();
    const [errmsg, setErrmsg] = useState('');
    const [errmsgcheck, setErrmsgCheck] = useState(false);
    useEffect(() => {      
        AsyncStorage.getItem('translangs',(err,result)=>{
          if(result=='ko'||result=='en'){
            dispatch(set_langs({langs:result}))
          }else{
            setIsopen(true);
          }
        })
        async function getFcmToken(){
          const fcmToken = await getToken();        
          setApptoken(fcmToken)
          dispatch(set_token({token:fcmToken}))
        }
        getFcmToken();
      }, [])
      const onPressSession = async() => {  
        Keyboard.dismiss();      
        const formdata = new FormData();
        formdata.append('set_lang',lang);
        formdata.append('session_code',code);
        const result = await post('/api/trans_session_code_in.php',formdata);
        if(result.result=='false'){
          setErrmsg(result.msg);
          setErrmsgCheck(true);
          setTimeout(() => {
              setErrmsgCheck(false);
          }, 2000);
        }else{
          setCode('');
          navigation.navigate('Session',{sessiondata:result.data});
        }
      }
    return (
        <SafeAreaView style={styles.container}>
            <SelectLangs isopen={isopen} setIsopen={setIsopen}/>
            <SetHeader title={messages.conference} navigation={navigation}/>
                <View style={styles.wrap}>
                    <Text style={styles.conftit}>{messages.conferencetit}</Text>
                    <Text style={styles.confsub}>{messages.conferencesub}</Text>
                </View>
                <View style={styles.inputgroup}>
                    <TextInput style={styles.input} placeholder={messages.conferenceodeceplaceholder} placeholderTextColor="#AAAAAA" textAlign="center" onChangeText={(text)=>setCode(text)} value={code}/>
                    <View style={styles.errorbox}>
                        <Text style={styles.error}>{messages.conferencealert}</Text>
                    </View>
                </View>
                <View style={styles.btnbox}>
                    <TouchableOpacity style={styles.custombtn} onPress={()=>onPressSession()}>
                    <Image source={require('../../assign/img/code_btn.png')} style={styles.nextbtn} />
                    <View style={styles.textbox}>
                        <Text style={styles.btntext}>{messages.next}</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                {errmsgcheck&&<Alert title={errmsg}/>} 
        </SafeAreaView>
    );
}
export default ConferenceCodeScreen;