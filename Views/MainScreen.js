import { View, Text,ScrollView,Pressable } from 'react-native'
import React,{useState} from 'react'
import styles from './MainScreenStyles'
import {Ionicons} from '@expo/vector-icons'

const MainScreen = () => {

  const [exp,setExp] = useState('123');

  const options = {
    ignoreAndroidSystemSettings: false
  };

  const validChecker=(operator)=>{
    if(exp.charAt(exp.length-1)>=0||exp.charAt(exp.length-1)<=9)setExp(exp=>exp+operator);
    else setExp(exp=>exp.slice(0,exp.length-1)+operator);
  }

  const handleNumInput = (num)=>{
    if(exp=='0'||exp=='00'){
      setExp(exp=>setExp(String(num)));
      return;
    }
    else setExp(exp=>setExp(exp+String(num)));
  }

  const handlePress = (value) =>{
    switch(value){
      case 'C':setExp('0');break;
      case 'x':if(exp!='0'){
                  setExp((exp)=>{
                    if(exp!='0'){
                      if(exp.length>1)return exp.slice(0,exp.length-1)
                      else return '0'
                    }
                    return exp;
                  });
              };break;
      case '%':
      case '/':
      case '*':
      case '-':
      case '+':validChecker(value);break;
      case '=':{
        setExp(exp=>{
          let expression="";
          let included= false;
          for(let i=exp.length-1;i>=0;i--){
            if(exp.charAt(i)=="%" && included)expression+="001/";
            else if(exp.charAt(i)=="%" && !included){
              expression+="*001/";
              included=!included;
            }
            else expression+=exp.charAt(i);
          }
          expression=expression.split("").reverse().join("");
          if(!(expression.charAt(expression.length-1)>=0||expression.charAt(expression.length-1)<=9)){
            expression=expression.slice(0,expression.length-1);
          }
          return String(eval(expression));
        });break;
      }
      case '00':case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:
      case 9:handleNumInput(value);break;
      case '.':if(exp.charAt(exp.length-1)=='.')break;
               setExp(exp=>exp+'.');break;
    }
  }
  
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.display}>
        <Text style={styles.result}>{exp}</Text>
      </ScrollView>
      <View style={styles.buttons_parent}>
        <View style={styles.buttons_row}>
          <Pressable style={styles.button} onPress={()=>handlePress('C')}>
            <Text style={styles.button_type1}>C</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress('%')}>
            <Text style={styles.button_type1}>%</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress('x')}>
            <Text>
               <Ionicons name="backspace-outline" style={styles.button_type1}/>
            </Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress('/')}>
            <Text style={styles.button_type1}>/</Text>
          </Pressable>
        </View>
        <View style={styles.buttons_row}>
          <Pressable style={styles.button}  onPress={()=>handlePress(7)}>
            <Text style={styles.button_type2}>7</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress(8)}>
            <Text style={styles.button_type2}>8</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress(9)}>
            <Text style={styles.button_type2}>9</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress('*')}>
            <Text style={styles.button_type1}>*</Text>
          </Pressable>
        </View>
        <View style={styles.buttons_row}>
          <Pressable style={styles.button} onPress={()=>handlePress(4)}>
            <Text style={styles.button_type2}>4</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress(5)}>
            <Text style={styles.button_type2}>5</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress(6)}>
            <Text style={styles.button_type2}>6</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress('-')}>
            <Text style={styles.button_type1}>-</Text>
          </Pressable>
        </View>
        <View style={styles.buttons_row}>
          <Pressable style={styles.button} onPress={()=>handlePress(3)}>
            <Text style={styles.button_type2}>3</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress(2)}>
            <Text style={styles.button_type2}>2</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress(1)}>
            <Text style={styles.button_type2}>1</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress('+')}>
            <Text style={styles.button_type1}>+</Text>
          </Pressable>
        </View>
        <View style={styles.buttons_row}>
          <Pressable style={styles.button} onPress={()=>handlePress('00')}>
            <Text style={styles.button_type2}>00</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress(0)}>
            <Text style={styles.button_type2}>0</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress('.')}>
            <Text style={styles.button_type2}>.</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>handlePress('=')}>
            <Text style={styles.button_type1}>=</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default MainScreen