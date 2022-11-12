import React, { useRef } from 'react'
import {todoToAdd} from '../utils/state'
const TodoForm = () => {

  // let title = useRef('');
  // let description = useRef('');

  const addTodoHandler = ():void => {
    console.log('you clicked the add button');
    
  }

  return (
    <section>
      {/* <input type="text" placeholder="Title" ref={title} />
      <input type="text" placeholder="Description" value={description.current}/> */}
      <button onClick={addTodoHandler}>Add to list</button>
    </section>
  )
}

export default TodoForm