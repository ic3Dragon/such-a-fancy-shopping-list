import React from 'react'
import {todos} from '../utils/state';
import {Todo} from '../utils/types';

const TodoForm = () => {

  const createTodo = (title:string, desc:{ value: string; } | undefined):Todo => {
    return {
      id: window.crypto.randomUUID(), 
      title, 
      description: desc ? desc.value : desc, 
      date: new Date(),
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
    todos.value = [...todos.value, todoToAdd];    
    todoData.title.value = '';
    if(todoData.desc){
      todoData.desc.value = '';
    }
  }

  return (
    <form onSubmit={addTodoHandler}>
      <input type="text" placeholder="Title" id="todoFormTitle" name="title" required/>
      <input type="text" placeholder="Description" id="todoFormDesc" name="desc"/>
      <button type="submit" >Add to list</button>
    </form>
  )
}

export default TodoForm