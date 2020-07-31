import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
import { AsyncStorage } from 'react-native'

import AuthNavigator from './navigation/AuthNavigation'
import navigationTheme from './navigation/navigationTheme'
import AppNavigator from './navigation/AppNavigator'
import { Button } from 'react-native'
import OfflineNotice from './components/OfflineNotice'

const App = () => {
  // const netInfo = useNetInfo()
  // const demo = async () => {
  //   try {
  //     await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }))
  //     const value = await AsyncStorage.getItem('person')
  //     const person = JSON.parse(value)
  //     console.log(person)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // demo()

  // return null

  return (
    // <Button
    //   title='There is connection'
    //   disabled={!netInfo.isInternetReachable}
    // />
    <>
      <OfflineNotice />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  )
}

export default App
