
export interface Task {
  title: string;
  description: string;
  urgent: boolean;
  state: 'To Do' | 'In Progress' | 'Done';
}
