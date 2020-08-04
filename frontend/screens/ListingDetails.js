import React from 'react'
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native'
import { Image } from 'react-native-expo-image-cache'

import Text from '../components/Text'
import { ListItem } from '../components/lists'
import colors from '../config/colors'
import ContactSellerForm from '../components/ContactSellerForm'
import Screen from '../components/Screen'

const ListingDetails = ({ route: { params } }) => {
  const listing = params

  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior='padding'
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
        >
          <Image
            style={styles.image}
            uri={listing.images[0].url}
            preview={{ uri: listing.images[0].thumbnailUrl }}
            tint='light'
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{listing.title}</Text>
            <Text style={styles.subtitle}>${listing.price}</Text>
            <View style={styles.userContainer}>
              <ListItem
                image={require('../assets/abdoerrahiem.jpg')}
                title='Abdur Rahim'
                subtitle='5 Listings'
              />
            </View>
            <ContactSellerForm listing={listing} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    //paddingVertical: 5,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5,
  },
  userContainer: {
    marginVertical: 30,
  },
  screen: {
    // backgroundColor: colors.light,
  },
})

export default ListingDetails
