import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  data: any
}

export function WorkerProfile({ data }: Props) {
  const process = (input: any): any => {
    return input.items.map((i: any) => i.value)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#FF5733', padding: 24 },
  name: { color: '#ffffff', fontSize: 18 },
})
