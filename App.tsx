/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { NavigationContainer,DefaultTheme,DarkTheme } from '@react-navigation/native';
import { NavigationDrawer } from './src/Components/navigation/NavigationDrawer';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const MyLightTheme ={
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary: 'rgb(13,193,149)'
    }
  }

  const MyDarkTheme = {
    ...DarkTheme,
    colors:{
      ...DarkTheme.colors,
      primary: 'rgb(14,253,107)',
      border:'rgb(189,157,120)'
    }
  }

  return (
    <NavigationContainer theme={isDarkMode?MyDarkTheme:MyLightTheme}>
      <NavigationDrawer/>
    </NavigationContainer>
  );
};

export default App;
