import React, { useEffect } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

import Listings from '../screens/Listings'
import ListingEdit from '../screens/ListingEdit'
import Account from '../screens/Account'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import colors from '../config/colors'
import NewListingButton from './NewListingButton'
import expoPushToken from '../api/expoPushToken'
import { navigate } from './rootNavigation'
import useNotifcations from '../hooks/useNotifcations'

const Tab = createMaterialBottomTabNavigator()

const AppNavigator = () => {
  useNotifcations()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName

          if (route.name === 'Feed') {
            iconName = 'home'
          } else if (route.name === 'Account') {
            iconName = 'account'
          }

          return (
            <MaterialCommunityIcons name={iconName} size={25} color={color} />
          )
        },
      })}
      activeColor={colors.primary}
      barStyle={{ backgroundColor: colors.white }}
    >
      <Tab.Screen name='Feed' component={FeedNavigator} />
      <Tab.Screen
        name='ListingEdit'
        component={ListingEdit}
        options={({ navigation }) => ({
          title: false,
          tabBarIcon: () => (
            <NewListingButton
              onPress={() => navigation.navigate('ListingEdit')}
            />
          ),
        })}
      />
      <Tab.Screen name='Account' component={AccountNavigator} />
    </Tab.Navigator>
  )
}

export default AppNavigator
