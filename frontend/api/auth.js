import client from './client'

export const login = (email, password) =>
  client.post('/auth', { email, password })
