import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import Text from '../components/Text'
import { ListItem } from '../components/lists'
import colors from '../config/colors'

const ListingDetails = ({ route: { params } }) => {
  const listing = params

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
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
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: '#fff'
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
})

export default ListingDetails
