import React from 'react'
import {Todo} from '../utils/types'

const TodoCard = ({todo: {id, title, description, date, done}}: {todo: Todo}) => {
  return (
    <article key={id} className={done ? '--done': ''}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{date.toLocaleString('en-GB', { hour12: false })}</p>
        </article>
  )
}

export default TodoCard