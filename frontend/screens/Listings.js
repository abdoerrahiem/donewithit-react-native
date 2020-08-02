import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import routes from '../navigation/routes'
import { getListings } from '../api/listings'
import AppText from '../components/Text'
import Button from '../components/Button'
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi'

const Listings = ({ navigation }) => {
  const { data: listings, error, loading, request: loadListings } = useApi(
    getListings
  )

  useEffect(() => {
    loadListings()
  }, [])

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Oops. There is something wrong!</AppText>
            <Button title='Refresh' onPress={loadListings} />
          </>
        )}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={`$${item.price}`}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
})

export default Listings
