import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Text,
    SafeAreaView,
    Image,
    View,    
} from 'react-native';
import styles from './style';
import { useSelector } from "react-redux";
import { useIntl } from "react-intl";
import Header from '../../Components/headers';
import SelectLangs from '../../Components/SelectLangs';
import post from '../../utils/axios';
function SettingScreen({navigation}) {    
    const lang = useSelector((state) => state.LangsReducer.langs);
    const { messages } = useIntl();
    const [isopen,setIsopen] = useState(false); 
    const [tos,setTos] = useState('');
    const [privacy,setPrivacy] = useState('');
    useEffect(() => {
        async function getAgree(){
            const formdata = new FormData();
            formdata.append('set_lang',lang);
            const tosresult = await post('/api/agree1.php',formdata);
            const privacyresult = await post('/api/agree2.php',formdata);
            setTos(tosresult);
            setPrivacy(privacyresult);
        }        
        getAgree();
    }, [lang])
    return (
        <SafeAreaView style={styles.container}>
            <SelectLangs isopen={isopen} setIsopen={setIsopen}/>
            <Header title={messages.tos} navigation={navigation}/>
                <View style={styles.wrap}>
                    <View style={styles.content}>
                    <TouchableOpacity style={styles.contentbox} onPress={()=>navigation.push('Tos',{type:'tos',content:tos.data})}> 
                            <Text style={styles.tit}>{messages.tos}</Text>
                            <Image source={require('../../assign/img/arrow.png')} style={styles.arrow}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                    <TouchableOpacity style={styles.contentbox} onPress={()=>navigation.push('Tos',{type:'privacy',content:privacy.data})}>
                            <Text style={styles.tit}>{messages.privacysettitle}</Text>
                            <Image source={require('../../assign/img/arrow.png')} style={styles.arrow}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                    <TouchableOpacity style={styles.contentbox} onPress={()=>setIsopen(true)}> 
                            <Text style={styles.tit}>{messages.lang}</Text>
                            <Image source={require('../../assign/img/arrow.png')} style={styles.arrow}/>
                        </TouchableOpacity>
                    </View>
                </View>
             
        </SafeAreaView>
    );
}
export default SettingScreen;
