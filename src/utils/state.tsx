import { signal } from "@preact/signals-react";
import { Todo } from './types';

export const count = signal<number>(0);

export const todos = signal<Todo []>([]);