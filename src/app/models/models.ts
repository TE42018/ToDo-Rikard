
export interface Task {
  title: string;
  description: string;
  // urgent: boolean;
  state: 'Todo' | 'In Progress' | 'Done';
}
