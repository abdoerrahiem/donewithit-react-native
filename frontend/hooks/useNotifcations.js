import React, { useEffect } from 'react'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import expoPushToken from '../api/expoPushToken'

const useNotifcations = (notificationListener) => {
  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      if (!permission.granted) return

      const token = await Notifications.getExpoPushTokenAsync()
      // console.log(token)
      expoPushToken(token)
    } catch (err) {
      console.log('Error while getting a push token', err)
    }
  }

  useEffect(() => {
    registerForPushNotifications()

    if (notificationListener) Notifications.addListener(notificationListener)
  }, [])
}

export default useNotifcations
