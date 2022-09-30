import React,{useState,useEffect} from 'react'
import { Text, View,TextInput,Alert, TouchableOpacity,useColorScheme } from 'react-native'
import { receiveTheme } from '../../helpers/Styles';
import Icon from 'react-native-vector-icons/Ionicons'
import { SumTwoNumber } from '../../Logic/SumTwoNumber';

export const SumComponent = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const [firstNumber,setFirstNumber] = useState(0);
  const [secondNumber,setSecondNumber] = useState(0);
  const [result,setResult]=useState('');
  const sumar = new SumTwoNumber();

  const error=()=>{
    return (firstNumber.toString() === 'NaN' || secondNumber.toString() ==='NaN')? true:false;
  }

  if(error()){
    Alert.alert('Solo numeros no letras o simbolos');
  }
  
  

  return (
    <View style={{padding:"3%"}}>
      <Text style={receiveTheme(isDarkMode).textStyle}>Primer Numero: </Text>
        <TextInput
        keyboardType='number-pad' style={receiveTheme(isDarkMode).inputStyle} 
        onChangeText={(e)=>{setFirstNumber(Number(e))}}/>
    
        <Text style={receiveTheme(isDarkMode).textStyle}>Segundo Numero: </Text>
        <TextInput
        keyboardType='number-pad' style={receiveTheme(isDarkMode).inputStyle} 
        onChangeText={(e)=>{setSecondNumber(Number(e))}}/>

        <TouchableOpacity style={receiveTheme(isDarkMode).buttonStyle} onPress={()=>{!error()?setResult(sumar.sumNumber(firstNumber,secondNumber)):""}}>
          <Text style={receiveTheme(isDarkMode).buttonTextStyle}><Icon name='md-add' size={24}/>Sumar</Text>
        </TouchableOpacity>

        {result.length>0?<Text style={receiveTheme(isDarkMode).textResultStyle}>{result}</Text>:""}
    </View>
  )
}
