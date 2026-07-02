import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchJobs } from '../api/services/job-service';
import { Job } from '../types/job.types';

export default function JobListScreen() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetchJobs().then(res => setJobs(res.jobs));
  }, []);

  return (
    <View>
      <FlatList
        data={jobs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
