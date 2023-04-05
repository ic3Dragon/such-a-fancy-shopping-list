import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './utils/types';
import Nav from './components/Nav';

export const updateStorage = (todoList: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todoList))
}

const App = () => (
  <main className="App">
    <header className="header">
      <h1 className="header__title">Fancy Todos</h1>
      <p>How do you want to display your todos?</p>
      <Nav />
    </header>
    <TodoForm/>
    <TodoList/>
  </main>
);

export default App;
