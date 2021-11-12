import React, { useState } from 'react';
import {
    Modal,
    Text,
    Image,
    TextInput,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { useIntl } from "react-intl";

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
function Withdrawal({isopen,setIsopen}) {
    const { messages } = useIntl();
    const withdrawalactive = () => {
        setIsopen(false)
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
                    <View style={styles.title}>
                        <Text style={styles.tit}>{messages.Withdrawaltit}</Text>
                        <Text style={styles.des}>{messages.Withdrawaldes}</Text>
                    </View>
                    <View style={styles.selectbox}>
                        <TouchableOpacity style={[styles.btn,{borderRightColor:'#555555',borderRightWidth:1}]} onPress={()=>withdrawalactive()}>
                            <Text style={styles.activetxt}>{messages.Withdrawalactive}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={()=>setIsopen(false)}>
                            <Text style={styles.txt}>{messages.cancle}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
           
        </Modal>
 
    );
}
export default Withdrawal;


const styles=StyleSheet.create({
    container: {
       backgroundColor:"white",
       marginTop: height*0.25,
       marginBottom:height*0.46,
       marginHorizontal:width*0.13,
       borderRadius:7,
       backgroundColor:"#2B292A",
       zIndex:100
    },  
    wrap:{
        paddingTop:20,
        borderRadius:7,
        alignItems:'center',
    },
    text:{
        color:'white',
        fontSize:14,
    },
    tit:{
        fontSize:18,
        color:'white',
        fontWeight:"bold",
        textAlign:'center',
        marginBottom:3
    },
    des:{
        fontSize:14,
        color:"#A1A1A1",
        textAlign:'center',
        marginBottom:20
    },
    selectbox:{
        height:50,        
        flexDirection:'row',
    },
    txt:{
        marginRight:11,
        color:'#555555',
        textAlign:'center'
    },
    activetxt:{
        marginRight:11,
        color:'#F35174',
        textAlign:'center'
    },
    btn:{
        height:'100%',
        width:'50%',
        alignItems:'center',
        justifyContent:"center",
    },
    title:{
        borderBottomColor:'#555555',
        borderBottomWidth:1,
        width:'100%',
    }

  });
  