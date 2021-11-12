import React, { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    Image,
    ScrollView,    
    StyleSheet
} from 'react-native';
import { useIntl } from "react-intl";
import Header from '../../Components/headers';
import Webview from 'react-native-webview';
function TosScreen({navigation,route}) {        
    const { messages } = useIntl();
    console.log(route.params?.content)
    return (
        <SafeAreaView style={styles.container}>
            <Header title={route.params?.type=='tos'?messages.tos:messages.privacysettitle} navigation={navigation}/>
                <Webview
                    style={styles.webview}
                    originWhitelist={['*']}
                    source={{html:route.params.content}}
                    injectedJavaScript={`document.body.style.color='#A1A1A1';document.body.style.fontSize=24;`}
                />
        </SafeAreaView>
    );
}
export default TosScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor:"#FFFFFF",
    }, 
    webview:{
        flex:1,
        backgroundColor:'white'
    },
    toswrap:{
        paddingLeft:26,
        paddingRight:16,
        paddingVertical:20,
    },
    txt:{
        fontSize:14,
        color:'#A1A1A1',        
        marginBottom:20,
        paddingBottom:20
    }
  });
  