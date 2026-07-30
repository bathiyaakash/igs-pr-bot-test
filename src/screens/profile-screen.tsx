import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

interface ProfileProps {
  userId: string
}

export function ProfileScreen({ userId }: ProfileProps): JSX.Element {
  const [name, setName] = useState<string>('')

  useEffect(() => {
    axios.get(`/api/users/${userId}`).then(res => setName(res.data.name))
  }, [userId])

  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}
