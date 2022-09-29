import { StyleSheet } from 'react-native'

export const receiveTheme = (isDarkMode:boolean)=>{
    return StyleSheet.create({
        inputStyle:{
          color:"#000000",
          backgroundColor:"#ffffff",
          borderColor:"#0ECB9D",
          borderStyle:"solid",
          borderWidth:1,
          borderRadius:6,
          fontSize:18,
          
        },
        textStyle:{
          margin:"2%",
          fontSize:14,
          fontWeight:"700",
          color:isDarkMode?"white":"black"
        },
        buttonStyle:{
          height:"18%",
          marginTop:"6%",
          backgroundColor:"#0ECBBD",
          borderWidth:1,
          borderStyle:'solid'
        },
        buttonTextStyle:{
            margin:"2%",
            fontSize:22,
            fontWeight:"700",
            color:isDarkMode?"white":"black"
        }
      });
}