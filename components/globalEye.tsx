import React from "react"
import {Image, StyleSheet, View} from 'react-native'

const GlobalEye: React.FC = (props: any) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/globalEye.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignContent: "center",
    justifyContent: "center",
  },

  // text:{
  //   alignContent: "center",
  //   justifyContent: "center",
  //   color: "antiquewhite"
  // },

  logo:{
    width: 25, 
    height: 25,
    marginRight:15
  }
})

export default GlobalEye;