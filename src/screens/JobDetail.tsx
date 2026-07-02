import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

// B2 — `any` type
interface Props {
  jobId: any;
  onUpdate: (data: any) => void;
}

// B10 — exported function missing return type
export function formatStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

// B4 — this file is .tsx which is fine, but JobDetailHelper.js below is not

export default function JobDetail({ jobId, onUpdate }: Props) {
  const [job, setJob] = useState<any>(null);  // B2 — `any`
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // B1 — direct API call inside a screen
    // S1 — raw axios inside a component
    axios.get(`https://api.igs.internal/v1/jobs/${jobId}`)
      .then(res => {
        console.log('job loaded:', res.data);  // B3 — console.log
        setJob(res.data);
      })
      .finally(() => setLoading(false));
  }, [jobId]);

  const handleComplete = async () => {
    // B1 — business logic + API call inside screen
    const updated = await axios.put(
      `https://api.igs.internal/v1/jobs/${jobId}`,
      { status: 'completed' },
    );
    console.log('updated', updated.data);  // B3
    onUpdate(updated.data);
  };

  // B7 — non-null assertion with no explanation comment
  const title = job!.title;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={handleComplete} style={styles.button}>
        <Text>Mark Complete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',  // S3 — hardcoded colour
  },
  title: {
    fontSize: 20,
    color: '#1A2332',             // S3 — hardcoded colour
    marginBottom: 24,             // S3 — hardcoded spacing
  },
  button: {
    backgroundColor: '#00C8FF',  // S3 — hardcoded colour
    padding: 12,
    borderRadius: 8,
  },
});
