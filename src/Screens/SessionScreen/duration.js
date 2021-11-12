import React,{useState} from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from './style';
import useInterval from './useinterval';
function Duration({isJoined,duration,setDuration}) {    
    useInterval(()=>{
        console.log(duration);
        setDuration(duration+1);
    },isJoined?1000:null)
    const changetime = (duration) => {
        let hour = parseInt(duration / 3600) < 10 ? '0' + parseInt(duration / 3600) : parseInt(duration / 3600);
        let min = parseInt((duration % 3600) / 60) < 10 ? '0' + parseInt((duration % 3600) / 60) : parseInt((duration % 3600) / 60);
        let sec = duration % 60 < 10 ? '0' + duration % 60 : duration % 60;
        return hour != '00' ? `${hour}:${min}:${sec}` : `${min}:${sec}`
    }
    return (        
        <View style={styles.durationbox}>
            <View style={styles.durationView}>
                <View style={styles.round}/>
                <Text style={styles.txtmr}>{isJoined?changetime(duration):`00:00`}</Text>                    
            </View>
        </View>    
    );
}
export default Duration;
