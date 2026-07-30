import { useState, useEffect } from 'react'
import { fetchJobs } from '../api/services/job-service'
import type { Job } from '../types/job'

export function useJobList(): { jobs: Job[]; isLoading: boolean } {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetchJobs().then(data => { setJobs(data); setIsLoading(false) })
  }, [])
  return { jobs, isLoading }
}
