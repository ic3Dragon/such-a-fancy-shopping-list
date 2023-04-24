import './shoppingList.scss';
import {ListItem} from '../../utils/types'
import {shoppingList, display} from '../../utils/state';
import ItemCard from '../ItemCard';

const ShoppingList = () => {
  const nrItemsLeft: number = shoppingList.value.filter(item => item.bought !== true).length;
  const completedTodos: number = shoppingList.value.length - nrItemsLeft;

  const checkIfBlock = ():ListItem[] => {
    if(display.value === 'block'){
      const reOrderedItems = [...shoppingList.value].sort((a,b) => Number(a.bought) - Number(b.bought));
      return reOrderedItems;
    }
      return shoppingList.value;
  }
  
  return (
    <>
    <header className="list__header">
      <h2 className="list__title">{shoppingList.value.length > 0 ? '' : 'You bought everything!'}</h2>
      {shoppingList.value.length < 1 ? <h3 className="list__text--get-started">- Add some new items and get started! -</h3> : '' }
      {completedTodos > 0 && <p className="list__todo-count"> Completed: {completedTodos}</p>}
      {nrItemsLeft > 0 && <p className="list__todo-count"> Remaing: {nrItemsLeft}</p>}
    </header>
      <section key="todoList" className={`todo-list --${display}`} data-testid="cardList">
        {
          shoppingList.value && checkIfBlock().map((todo:ListItem, i) => (
            <ItemCard listItem={todo} key={todo.id} itemIndex={i}/>
            ),
        )}
      </section>
    </>
  )
}

export default ShoppingList