import { StyleSheet, Text, View , Alert  ,TouchableOpacity, ScrollView} from 'react-native';
import {Audio} from'expo-av';

const Scale = ({weight,setWeight}) => {
const rangeMap = []    
let range = 120
let count = 19
while(range!==20){
    count++;
    rangeMap.push(count);
    range-=1
};
const Beep =async()=>{
  let TuchSound = require('./../assets/Selection.wav')  
  let soundObj = new Audio.Sound()
  try {
    await soundObj.loadAsync(TuchSound);
    await soundObj.playAsync().then(()=>{setTimeout(()=>{soundObj.unloadAsync()},1000)});
  } catch (error) {
    console.log(error)
  }
}

return (
    <View style={scaleStyle.container}>
        <ScrollView style={scaleStyle.scrollView}>
            {rangeMap.map((num , i)=>{
                let picked = '#66a3ff'
                return(
                <TouchableOpacity key={i} onPress={()=>{Beep();setWeight(num)}} style={scaleStyle.tuchable}><Text style={{
                    flex:1,
                    alignSelf:'center',
                    padding:20,
                    fontFamily:'serif',
                    color:'white',
                    paddingLeft: 30,
                    paddingRight:30,
                    borderRadius:40 
            }}>{num}kg</Text></TouchableOpacity>
            )})}
      </ScrollView>
     <View style={scaleStyle.selectionContainer}><Text style={{color:'white',paddingTop:5,fontSize:30,borderRadius:30,paddingBottom:5, fontWeight:'bold'}}>{weight} kg</Text></View>
    </View>
  )
}

export default Scale;

const scaleStyle=StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20,
        marginBottom:20,
        justifyContent:'center'
      },
      scrollView: {
        backgroundColor: '#ff66ff',
        marginHorizontal: 20,
        borderRadius:12,
      },
      tuchable:{
        backgroundColor:'blue',
        margin:5,
        padding:8,
        alignItems:'stretch', 
        borderRadius:12, 
      },
      selectionContainer:{
        position:'relative',
        bottom:0,
        justifyContent:'center',
        alignItems:'center'
      }
})