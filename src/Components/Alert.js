import React, { useState, useEffect,useRef } from 'react';
import {
    TouchableOpacity,
    Text,
    SafeAreaView,
    TextInput,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
let width = Dimensions.get('window').width;
function Alert({title}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </SafeAreaView>
    );
}
export default Alert;


const styles=StyleSheet.create({
    container: {
        position:"absolute",
        bottom:30,
        marginHorizontal:16,        
        height:45,
        width:width-32,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#1E1E1E"
    },  
    text:{
        color:'white',
        fontSize:14,
    }

  });
  