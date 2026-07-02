import axios from 'axios';
import { Job, JobListResponse } from '../../types/job.types';

const BASE_URL = 'https://api.igs.internal/v1';

export async function fetchJobs(): Promise<JobListResponse> {
  const response = await axios.get<JobListResponse>(`${BASE_URL}/jobs`);
  return response.data;
}

export async function updateJobStatus(
  jobId: string,
  status: Job['status'],
): Promise<Job> {
  const response = await axios.put<Job>(`${BASE_URL}/jobs/${jobId}`, { status });
  return response.data;
}
