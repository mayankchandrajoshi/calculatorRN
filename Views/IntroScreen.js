import { View, Text,Image ,StyleSheet} from 'react-native'
import React from 'react'
import logo from '../assets/CalculatorLogo.png'

const IntroScreen = () => {
  return (
    <View style={styles.parent}>
       <Image source={logo} style={styles.img}/>
       <Text style={styles.text}>Calculator</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  parent:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#4e5d74',
  },
  img:{
    width:80,
    height:80
  },
  text:{
    fontSize:20,
    color:"white",
    marginTop:5,
    fontWeight:'600'
  }
})

export default IntroScreen