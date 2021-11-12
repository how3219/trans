import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Dimensions
} from 'react-native';
import styles from './style';
const soundWidth = ((Dimensions.get('window').width-18)-48)/4;
const viewCnt = parseInt(soundWidth);
const viewvalue = 255/viewCnt;
function Sound({volume}) {
    const [viewArray,setViewArray] = useState(new Array(viewCnt).fill(0));
    useEffect(() => {
        let array = new Array(viewCnt).fill(0);
        for(let i=0; i<viewCnt; i++){
            array[i] = parseInt(viewvalue*(i+1));
        }
        setViewArray(array);           
    }, [])
    return (        
        <View style={styles.soundbox}>
            <Image source={require('../../assign/img/ic_vol.png')} style={styles.soundimg}/>
            <View style={styles.soundView}>
                {
                    viewArray?.map((row,idx)=>{
                        return(
                            <View style={row>volume?styles.bar:styles.activebar} key={idx}/>
                        )
                    })
                }
            </View>
        </View>
    );
}
export default Sound;