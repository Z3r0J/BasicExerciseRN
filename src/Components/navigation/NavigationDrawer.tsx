import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import {useColorScheme} from 'react-native'
import { Text } from 'react-native-elements';
import { HomeComponent } from '../HomeComponent/HomeComponent';
import { MultiplicationComponent } from '../MultiplyComponent/MultiplicationComponent';
import { NumberWordsComponent } from '../NumberToWords/NumberWordsComponent';
import { SumComponent } from '../SumComponent/SumComponent';
import { DrawerCustom } from './DrawerCustom';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const NavigationDrawer = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Drawer.Navigator 
    initialRouteName='HomeComponent' 
    drawerContent={(props)=>{return <DrawerCustom {...props}/>}} 
    screenOptions={{headerTintColor:isDarkMode?'rgb(255,255,255)':'rgb(0,0,0)',drawerLabelStyle:{marginLeft:-23}}}>
        <Drawer.Screen name='Inicio' component={ HomeComponent } options={{drawerIcon:()=>{return <IonIcon name='home-outline' size={20} color={isDarkMode?'rgb(14,253,107)':'#0DC195'}/>}}}/>
        <Drawer.Screen name='Sumadora' component={ SumComponent } options={{drawerIcon:()=>{return <IonIcon name='md-add-circle-sharp' size={20} color={isDarkMode?'rgb(14,253,107)':'#0DC195'}/>}}}/>
        <Drawer.Screen name='Tabla de Multiplicación' component={ MultiplicationComponent } options={{drawerIcon:()=>{return <IonIcon name='list' size={20} color={isDarkMode?'rgb(14,253,107)':'#0DC195'}/>}}}/>
        <Drawer.Screen name='Numeros a Letras' component={ NumberWordsComponent } options={{drawerIcon:()=>{return <IonIcon name='language' size={20} color={isDarkMode?'rgb(14,253,107)':'#0DC195'}/>}}}/>
    </Drawer.Navigator>
  )
}
