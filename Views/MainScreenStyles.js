import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
  parent : {
    flex:1,
    backgroundColor:'black',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  display : {
    padding:10,
    width:'100%',
    marginBottom:10,
  },
  result : {
    textAlign:'right',
    fontSize:28,
    color:'white'
  },
  buttons_parent : {
    width:'100%',
    height:"65%",
    backgroundColor:'#4e5d74',
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  buttons_row : {
    width:'100%',
    height:'20%',
    display:'flex',
    flexDirection:'row',
  },
  button:{
    width:'25%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  button_type1 : {
    color:"#00FFF6",
    fontSize:28
  },
  button_type2 : {
    color:"white",
    fontSize:28
  },
});