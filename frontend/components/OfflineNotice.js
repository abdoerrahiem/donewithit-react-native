import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'
import Text from './Text'
import colors from '../config/colors'

const OfflineNotice = () => {
  const netInfo = useNetInfo()

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    )

  return null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 70,
    // position: 'absolute',
    width: '100%',
    top: Constants.statusBarHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 10,
    zIndex: 1,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
  },
})

export default OfflineNotice
