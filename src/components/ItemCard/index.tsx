import './itemCard.scss';
import {ListItem} from '../../utils/types'
import {shoppingList} from '../../utils/state';
import { updateStorage } from '../../App';

const ItemCard = ({listItem: {id, title, notes, date, time, bought}, itemIndex}: {listItem: ListItem, itemIndex:number}) => {
  const setDone = (e: React.SyntheticEvent) => {
      e.stopPropagation();
      shoppingList.value = shoppingList.value.map(item => {
        if(item.id !== id){
          return item
        }
        return {...item, bought: !item.bought}
      });
      updateStorage(shoppingList.value);
    }
  
  const deleteItem = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    shoppingList.value = shoppingList.value.filter(item => item.id !== id);
    updateStorage(shoppingList.value);
  }
  
  const editItem = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  }
  
  return (
    <article className={`item${bought ? 'item--bought' : ''}`}>
      <header className="item__header">
        <p className="item__index-order">{itemIndex +1}</p>
        <p className="item__date">{date} - {time}</p>
      </header>
      <h3 className="item__text item__title">{title}</h3>
      {notes && <p className="item__text item__desc">{notes}</p>}
      <section className="item__buttons">
      <button 
        className='button item__bought-button'
        onClick={setDone}
      >
        {bought ? 'Undo' : 'Done'}
      </button>
      <button className="button item__edit-button" hidden onClick={editItem}>Edit</button>
      {bought && <button className="button item__delete-button" onClick={deleteItem}>Delete</button>}
      </section>
    </article>
  )
}

export default ItemCard