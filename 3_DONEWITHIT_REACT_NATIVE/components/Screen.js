import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constant from 'expo-constants'

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
  view: {
    flex: 1,
  },
})

export default Screen
