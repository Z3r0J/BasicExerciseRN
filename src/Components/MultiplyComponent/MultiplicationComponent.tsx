import React, { useState } from 'react'
import { View,Text,TextInput,useColorScheme,TouchableOpacity,Alert,ScrollView } from 'react-native'
import { receiveTheme } from '../../helpers/Styles'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { MultiplicationTable } from '../../Logic/MultiplicationTable'

export const MultiplicationComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [number,setNumber] = useState(0);
  const [result,setResult] = useState([]);
  const multiply = new MultiplicationTable();
  let index = 1;
  const error=()=>{
    return number.toString() === 'NaN'? true:false;
  }

  if(error()){
    Alert.alert('Solo numeros no letras o simbolos.');
  }

  return (
    <View style={{padding:"3%"}}>
        <Text style={receiveTheme(isDarkMode).textStyle}>Numero a generar: </Text>
        <TextInput 
        style={receiveTheme(isDarkMode).inputStyle}
        keyboardType={'numeric'}
        onChangeText = {(e)=>{setNumber(Number(e));}}
        />
        <TouchableOpacity style={receiveTheme(isDarkMode).buttonStyle} onPress={()=>setResult(multiply.generateTable(number))}>
          <Text style={receiveTheme(isDarkMode).buttonTextStyle}><IonIcon name='list' size={23}/> Generar</Text>
        </TouchableOpacity>
      {result.length>0?
      <ScrollView style={receiveTheme(isDarkMode).listStyle}>
        {result.map((res)=>{
          return(
            <View>
            <Text key={index++} style={receiveTheme(isDarkMode).item}><IonIcon name='ellipse' size={18} color={isDarkMode?'#0ECB9D':'#0DC195'}/>   {res}</Text>
            </View>
          )
        })}
      </ScrollView>
      :""}
    </View>
  )
}
