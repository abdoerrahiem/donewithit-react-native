import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null

  return (
    <View style={styles.overlay}>
      <LottieView
        source={require('../assets/animation/loader.json')}
        autoPlay
        loop
      />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1,
    opacity: 0.8,
  },
})

export default ActivityIndicator
