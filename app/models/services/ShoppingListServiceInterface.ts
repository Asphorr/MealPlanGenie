import { Injectable } from '@angular/core';
import { ShoppingList } from './shopping-list.entity';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceInterface {

  constructor() { }

  getShoppingLists(): Promise<ShoppingList[]> {
    return Promise.resolve([]);
  }

  getShoppingListByName(name: string): Promise<ShoppingList> {
    return Promise.resolve(null);
  }

  createShoppingList(shoppingList: ShoppingList): Promise<ShoppingList> {
    return Promise.resolve(shoppingList);
  }

  updateShoppingList(shoppingList: ShoppingList): Promise<ShoppingList> {
    return Promise.resolve(shoppingList);
  }

  deleteShoppingList(id: number): Promise<void> {
    return Promise.resolve();
  }

  addItemToShoppingList(shoppingListId: number, item: any): Promise<any> {
    return Promise.resolve(item);
  }

  removeItemFromShoppingList(shoppingListId: number, itemId: number): Promise<any> {
    return Promise.resolve(itemId);
  }
}
