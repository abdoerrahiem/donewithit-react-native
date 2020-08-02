import { useContext } from 'react'
import jwtDecode from 'jwt-decode'
import AuthContext from './context'
import { removeToken, storeToken } from './storage'

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext)

  const login = (authToken) => {
    const user = jwtDecode(authToken)
    setUser(user)
    storeToken(authToken)
  }

  const logout = () => {
    setUser(null)
    removeToken()
  }

  return { user, logout, login }
}

export default useAuth
