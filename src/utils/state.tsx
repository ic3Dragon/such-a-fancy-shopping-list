import { signal } from "@preact/signals-react";
import { ListItem } from './types';

const getList = () => {
  const storedListItems: string = localStorage.getItem('shoppingList') || '';
    if(storedListItems){
      return JSON.parse(storedListItems);
    }
    return [];
  }
export const count = signal<number>(0);

export const todos = signal<ListItem []>(getList());

export const display = signal<String>('block');
  