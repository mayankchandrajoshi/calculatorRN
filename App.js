import React,{useState} from 'react';
import { StyleSheet,SafeAreaView,StatusBar } from 'react-native';
import IntroScreen from './Views/IntroScreen'
import MainScreen from './Views/MainScreen'

export default function App() {
  
  const [isLoading,setLoading] = useState(true);
  setTimeout(()=>{
    setLoading(false);
  },2000)
  return (
    <SafeAreaView style={styles.parent}>
       <StatusBar translucent={false} backgroundColor="black"/>
       {isLoading?<IntroScreen/>:<MainScreen/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent:{
    flex:1,
  }
});
