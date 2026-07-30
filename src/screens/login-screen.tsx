import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import axios from 'axios'

export function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    console.log('Login attempt:', email, password)
    const res = await axios.post('/api/auth/login', { email, password })
    console.log('Response:', res.data)
  }

  return (
    <View>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}
