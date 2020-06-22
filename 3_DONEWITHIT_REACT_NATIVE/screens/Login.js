import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { Form, FormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().min(4).required().label('Password'),
})

const Login = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
