import './TodoCard.scss';
import {Todo} from '../utils/types'
import {todos} from '../utils/state';
import { updateStorage } from '../App';


const TodoCard = ({todo: {id, title, description, date, time, done}}: {todo: Todo}) => {
  const setDone = (e: React.SyntheticEvent) => {
      e.stopPropagation();
      todos.value = todos.value.map(todo => {
        if(todo.id !== id){
          return todo
        }
        return {...todo, done: !todo.done}
      });
      updateStorage(todos.value);
    }
  
  const deleteTodo = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    todos.value = todos.value.filter(todo => todo.id !== id);
    updateStorage(todos.value);
  }
  
  return (
    <article className={`todo ${done ? 'todo--done' : ''}`}>
          <h3 className="todo__title">{title}</h3>
          <p className="todo__date">{date} - {time}</p>
          {description && <p className="todo__desc">{description}</p>}
          <section className="todo__buttons">
          <button 
            className='button todo__done-button'
            onClick={setDone}
          >
            {done ? 'Undo' : 'Done'}
          </button>
          {done && <button className="button todo__delete-button" onClick={deleteTodo}>Delete</button>}
          </section>
        </article>
  )
}

export default TodoCard