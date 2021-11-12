import React, { useRef, useEffect } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    Platform,
    PermissionsAndroid,
    Alert,
    Animated,
    Dimensions,
    ImageBackground
} from 'react-native';
import styles from './style';
import { useIntl } from "react-intl";
import post from '../../utils/axios';
import style from './style';
function SessionList({_engine,isJoined,langtit,lang,apptoken,session_code,setStartedToken,setStartedChannelId,stop,setisLoading,isLoading}) {
    const { messages } = useIntl();
    const value = useRef(new Animated.Value(0));
    let translateY = value.current.interpolate({
        inputRange: [0, 1],
        outputRange: [110, 0],
        // extrapolate : 'extend' | 'identity' | 'clamp',
        // extrapolateRight : 'extend' | 'identity' | 'clamp',
        // extrapolateLeft : 'extend' | 'identity' | 'clamp',
    });
    const ani = useRef(
        Animated.loop(
            Animated.timing(value.current, {
                duration: 5000,
                toValue: 1,
                delay: 200,
                useNativeDriver: true,                
            })
        )
    ).current
    useEffect(() => {
        if(isLoading){
            ani.start();
        }else{
            ani.stop();
        }
    }, [isLoading])
   
    const start = async() => {
        setisLoading(true);
        let granted = undefined;
            if (Platform.OS === 'android') {
                granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
                );
            }else if(Platform.OS==='ios'){
                const formdata = new FormData();
                formdata.append('set_lang',lang)
                formdata.append('session_code',session_code)
                formdata.append('app_token',apptoken)
                const result = await post('/api/trans_session_start.php',formdata)
                if(result.result=='false'){
                    setisLoading(false);
                    console.log(result)
                    return Alert.alert('',result.msg)
                }else{                    
                      await _engine?.joinChannel(
                        result.data.token,
                        session_code,
                        null,
                        0
                    );
                    setStartedToken(result.data.token)
                    setStartedChannelId(session_code)
                    return;
                } 
            }   
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                const formdata = new FormData();
                formdata.append('set_lang',lang)
                formdata.append('session_code',session_code)
                formdata.append('app_token',apptoken)
                const result = await post('/api/trans_session_start.php',formdata)
                if(result.result=='false'){
                    setisLoading(false);
                    console.log(result)
                    return Alert.alert('',result.msg)
                }else{                    
                      await _engine?.joinChannel(
                        result.data.token,
                        session_code,
                        null,
                        0
                    );
                    setStartedToken(result.data.token)
                    setStartedChannelId(session_code)
                } 
                 
            }else if(granted===PermissionsAndroid.RESULTS.DENIED){
                setisLoading(false);
                return Alert.alert('','권한을 확인하여 주세요')
            }
    }
    const getTransform = () =>{
        return {
          transform: [
            {translateY: translateY},
          ]
        }
      }
    return (        
        <View style={styles.playbox}>
            <Text style={styles.transtit}>{langtit}</Text>
            <View style={styles.transdes}>
                <Text style={[styles.transtext]}>{messages.sessionbtntxt}</Text><Text style={[styles.transtext,{color:'#F35174'}]}>{messages.touch}</Text><Text style={[styles.transtext]}>{messages.start}</Text>
            </View>
            {!isJoined?
            !isLoading?
            <TouchableOpacity onLongPress={()=>start()}>
                <View>
                    <Image source={require('../../assign/img/btn_play.png')} style={styles.playbtn} resizeMode="contain"/>
                </View>
            </TouchableOpacity>
            :
                <ImageBackground source={require('../../assign/img/btn_play.png')} style={styles.animationview} resizeMode="contain">
                    <View style={styles.overflowview}>
                        <Animated.View style={[{width:100,height:100,backgroundColor:'#F35174',opacity:Platform.OS=='android'?0.7:0.9}, getTransform()]}/>
                    </View>
                </ImageBackground>
            : 
            !isLoading?
            <TouchableOpacity onLongPress={()=>stop()}>
                <Image source={require('../../assign/img/btn_stop.png')} style={styles.playbtn} resizeMode="contain"/>
            </TouchableOpacity>
            :
            <ImageBackground source={require('../../assign/img/btn_stop.png')} style={styles.animationview} resizeMode="contain">
                <View style={styles.overflowview}>
                    <Animated.View style={[{width:100,height:100,backgroundColor:'#F35174',opacity:Platform.OS=='android'?0.7:0.9}, getTransform()]}/>
                </View>
            </ImageBackground>
            }
        </View>
    );
}
export default SessionList;