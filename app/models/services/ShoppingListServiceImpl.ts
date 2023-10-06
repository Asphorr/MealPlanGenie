import { Injectable } from '@angular/core';
import { ShoppingList } from './shopping-list.model';
import { ShoppingListRepository } from './shopping-list.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServiceImpl implements ShoppingListService {

  private shoppingListsUrl = 'api/shopping-lists';

  constructor(private repository: ShoppingListRepository) { }

  getShoppingLists(): Observable<ShoppingList[]> {
    return this.repository.getAll(this.shoppingListsUrl);
  }

  getShoppingList(id: number): Observable<ShoppingList> {
    return this.repository.getOne(this.shoppingListsUrl + '/' + id);
  }

  createShoppingList(shoppingList: ShoppingList): Observable<ShoppingList> {
    return this.repository.post(this.shoppingListsUrl, shoppingList);
  }

  updateShoppingList(shoppingList: ShoppingList): Observable<ShoppingList> {
    return this.repository.put(this.shoppingListsUrl + '/' + shoppingList.id, shoppingList);
  }

  deleteShoppingList(id: number): Observable<void> {
    return this.repository.delete(this.shoppingListsUrl + '/' + id);
  }

  addItemToShoppingList(shoppingListId: number, item: string): Observable<ShoppingList> {
    const url = `${this.shoppingListsUrl}/${shoppingListId}/items`;
    const body = JSON.stringify({ item });
    return this.repository.post(url, body);
  }

  removeItemFromShoppingList(shoppingListId: number, itemId: number): Observable<ShoppingList> {
    const url = `${this.shoppingListsUrl}/${shoppingListId}/items/${itemId}`;
    return this.repository.delete(url);
  }
}
