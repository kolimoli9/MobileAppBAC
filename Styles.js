import {StyleSheet} from 'react-native';
export  const styles = StyleSheet.create({
    // Screen
      screen:{
        flex:1,
        backgroundColor: 'black',
      },
    // Active Component div
      main: {
        flex:1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 40,
        margin: 10,
        borderWidth:2,
      },
      containerComp:{
        borderWidth:2,
        width:350,
        height:450,
        backgroundColor:'#ff66ff',
        borderRadius:12,
      },
      containerPbar:{
        borderColor:'red',
        borderWidth:2,
        position:'absolute',
        top:5,
        height:'auto',
        width:'90%'
      },
      containerAlertBox:{
        borderColor:'red',
        borderWidth:2,
        position:'absolute',
        top:80,
        height:'auto',
        width:'auto',
      },
    
    // Nav
      bar:{
        flex:1,
        backgroundColor: 'black',
        flexDirection:'row',
        position:'absolute',
        bottom:0,
      },
      barButtons:{
        backgroundColor:'#ff66ff',
        margin:10,
        padding:25,
        borderRadius:7,    
      },
      tuchable:{
        width:50,
        height:50,
        borderRadius:50, 
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
      img: {
        height:46,
        width:46,
        backgroundColor:'#ff66ff',
        borderRadius:23
      }
    });