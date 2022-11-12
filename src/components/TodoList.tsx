import React from 'react'
import {Todo} from '../utils/types'
import {todos} from '../utils/state';
import TodoCard from './TodoCard';

const TodoList = () => {
  return (
    <section>
      <h1>{todos.value.length > 0 ? 'All the things to do' : 'Everything is done for now'}</h1>
      {todos.value && todos.value.map((todo:Todo) => (
       <TodoCard todo={todo}/>
        ),
      )}
    </section>
  )
}

export default TodoList