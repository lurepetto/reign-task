import { Injectable } from '@angular/core';
import { FAVS } from '../core/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class FavoriteNewsService {
  // Create an empty array for the favorite list
  private FAV_LIST: string[] = [];
  // Get the items from the localStorage (empty array if null or undefined)
  constructor() {
    this.FAV_LIST = JSON.parse(localStorage.getItem(FAVS.FAV_LIST_KEY)) || [];
  }
  // Save the data
  public saveFaveList(): void {
    localStorage.setItem(FAVS.FAV_LIST_KEY, JSON.stringify(this.FAV_LIST));
  }
  // get the string ID array from the localstorage
  public faveList(): string[] {
    return this.FAV_LIST;
  }
  // Add to the list the incoming id and call the save method
  public addToFaves(id: string): void {
    console.log(`saving ${id} to your favorites`);
    this.FAV_LIST.push(id);
    this.saveFaveList();
  }

  // Get anything but the specific id and call the save method
  public removeFave(id: string): void {
    console.log(`removing ${id} from your favorites`);
    this.FAV_LIST = this.FAV_LIST.filter(x => x !== id);
    this.saveFaveList();
  }

  // Check if the incoming id is on the list
  public isFave(id: string): boolean {
    return this.FAV_LIST.includes(id);
  }
}
