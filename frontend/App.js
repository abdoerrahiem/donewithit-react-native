import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo'
import { AsyncStorage } from 'react-native'
import jwtDecode from 'jwt-decode'
import { AppLoading } from 'expo'

import AuthNavigator from './navigation/AuthNavigation'
import navigationTheme from './navigation/navigationTheme'
import AppNavigator from './navigation/AppNavigator'
import { Button } from 'react-native'
import OfflineNotice from './components/OfflineNotice'
import AuthContext from './auth/context'
import { getUser } from './auth/storage'

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

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App
