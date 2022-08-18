import { StyleSheet, Text, View , Button, Alert , TextInput , Image ,TouchableOpacity, AppRegistry} from 'react-native';
import {Audio} from'expo-av';

const Clock = ({time,setTime}) => {
const options = ['-1','1','2','3','4','5','5+']  
const sound = require('./../assets/Selection.wav')

const Boop = async()=>{
    let soundObj = new Audio.Sound()
    try {
      await soundObj.loadAsync(sound)
      await soundObj.playAsync().then(()=>{setTimeout(()=>{soundObj.unloadAsync()},1000)})
    } catch (error) {
      console.log(error)
    }
};
  return (    
<View style={clockStyle.container}>
    <Text style={clockStyle.text}>The Numbers represent hours (60m)</Text>   
    {options.map((button , index)=>{
        return(
            <TouchableOpacity activeOpacity={0.5} key={index} style={clockStyle.buttons} onPress={()=>{Boop();setTime(button);}} ><Text style={clockStyle.buttonsText}>{button}</Text></TouchableOpacity>
        )
    })}
   <Text style={clockStyle.textSelected}>Selected: {time}
   <Image 
        source={require('./../assets/clock.png')}
        style={clockStyle.miniImage}/></Text>
</View>
  )
};
export default Clock;

const clockStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'stretch'
    },
    text:{
        position:'absolute',
        top:0,
        left:40,
        fontWeight:'bold',
        padding:16,
        borderRadius:50,
        backgroundColor:'#ffb3ff'
    },
    buttons:{
        backgroundColor:'#3333ff',
        margin:5,
        padding:8,
        alignItems:'stretch', 
        borderRadius:16  
    },
    buttonsText:{
        color:'white',
        fontWeight:'bold',
        alignSelf:'center',
    },
    buttonPicked:{
        backgroundColor:'#660044',
        margin:5,
        padding:10,
        alignItems:'stretch', 
        borderRadius:16
    },
    textSelected:{
        alignSelf:'center',
        top:50,
        fontSize:20,
        fontFamily:'monospace',
    },
    miniImage:{
        width:20,
        height:20,
        marginLeft:20  
    }
})