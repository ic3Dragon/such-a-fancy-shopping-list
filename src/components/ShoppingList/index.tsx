import './shoppingList.scss';
import {ListItem} from '../../utils/types'
import {shoppingList, display} from '../../utils/state';
import ItemCard from '../ItemCard';

const ShoppingList = () => {
  const nrItemsLeft: number = shoppingList.value.filter(item => item.bought !== true).length;
  const boughtItems: number = shoppingList.value.length - nrItemsLeft;

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
      {boughtItems > 0 && <p className="list__item-count"> Picked up: {boughtItems}</p>}
      {nrItemsLeft > 0 && <p className="list__item-count"> Remaing: {nrItemsLeft}</p>}
    </header>
      <section key="shoppingList" className={`shopping-list --${display}`} data-testid="cardList">
        {
          shoppingList.value && checkIfBlock().map((item:ListItem, i) => (
            <ItemCard listItem={item} key={item.id} itemIndex={i}/>
            ),
        )}
      </section>
    </>
  )
}

export default ShoppingList