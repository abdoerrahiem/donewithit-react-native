import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Text from './Text'
import Screen from './Screen'
import PickerItem from './PickerItem'
import defaultStyles from '../config/styles'

const Picker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
  width = '100%',
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
}) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false)
                  onSelectItem(item)
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.medium,
  },
})

export default Picker
