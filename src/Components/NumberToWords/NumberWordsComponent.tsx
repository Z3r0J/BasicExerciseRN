import React, { useState } from 'react'
import { Text, View,useColorScheme,Alert,TextInput,TouchableOpacity } from 'react-native'
import { receiveTheme } from '../../helpers/Styles';
import { NumberToWords } from '../../Logic/NumberToWords';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const NumberWordsComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [number,setNumber] = useState(0);
  const [result,setResult]=useState('');
  const numToWords = new NumberToWords();

  return (
    <View style={{padding:"3%"}}>
      <Text style={receiveTheme(isDarkMode).textStyle}>Numero a traducir (1-1000): </Text>
        <TextInput 
        style={receiveTheme(isDarkMode).inputStyle}
        keyboardType={'numeric'}
        onChangeText = {(e)=>{setNumber(Number(e));}}
        />
        <TouchableOpacity style={receiveTheme(isDarkMode).buttonStyle} onPress={()=>setResult(numToWords.toWords(number))}>
          <Text style={receiveTheme(isDarkMode).buttonTextStyle}><IonIcon name='language' size={23}/> Traducir</Text>
        </TouchableOpacity>
        {result.length>0?<View style={receiveTheme(isDarkMode).listStyle}><Text style={receiveTheme(isDarkMode).itemLetter}><IonIcon name='language' size={18} color={isDarkMode?'#0ECB9D':'#0DC195'}/>    {result}</Text></View>:""}
    </View>
  )
}
