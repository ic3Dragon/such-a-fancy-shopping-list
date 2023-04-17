import { signal } from "@preact/signals-react";
import { Todo } from './types';

const getTodos = () => {
  const storedTodos: string = localStorage.getItem('todos') || '';
    if(storedTodos){
      return JSON.parse(storedTodos);
    }
    return [];
  }
export const count = signal<number>(0);

export const todos = signal<Todo []>(getTodos());

export const display = signal<String>('block');
  