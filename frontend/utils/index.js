import { AsyncStorage } from 'react-native'
import moment from 'moment'

const prefix = 'cache'
const timeOfExpired = 5

const isExpired = (data) => {
  const currentTime = moment(Date.now())
  const storagedTime = moment(data.timestamp)
  return currentTime.diff(storagedTime, 'minutes') > timeOfExpired
}

export const storeCache = async (key, value) => {
  try {
    const data = {
      value,
      timestamp: Date.now(),
    }
    await AsyncStorage.setItem(`${prefix}${key}`, JSON.stringify(data))
  } catch (err) {
    console.log(err)
  }
}

export const getCache = async (key) => {
  try {
    const res = await AsyncStorage.getItem(`${prefix}${key}`)
    const data = JSON.parse(res)

    if (!data) return null

    if (isExpired(data)) {
      await AsyncStorage.removeItem(`${prefix}${key}`)
      return null
    }

    return data.value
  } catch (err) {
    console.log(err)
  }
}
