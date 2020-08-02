import * as SecureToken from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

const key = 'authToken'

export const storeToken = async (authToken) => {
  try {
    await SecureToken.setItemAsync(key, authToken)
  } catch (err) {
    console.log('Error while storing the auth token', err)
  }
}

export const getToken = async () => {
  try {
    return await SecureToken.getItemAsync(key)
  } catch (err) {
    console.log('Error while getting the auth token', err)
  }
}

export const getUser = async () => {
  const token = await getToken()
  return token ? jwtDecode(token) : null
}

export const removeToken = async () => {
  try {
    await SecureToken.deleteItemAsync(key)
  } catch (err) {
    console.log('Error while removing the auth token', err)
  }
}
