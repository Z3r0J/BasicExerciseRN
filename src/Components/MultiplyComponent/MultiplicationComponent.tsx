import React from 'react'
import { View,Text,TextInput,useColorScheme,TouchableOpacity } from 'react-native'
import { receiveTheme } from '../../helpers/Styles'
import IonIcon from 'react-native-vector-icons/Ionicons'

export const MultiplicationComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{padding:"3%"}}>
        <Text style={receiveTheme(isDarkMode).textStyle}>Numero a generar: </Text>
        <TextInput 
        style={receiveTheme(isDarkMode).inputStyle}
        keyboardType={'numeric'}
        />
        <TouchableOpacity style={receiveTheme(isDarkMode).buttonStyle}>
          <Text style={receiveTheme(isDarkMode).buttonTextStyle}><IonIcon name='list' size={23}/> Generar</Text>
        </TouchableOpacity>
    </View>
  )
}
