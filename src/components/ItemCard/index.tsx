import './itemCard.scss';
import {ListItem} from '../../utils/types'
import {shoppingList} from '../../utils/state';
import { updateStorage } from '../../App';

const setDone = (id:string, e: React.SyntheticEvent) => {
    e.stopPropagation();
    shoppingList.value = shoppingList.value.map(item => {
      if(item.id !== id){
        return item
      }
      return {...item, bought: !item.bought}
    });
    updateStorage(shoppingList.value);
  }

const deleteItem = (id:string, e: React.SyntheticEvent) => {
  e.stopPropagation();
  shoppingList.value = shoppingList.value.filter(item => item.id !== id);
  updateStorage(shoppingList.value);
}

const editItem = (e: React.SyntheticEvent) => {
  e.stopPropagation();
}

const ItemCard = ({listItem: {id, title, notes, date, time, bought}, itemIndex}: {listItem: ListItem, itemIndex:number}) => {
  
  return (
    <article onClick={e => setDone(id, e)} className={`item ${bought ? 'item--bought' : ''}`}>
      <p className="item__index-order">{itemIndex + 1}</p>
      <section className="item__header">
        <h3 className="item__text item__title">{title}</h3>
      {notes && <p className="item__text item__desc">{notes}</p>}
      </section>
      <section className="item__buttons">
      <button className="item__edit-button" hidden onClick={editItem}>Edit</button>
      {bought && <button className="item__delete-button" onClick={e => deleteItem(id, e)}>❌</button>}
      </section>
    </article>
  )
}

export default ItemCard