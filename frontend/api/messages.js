import client from './client'

export const send = (message, listingId) =>
  client.post('/messages', { message, listingId })
