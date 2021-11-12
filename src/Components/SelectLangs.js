import React, { useState } from 'react';
import {
    Modal,
    Text,
    Image,
    TextInput,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { useIntl } from "react-intl";
import { useDispatch,useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {set_langs} from '../redux/actions/langsActions';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
function SelectLangs({isopen,setIsopen}) {
    const { messages } = useIntl();
    const dispatch = useDispatch();
    const selectlang = useSelector((state) => state.LangsReducer.langs); 
    const setLangs = (lang) => {
        dispatch(set_langs({langs:lang}))
        AsyncStorage.setItem('translangs',lang);
        setIsopen(false);
    }
    return (
        <Modal animationType="slide" transparent={true} visible={isopen} onRequestClose={()=>setIsopen(false)}>
            <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            flex: 1,        
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}></View>
            <View style={styles.container}>
                <View style={styles.wrap}>
                    <View style={{marginBottom:20}}>
                        <Text style={styles.tit}>{messages.selectlangstit}</Text>
                        <Text style={styles.des}>{messages.selectlangsdes}</Text>
                    </View>
                    <View style={styles.selectbox}>
                        <TouchableOpacity style={styles.btn} onPress={()=>setLangs('ko')}>
                            <Text style={selectlang==='ko'?styles.activetxt:styles.txt}>{messages.ko}</Text>
                            <Image source={selectlang==='ko'?require('../assign/img/ic_check_on.png'):require('../assign/img/ic_check_off.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={()=>setLangs('en')}>
                            <Text style={selectlang==='en'?styles.activetxt:styles.txt}>{messages.en}</Text>
                            <Image source={selectlang==='en'?require('../assign/img/ic_check_on.png'):require('../assign/img/ic_check_off.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
           
        </Modal>
 
    );
}
export default SelectLangs;


const styles=StyleSheet.create({
    container: {
       backgroundColor:"white",
       marginTop: height*0.25,
       marginBottom:height*0.46,
       marginHorizontal:width*0.13,
       borderRadius:7,
       zIndex:100
    },  
    wrap:{
        paddingVertical:height*0.027,
        borderRadius:7,
        alignItems:'center',
    },
    text:{
        color:'white',
        fontSize:14,
    },
    tit:{
        fontSize:18,
        color:'#231F21',
        fontWeight:"bold",
        textAlign:'center',
        marginBottom:3
    },
    des:{
        fontSize:14,
        color:"#A1A1A1"
    },
    selectbox:{
        width:'100%',
        paddingHorizontal:height*0.025,
        alignItems:'center',
    },
    txt:{
        marginRight:11,
        color:'#555555',
        textAlign:'center',
        fontWeight:'bold'
    },
    activetxt:{
        marginRight:11,
        color:'#F35174',
        textAlign:'center',
        fontWeight:'bold'
    },
    btn:{
        marginTop:height*0.013,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#E5E5E5',
        width:'100%',
        justifyContent:'center',
        paddingBottom:height*0.013
    }
  });
  