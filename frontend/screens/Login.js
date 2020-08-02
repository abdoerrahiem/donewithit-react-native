import React, { useState, useContext } from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'
import jwtDecode from 'jwt-decode'

import Screen from '../components/Screen'
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from '../components/forms'
import { login } from '../api/auth'
import AuthContext from '../auth/context'
import { storeToken } from '../auth/storage'
import useAuth from '../auth/useAuth'

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().min(4).required().label('Password'),
})

const Login = () => {
  const [loginFailed, setLoginFailed] = useState(false)

  const auth = useAuth()

  const handleSubmit = async ({ email, password }) => {
    const result = await login(email, password)
    if (!result.ok) return setLoginFailed(true)
    setLoginFailed(false)

    auth.login(result.data)
  }

  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error='Invalid email and/or password.'
          visible={loginFailed}
        />
        <FormField
          name='email'
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          placeholder='Email'
          //   textContentType='emailAddress'
        />
        <FormField
          name='password'
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          placeholder='Password'
          secureTextEntry
          //   textContentType='password'
        />
        <SubmitButton title='Login' />
      </Form>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
})

export default Login
