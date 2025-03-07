import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Register from '../screens/Register'

const Stack = createStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Welcome'
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Register' component={Register} />
  </Stack.Navigator>
)

export default AuthNavigator
