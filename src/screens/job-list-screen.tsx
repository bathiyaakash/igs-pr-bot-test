import React from 'react'
import { View, Text } from 'react-native'
import { useJobList } from '../hooks/use-job-list'

export function JobListScreen() {
  const { jobs, isLoading } = useJobList()
  if (isLoading) return <Text>Loading...</Text>
  return (
    <View>
      {jobs.map(job => <Text key={job.id}>{job.title}</Text>)}
    </View>
  )
}
