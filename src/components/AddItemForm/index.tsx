import { KeyboardEvent, useRef } from 'react';
import './addItemForm.scss';
import { updateStorage } from '../../App';
import {shoppingList} from '../../utils/state';
import {ListItem} from '../../utils/types';

const createItem = (title:string, notes:{ value: string; } | undefined):ListItem => {
  const now: string[] = new Date().toLocaleString('en-GB', { hour12: false }).split(',');  
  const date: string = now[0].trim();
  const time: string= now[1].slice(1, 6);
  
  return {
    id: window.crypto.randomUUID(), 
    title, 
    notes: notes ? notes.value : notes, 
    date,
    time,
    bought: false
  }
}

const addItemHandler = (e: React.SyntheticEvent):void => {
  e.preventDefault();
  const itemData = e.target as typeof e.target & {
    title: {value: string},
    notes?: {value: string}
  };
  const itemToAdd:ListItem = createItem(itemData.title.value, itemData.notes);
  shoppingList.value = [itemToAdd, ...shoppingList.value];  
  updateStorage(shoppingList.value);
  itemData.title.value = '';
  if(itemData.notes){
    itemData.notes.value = '';
  }
};


const AddItemForm = () => {
  const formElement = useRef<HTMLFormElement>(null);

  const preventNewLineOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if(e.code === "Enter" && e.shiftKey === false){
      e.preventDefault();
      formElement.current?.requestSubmit();
    }
  };

  return <form onSubmit={addItemHandler} className="add-item-form" ref={formElement}>
    <input type="text" placeholder="What do you need?" className="add-item-form__input" name="title" autoFocus required data-testid="newCardTitle"/>
    <textarea onKeyDown={preventNewLineOnEnter} placeholder="Notes" className="add-item-form__input add-item-form__input--notes" name="notes" autoComplete="off" data-testid="newCardTitleDesc"/>
    <button type="submit" className="button" data-testid="addNewCardBtn">Add to list</button>
  </form>
};

export default AddItemForm;
