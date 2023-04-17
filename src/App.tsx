import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './utils/types';
import Options from './components/Options';

export const updateStorage = (todoList: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todoList))
}

const App = () => (
  <main className="App">
    <header className="header">
      <h1 className="header__title">Fancy Todos</h1>
    </header>
    <TodoForm/>
    <Options />
    <TodoList/>
  </main>
);

export default App;
