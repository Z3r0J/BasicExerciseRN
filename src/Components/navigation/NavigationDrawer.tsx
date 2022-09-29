import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import {useColorScheme} from 'react-native'
import { HomeComponent } from '../HomeComponent/HomeComponent';
import { MultiplicationComponent } from '../MultiplyComponent/MultiplicationComponent';
import { NumberWordsComponent } from '../NumberToWords/NumberWordsComponent';
import { SumComponent } from '../SumComponent/SumComponent';

const Drawer = createDrawerNavigator();

export const NavigationDrawer = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Drawer.Navigator initialRouteName='HomeComponent' screenOptions={{headerTintColor:isDarkMode?'rgb(255,255,255)':'rgb(0,0,0)'}}>
        <Drawer.Screen name='Inicio' component={ HomeComponent }/>
        <Drawer.Screen name='Sumadora' component={ SumComponent }/>
        <Drawer.Screen name='Tabla de Multiplicación' component={ MultiplicationComponent }/>
        <Drawer.Screen name='Numeros a Letras' component={ NumberWordsComponent }/>
    </Drawer.Navigator>
  )
}
