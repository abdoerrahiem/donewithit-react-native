import React, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import colors from '../config/colors'

const ImageInput = ({ imageUri, onChangeImage }) => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()

    if (!granted) alert('You have to enable permission to access the library!')
  }

  useEffect(() => {
    requestPermission()
  }, [])

  const handlePress = () => {
    if (!imageUri) {
      selectImage()
    } else {
      return Alert.alert(
        'Delete',
        'Are you sure you want to delete this photo?',
        [{ text: 'Yes', onPress: () => onChangeImage(null) }, { text: 'No' }]
      )
    }
  }

  const selectImage = async () => {
    try {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      })

      if (!cancelled) {
        onChangeImage(uri)
      }
    } catch (err) {
      console.log('Error reading an image', err)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons
            color={colors.medium}
            name='camera'
            size={40}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default ImageInput
