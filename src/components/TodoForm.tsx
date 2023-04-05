import './TodoForm.scss';
import { updateStorage } from '../App';
import {todos} from '../utils/state';
import {Todo} from '../utils/types';

const createTodo = (title:string, desc:{ value: string; } | undefined):Todo => {
  const now: string[] = new Date().toLocaleString('en-GB', { hour12: false }).split(',');

  const date: string = now[0].trim();
  const time: string= now[1].slice(1, 6);

  return {
    id: window.crypto.randomUUID(), 
    title, 
    description: desc ? desc.value : desc, 
    date,
    time,
    done: false
  }
}

const addTodoHandler = (e: React.SyntheticEvent):void => {
  e.preventDefault();

  const todoData = e.target as typeof e.target & {
    title: {value: string},
    desc?: {value: string}
  };
  const todoToAdd:Todo = createTodo(todoData.title.value, todoData.desc);
  todos.value = [todoToAdd, ...todos.value];  
  updateStorage(todos.value);
  todoData.title.value = '';
  if(todoData.desc){
    todoData.desc.value = '';
  }
}

const TodoForm = () => (
  <form onSubmit={addTodoHandler} className="todo-form">
    <input type="text" placeholder="Title" className="todo-form__input" id="todoFormTitle" name="title" autoFocus required/>
    <input type="text" placeholder="Description" className="todo-form__input" id="todoFormDesc" name="desc" autoComplete="off"/>
    <button type="submit" className="button todo-form__add-button">Add to list</button>
  </form>
);

export default TodoForm