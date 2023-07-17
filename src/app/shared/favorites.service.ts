import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

const FAVORITES_KEY = 'favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesSource = new Subject<String[]>();
  public getFavorites$: Observable<String[]>;
  constructor() {
    this.getFavorites$ = this.favoritesSource.asObservable();
  }

  public set(id: string) {
    const favorites = localStorage.getItem(FAVORITES_KEY);

    if (!favorites) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([id]));
    } else {
      const parsedArray = JSON.parse(favorites);
      parsedArray.push(id);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(parsedArray));
    }

    this.loadFavorites();
  }

  public remove(id: string) {
    const favorites = localStorage.getItem(FAVORITES_KEY);

    if (favorites) {
      const parsedArray = JSON.parse(favorites);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(
        parsedArray.filter((f: string) => f !== id),
      ));
    }

    this.loadFavorites();
  }

  public loadFavorites() {
    this.favoritesSource.next(this.get());
  }

  public get(): string[] {
    const favorites = localStorage.getItem(FAVORITES_KEY);

    if (!favorites) {
      return [];
    }

    return JSON.parse(favorites);
  }
}
