import { create } from 'apisauce'
import { storeCache, getCache } from '../utils'

const apiClient = create({
  baseURL: 'http://192.168.100.57:9000/api',
})

const get = apiClient.get
apiClient.get = async (url, params, axiosConfig) => {
  const res = await get(url, params, axiosConfig)

  if (res.ok) {
    storeCache(url, res.data)
    return res
  }

  const data = await getCache(url)
  return data ? { ok: true, data } : res
}

export default apiClient
