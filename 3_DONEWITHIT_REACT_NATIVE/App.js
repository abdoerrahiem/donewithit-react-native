import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './navigation/AuthNavigation'
import navigationTheme from './navigation/navigationTheme'
import AppNavigator from './navigation/AppNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App
