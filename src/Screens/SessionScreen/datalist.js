import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    FlatList,
    Image,
    Platform,
    PermissionsAndroid
} from 'react-native';
import styles from './style';
import RNFetchBlob from 'rn-fetch-blob';
import FileViewer from 'react-native-file-viewer';
// const dirs = Platform.OS=='android'?RNFetchBlob.fs.dirs.DownloadDir:RNFetchBlob.fs.dirs.DocumentDir;
const dirs = RNFetchBlob.fs.dirs.DocumentDir;
function Datalist({data}) {
    const [datalist,setDataList] = useState([]);    
    useEffect(() => {
        filecheck();
    }, [])
    
    const filecheck = async() => {
        let check = Object.assign([],data);
        for(let i=0; i<data.length; i++){
            await RNFetchBlob.fs.exists(dirs+'/moritranslate/'+data[i].file_name).then((exits)=>{
                check[i].check = exits;
            })
        }     
        setDataList(check)      
    }
    const readfile  = (file) => {
        FileViewer.open(`${dirs}/moritranslate/${file}`)
    }

    const download = (file) => {
        if(file){
           let options = Platform.select({                                
                android : {
                    fileCache: true,
                    useDownloadManager : true,
                    notification : true,
                    mediaScannable: true,
                    title : file.file_name,
                    path: dirs + '/moritranslate/' + file.file_name,
                    description : file.file_name
                },
                ios:{
                    fileCache: true,
                    title: file.file_name,
                    path: dirs + '/moritranslate/' + file.file_name,
                }
            })
            RNFetchBlob.config(options)
            .fetch('GET',file.file_link)
            .then((res)=>{
                if(res.data){
                    setTimeout(() => {
                        filecheck();    
                    });                
                }
            })
            .catch((err) => {console.warn('error' + err)})
        }
    }
    const renderItem = ({item}) =>(         
        <View style={styles.seslistwrap}>
            <View style={styles.seslist}>
                <View style={styles.databox}>
                    <Text style={styles.lang}>{item.file_name}</Text>
                    <Text style={styles.volume}>{'8MB'}</Text>
                </View>
                {item?.check?
                <TouchableOpacity onPress={()=>readfile(item.file_name)}>
                <Image source={require('../../assign/img/ic_paper.png')} style={styles.sesplay}/>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={()=>download(item)}>
                    <Image source={require('../../assign/img/ic_download.png')} style={styles.sesplay}/>
                </TouchableOpacity>}
            </View>
        </View>
   );
    return (        
        <FlatList
            data={datalist}
            keyExtractor={(item,index) => index}
            renderItem={(item)=>renderItem(item)}/>
    );
}
export default Datalist;