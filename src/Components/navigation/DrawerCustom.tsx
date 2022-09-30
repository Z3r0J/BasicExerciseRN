import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { View,Text,useColorScheme,Image } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { receiveTheme } from '../../helpers/Styles'

export const DrawerCustom = (props:any) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={receiveTheme(isDarkMode).menuViewStyle}>
            <View style={{padding:15}}>
                <IonIcon name='calculator' size={60} color={isDarkMode?'#0ECB9D':'#0DC195'}/>
            </View>
            <View>
            <Text style={receiveTheme(isDarkMode).menuTextStyle}>Menu</Text>
            <Text style={receiveTheme(isDarkMode).menuMiniTextStyle}>Jean Carlos Reyes</Text>
            </View>
            </View>
            <View style={{flexDirection:'column',paddingTop:20}}>
            <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
    </View>
  )
}
