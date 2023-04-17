import './TodoList.scss';
import {Todo} from '../../utils/types'
import {todos, display} from '../../utils/state';
import TodoCard from '../TodoCard';

const TodoList = () => {
  const nrTodosLeft: number = todos.value.filter(todo => todo.done !== true).length;
  const completedTodos: number = todos.value.length - nrTodosLeft;

  const checkIfBlock = ():Todo[] => {
    if(display.value === 'block'){
      const reOrderedTodos = [...todos.value].sort((a,b) => Number(a.done) - Number(b.done));
      return reOrderedTodos;
    }
      return todos.value;
  }
  
  return (
    <>
    <header className="list__header">
      <h2>{todos.value.length > 0 ? 'All the things to do' : 'Everything is done for now'}</h2>
      {completedTodos > 0 && <p className="list__todo-count"> Completed todos: {completedTodos}</p>}
      {nrTodosLeft > 0 && <p className="list__todo-count"> Remaing things on list: {nrTodosLeft}</p>}
    </header>
      <section key="todoList" className={`todo-list --${display}`}>
        {
          todos.value && checkIfBlock().map((todo:Todo, i) => (
          <>
            <TodoCard todo={todo} key={todo.id} todoIndex={i}/>
          </>
            ),
        )}
      </section>
    </>
  )
}

export default TodoList