export interface Job {
  id: string
  title: string
  status: 'pending' | 'active' | 'completed'
}
