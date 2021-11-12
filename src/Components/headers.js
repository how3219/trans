import React,{ useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Text,
    SafeAreaView,    
    Image,
    View,
    StyleSheet
  } from 'react-native';
  
  const Header = ({title,navigation,usesetting=false}) => {
      return(
          <SafeAreaView style={styles.container}>
              <TouchableOpacity style={styles.btn} onPress={()=>navigation.goBack()}><Image source={require('../assign/img/ic_back.png')}/></TouchableOpacity>
                <Text style={usesetting?styles.twotext:styles.Text}>{title}</Text>
                {usesetting&&<TouchableOpacity style={styles.btn} onPress={()=>navigation.push('Setting')}><Image source={require('../assign/img/ic_setting.png')} style={styles.setimage}/></TouchableOpacity>}
          </SafeAreaView>
      )
  }

 export const SetHeader = ({title,navigation}) => {
    return(
        <SafeAreaView style={styles.setcontainer}>
              <Text style={styles.setText}>{title}</Text>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.push('Setting')}><Image source={require('../assign/img/ic_setting.png')} style={styles.setimage}/></TouchableOpacity>
        </SafeAreaView>
    )
}
  export default Header;

  const styles=StyleSheet.create({
    container: {
        height:56,
        flexDirection: "row",
        alignItems:'center',
        paddingHorizontal:12,
        backgroundColor:'#FFFFFF',
        borderBottomColor:'#E5E5E5',
        borderBottomWidth:2
    }, 
    setcontainer: {
      height:56,
      flexDirection: "row",
      alignItems:'center',
      paddingHorizontal:20,
      backgroundColor:'#FFFFFF',
      borderBottomColor:'#E5E5E5',
      borderBottomWidth:2
  },   
    btn:{
        width:30,
    },
    Text:{
        flex:1,
        marginRight:30,
        textAlign:'center',
        fontSize:18,
        color:'#2B292A',
        fontWeight:'bold'
    },
    twotext:{
      flex:1,
      textAlign:'center',
      fontSize:18,
      color:'#2B292A',
      fontWeight:'bold'
    },
    setText:{
      flex:1,
      marginLeft:30,
      textAlign:'center',
      fontSize:18,
      color:'#2B292A',
      fontWeight:'bold'
    },
    setimage:{
      width:30,
      height:30,
    }
  });
  