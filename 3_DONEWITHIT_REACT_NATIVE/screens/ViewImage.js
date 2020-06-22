import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const ViewImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color={colors.white} size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          color={colors.white}
          size={30}
        />
      </View>
      <Image style={styles.image} source={require('../assets/chair.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 10,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 10,
    right: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    marginTop: 100,
    width: '100%',
    height: '70%',
  },
})

export default ViewImage
