export interface Todo {
  id: number;
  isDone: boolean;
  description: string;
  createdAt: Date;
  finishedAt: Date | null;
}
