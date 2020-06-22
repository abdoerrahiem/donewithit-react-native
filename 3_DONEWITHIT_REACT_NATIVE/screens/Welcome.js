import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
} from 'react-native'

import Button from '../components/Button'

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={10}
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title='Login' onPress={() => navigation.navigate('Login')} />
        <Button
          title='Register'
          color='secondary'
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: 20,
    marginTop: (Platform.OS = 'android' ? StatusBar.currentHeight : 0),
  },
  tagline: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 10,
  },
})

export default Welcome
