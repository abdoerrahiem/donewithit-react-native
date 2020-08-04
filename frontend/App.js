import React, { useState, useEffect, createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
import { AsyncStorage } from 'react-native'
import jwtDecode from 'jwt-decode'
import { AppLoading, Notifications } from 'expo'

import AuthNavigator from './navigation/AuthNavigation'
import navigationTheme from './navigation/navigationTheme'
import AppNavigator from './navigation/AppNavigator'
import { Button } from 'react-native'
import OfflineNotice from './components/OfflineNotice'
import AuthContext from './auth/context'
import { getUser } from './auth/storage'
import { navigationRef } from './navigation/rootNavigation'
import Screen from './components/Screen'

const App = () => {
  const [user, setUser] = useState(null)
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await getUser()
    if (user) setUser(user)
  }

  // useEffect(() => {
  //   restoreToken()
  // }, [])
  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    )

  const showNotification = () => {
    Notifications.scheduleLocalNotificationAsync(
      {
        title: 'Congratulations',
        body: 'Your order was successfully placed!',
        data: {
          _displayInForeground: true,
        },
      },
      {
        time: new Date().getTime() + 2000,
      }
    )
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
    // <Screen>
    //   <Button title='Tap me' onPress={showNotification} />
    // </Screen>
  )
}

export default App
