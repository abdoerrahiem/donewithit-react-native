import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import Icon from './Icon'
import Text from './Text'

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={item.icon}
          backgroundColor={item.backgroundColor}
          size={60}
        />
      </TouchableOpacity>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33.5%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
})

export default CategoryPickerItem
