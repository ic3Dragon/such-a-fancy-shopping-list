import './TodoCard.scss';
import {ListItem} from '../../utils/types'
import {shoppingList} from '../../utils/state';
import { updateStorage } from '../../App';

const TodoCard = ({todo: {id, title, notes, date, time, bought}, todoIndex}: {todo: ListItem, todoIndex:number}) => {
  const setDone = (e: React.SyntheticEvent) => {
      e.stopPropagation();
      shoppingList.value = shoppingList.value.map(todo => {
        if(todo.id !== id){
          return todo
        }
        return {...todo, bought: !todo.bought}
      });
      updateStorage(shoppingList.value);
    }
  
  const deleteTodo = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    shoppingList.value = shoppingList.value.filter(todo => todo.id !== id);
    updateStorage(shoppingList.value);
  }
  
  const editTodo = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  }
  
  return (
    <article className={`todo ${bought ? 'todo--bought' : ''}`}>
      <header className="todo__header">
        <p className="todo__index-order">{todoIndex +1}</p>
        <p className="todo__date">{date} - {time}</p>
      </header>
      <h3 className="todo__text todo__title">{title}</h3>
      {notes && <p className="todo__text todo__desc">{notes}</p>}
      <section className="todo__buttons">
      <button 
        className='button todo__bought-button'
        onClick={setDone}
      >
        {bought ? 'Undo' : 'Done'}
      </button>
      <button className="button todo__edit-button" hidden onClick={editTodo}>Edit</button>
      {bought && <button className="button todo__delete-button" onClick={deleteTodo}>Delete</button>}
      </section>
    </article>
  )
}

export default TodoCard