import React from 'react'
import { View, Image,Text,useColorScheme } from 'react-native'
import { receiveTheme } from '../../helpers/Styles';
import { AboutMe } from '../../Logic/AboutMe'
import IonIcon from 'react-native-vector-icons/Ionicons';


export const HomeComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{padding:"3%"}}>
      <Image source={require('../../../assets/images/85190332.jpg')} style={{width:"100%",height:'65%'}}/>
      {AboutMe.map((me)=>{
        return(
          <View style={receiveTheme(isDarkMode).listStyle}>
            <Text key={me.name} style={receiveTheme(isDarkMode).item}><IonIcon name='information-circle-outline' size={22} color={isDarkMode?'#0ECB9D':'#0DC195'}/>  Nombre: {me.name}</Text>
            <Text key={me.enroll} style={receiveTheme(isDarkMode).item}><IonIcon name='information-circle-outline' size={22} color={isDarkMode?'#0ECB9D':'#0DC195'}/>  Matricula: {me.enroll}</Text>
            <Text key={me.teacher} style={receiveTheme(isDarkMode).item}><IonIcon name='information-circle-outline' size={22} color={isDarkMode?'#0ECB9D':'#0DC195'}/>  Profesor: {me.teacher}</Text>
          </View>
        )
      })}
    </View>
  )
}
