export interface TodoType {
  id: number;
  content: string;
  completed: boolean;
}

export type Action =
  | { type: 'ADD_TODO'; payload: TodoType }
  | { type: 'REMOVE_TODO'; payload: number }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'EDIT_TODO'; payload: TodoType };
