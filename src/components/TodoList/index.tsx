import './TodoList.scss';
import {ListItem} from '../../utils/types'
import {shoppingList, display} from '../../utils/state';
import TodoCard from '../TodoCard';

const TodoList = () => {
  const nrTodosLeft: number = shoppingList.value.filter(todo => todo.bought !== true).length;
  const completedTodos: number = shoppingList.value.length - nrTodosLeft;

  const checkIfBlock = ():ListItem[] => {
    if(display.value === 'block'){
      const reOrderedTodos = [...shoppingList.value].sort((a,b) => Number(a.bought) - Number(b.bought));
      return reOrderedTodos;
    }
      return shoppingList.value;
  }
  
  return (
    <>
    <header className="list__header">
      <h2 className="list__title">{shoppingList.value.length > 0 ? 'All the things' : 'Everything is done for now!'}</h2>
      {shoppingList.value.length < 1 ? <h3 className="list__text--get-started">- Add some todos and get started! -</h3> : '' }
      {completedTodos > 0 && <p className="list__todo-count"> Completed: {completedTodos}</p>}
      {nrTodosLeft > 0 && <p className="list__todo-count"> Remaing: {nrTodosLeft}</p>}
    </header>
      <section key="todoList" className={`todo-list --${display}`} data-testid="cardList">
        {
          shoppingList.value && checkIfBlock().map((todo:ListItem, i) => (
            <TodoCard todo={todo} key={todo.id} todoIndex={i}/>
            ),
        )}
      </section>
    </>
  )
}

export default TodoList