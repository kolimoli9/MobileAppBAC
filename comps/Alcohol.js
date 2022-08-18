import { useContext, useState } from 'react';
import { StyleSheet, Text, View , Button, Alert , TextInput , Image ,TouchableOpacity, AppRegistry} from 'react-native';
import {Audio} from'expo-av';


const Alcohol = ({alcohol , setAlcohol}) => {
  const [Corona, setCorona] = useState(false)
  const [Hiniken, setHiniken] = useState(false)
  const [Vodka, setVodka] = useState(false)
  const [Wine, setWine] = useState(false)
  const [ammount, setAmmount] = useState(0)

const setDrink=(e)=>{
    if(e==='corona'){setHiniken(false);setVodka(false);setWine(false);setCorona(true); setAlcohol({type:'beer',size:300})}
    if(e==='hiniken'){setCorona(false);setVodka(false);setWine(false);setHiniken(true);setAlcohol({type:'beer',size:500})} 
    if(e==='vodka'){setHiniken(false);setCorona(false);setWine(false);setVodka(true); setAlcohol({type:'vodka',size:43})}
    if(e==='wine'){setVodka(false);setHiniken(false);setCorona(false);setWine(true); setAlcohol({type:'wine',size:187.5})}
  };
const TuchSound = require('./../assets/Selection.wav') 
const PlusSound = require('./../assets/plus.wav') 
const MinusSound = require('./../assets/minus.wav')
const Boop = async(sound)=>{
    let soundObj = new Audio.Sound()
    try {
      await soundObj.loadAsync(sound)
      await soundObj.playAsync().then(()=>{setTimeout(()=>{soundObj.unloadAsync()},1000)})
    } catch (error) {
      console.log(error)
    }
};
const increment =()=>{
  let temp = alcohol
  temp.amount = ammount+1
  setAlcohol(temp)
} 
const dicrement =()=>{
  let temp = alcohol
  temp.amount = ammount-1
  setAlcohol(temp)
} 

  return (
    
    <View style={alcoholStyle.row}>
      
      <View style={alcoholStyle.colum}>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={()=>{setDrink('corona'); Boop(TuchSound)}}>
        <Image 
        source={require('./../assets/corona1.jpg')}
        style={Corona ?  alcoholStyle.chosen:alcoholStyle.imagesL}
        /><Text style={{color:'white',marginLeft:50}}>300 ml</Text></TouchableOpacity>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={()=>{setDrink('hiniken'); Boop(TuchSound)}}>
        <Image 
        source={require('./../assets/heiniken.jpg')}
        style={Hiniken ?  alcoholStyle.chosen:alcoholStyle.imagesL}
        /><Text style={{color:'white',marginLeft:50}}>500 ml</Text></TouchableOpacity>
  
      </View>
      
      <View style={alcoholStyle.colum}>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={()=>{setDrink('vodka'); Boop(TuchSound)}}>
        <Image 
        source={require('./../assets/vodka.jpeg')}
        style={Vodka ?  alcoholStyle.chosen:alcoholStyle.imagesR}
        /></TouchableOpacity>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={()=>{setDrink('wine'); Boop(TuchSound)}}>
        <Image 
        source={require('./../assets/wine.png')}
        style={Wine ?  alcoholStyle.chosen:alcoholStyle.imagesR}
        /></TouchableOpacity>
      </View>
      {Corona|Hiniken|Wine|Vodka ? (
            <View style={alcoholStyle.ammountView}>
              <TouchableOpacity activeOpacity={0.5} disabled={ammount===0} onPress={()=>{setAmmount((ammount-1)); Boop(MinusSound);dicrement();}}><Text style={alcoholStyle.PandM}>-</Text></TouchableOpacity>
              <TouchableOpacity ><Text style={alcoholStyle.num}>{ammount}</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={()=>{setAmmount((ammount+1)); Boop(PlusSound);increment()}}><Text style={alcoholStyle.PandM}>+</Text></TouchableOpacity>
            </View>):('')}
            {Corona|Hiniken ? (<Text style={alcoholStyle.label}>Bottels / Cups</Text>):(<Text style={alcoholStyle.label}>Glass / Shots</Text>)}
            
    </View>
    
  )
}

export default Alcohol

const alcoholStyle = StyleSheet.create({
    row:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:4,
    },
    colum:{
        flex:1,
        flexDirection:'column',
        flexBasis:'50%',
        paddingLeft:10, 
    },
    imagesL:{
        height:150,
        width:130,
        marginBottom:5,
        borderRadius:20
    },
    imagesR:{
      height:150,
      width:130,
      marginBottom:25,
      borderRadius:20
  },
    chosen:{
      height:150,
      width:130,
      marginBottom:20,
      borderRadius:20,
      borderWidth:4,
      borderColor:'#66a3ff'
    },
    ammountView:{
      flex:1,
      flexDirection:'row',
      position:'absolute',
      bottom:20,
      left:95,
      alignItems:'center'
    },
    PandM:{
      backgroundColor:'#33ccff',
      color:'#ff66ff',
      borderRadius:50,
      fontSize:30,
      fontWeight:"bold",
      paddingHorizontal:13,
      paddingVertical:2,
      margin:10
    },
    num:{
      fontSize:20,
    },
    label:{
      fontFamily:'sans-serif',
      color:'#0000ff' ,
      position:'absolute',
      bottom:0,
      left: 135,
      fontSize:10
    }

    
})
