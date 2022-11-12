import React from 'react'
import {Todo} from '../utils/types'
import {todos} from '../utils/state';

const TodoList = () => {
  return (
    <section>
      TodoList goes here
      {todos.value && todos.value.map((todo:Todo) => (
        <article>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{todo.date.toString()}</p>
        </article>),
      )
      }
    </section>
  )
}

export default TodoList