import client from './client'

export default (token) => client.post('/expoPushTokens', { token })
