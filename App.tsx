import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { styles } from './Styles'
import {  Text, View , Button, Alert , TextInput , Image ,TouchableOpacity} from 'react-native';
import Alcohol from './comps/Alcohol';
import Clock from './comps/Clock'
import AppStateProvider, { AlcoholStateContext, TimeContext, WeightContext } from './AppStateProvider';
import {Audio} from'expo-av';
import Home from './comps/Home';
import Scale from './comps/Scale';
import ProgresBar from './comps/ProgresBar';

export default function App() {
  const [home, setHome] = useState(true)
    const [a, setA] = useState(false)
    const [b, setB] = useState(false)
    const [c, setC] = useState(false)

  const setBulk = (e: string)=>{
    if(e==='a'){setB(false);setC(false);setHome(false);setA(true)};
    if(e==='b'){setA(false);setC(false);setHome(false);setB(true)};
    if(e==='c'){setB(false);setA(false);setHome(false);setC(true)}
  };  
  const alcoholeContext = useContext(AlcoholStateContext)
  const timeContext = useContext(TimeContext)
  const weightContext = useContext(WeightContext)
  const [alcohol, setAlcohol] = useState(alcoholeContext)
  const [time, setTime] = useState(timeContext)
  const [weight, setWeight] = useState(weightContext)
const Beep =async()=>{
    let TuchSound = require('./assets/PositiveUbuntu.mp3')  
    let soundObj = new Audio.Sound()
    try {
      await soundObj.loadAsync(TuchSound);
      await soundObj.playAsync().then(()=>{setTimeout(()=>{soundObj.unloadAsync()},1000)});
    } catch (error) {
      console.log(error)
    }
}

  return (
    <AppStateProvider>
    <View style={styles.screen}>
      <View style={styles.main}>
        <View style={styles.containerPbar}>  
          <ProgresBar weight={weight} alcohol={alcohol} time={time}/>
        </View> 
        <View style={styles.containerAlertBox}>
          <Text style={{color:'white'}}>Alert Box</Text>
        </View>
        
        <View  style={styles.containerComp}>
          {home ? (<Home></Home>):''}
          {a ? (<Alcohol alcohol={alcohol} setAlcohol={setAlcohol}></Alcohol>):''}
          {b ? (<Clock time={time} setTime={setTime}></Clock>):''}
          {c ? (<Scale weight={weight} setWeight={setWeight}></Scale>):''}  
        </View>

        <View style={styles.bar}> 
          <View style={styles.barButtons}>
            <TouchableOpacity style={styles.tuchable} activeOpacity={0.5} onPress={()=>{setBulk('a'); Beep()}}>
              <Image
                source={require('./assets/alcohol.png')}
                style={styles.img}
              /> 
              </TouchableOpacity>
            </View>
            <View style={styles.barButtons}>
            <TouchableOpacity style={styles.tuchable} activeOpacity={0.5} onPress={()=>{setBulk('b'); Beep()}}>
              <Image
                source={require('./assets/clock.png')}
                style={styles.img}
              /> 
              </TouchableOpacity>
            </View>
            <View style={styles.barButtons}>
            <TouchableOpacity style={styles.tuchable} activeOpacity={0.5} onPress={()=>{setBulk('c'); Beep()}}>
              <Image
                source={require('./assets/scale.png')}
                style={styles.img}
              /> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
      <StatusBar style='inverted'/>
    </View>
    </AppStateProvider>
  );
}


