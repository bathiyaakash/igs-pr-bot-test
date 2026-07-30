import type { Job } from '../../types/job'

export async function fetchJobs(): Promise<Job[]> {
  const res = await fetch('/api/jobs')
  return res.json()
}
