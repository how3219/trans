import {StyleSheet,Dimensions} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor:"#FFFFFF",
    },  
    wrap:{
        alignItems:"center",
    },
    conftit:{
        color:"#2B292A",
        fontSize:18,
        fontWeight:'bold',
        marginBottom:height*0.004,
        marginTop:height*0.04
    },
    confsub:{
        color:'#A1A1A1',
        fontSize:14,
        fontWeight:'600',
        marginBottom:height*0.06
    },
    inputgroup:{
        paddingHorizontal:height*0.0216,
        marginBottom:height*0.06,
    },
    input:{
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#555555',
        height: height*0.065,
        paddingVertical: height*0.021,
        color: '#AAAAAA',
        marginBottom:height*0.027,
    },
    errorbox:{
        height:30,        
        justifyContent:"center",
        alignItems:'center',
    },
    error:{
        fontSize:14,
        color:"#F35174",
        marginLeft:10
    },
    btn:{
        height:50,
        backgroundColor:'#F35174',
        marginHorizontal:height*0.0216,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center',
        marginTop:height*0.054
    },
    pressTxt:{
        color:'white',
        fontSize:16,
        fontWeight:"bold"
    },
    borderbtn:{
        marginTop:height*0.0135,
        height:50,
        borderColor:'#F35174',
        borderWidth:1,
        marginHorizontal:height*0.0216,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center',
    },
    borderbtnTxt:{
        color:"#F35174",
        fontSize:16,
        fontWeight:'bold'
    },
    pwfindbtn:{
        height:50,
        backgroundColor:'#F35174',
        marginHorizontal:height*0.0216,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center',
        marginTop:height*0.027,
    },
   
    nextbtn:{
        position:'relative',
        width:width*0.296,
        height:height*0.165,
    },
    btnbox:{
        alignItems:'center'
    },
    textbox:{
        position:'absolute',      
        top:'50%',
        transform:[
            {translateY:-11}
        ]
    },
    btntext:{
        color:'white',
        fontSize:17,       
    },
    custombtn:{
        justifyContent:'center',
        alignItems:'center'
    }
  });
  