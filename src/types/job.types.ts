export interface Job {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo: string;
}

export interface JobListResponse {
  jobs: Job[];
  total: number;
}
