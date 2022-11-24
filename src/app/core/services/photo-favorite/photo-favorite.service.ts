import { Injectable } from '@angular/core';

import {BehaviorSubject, delay, Observable, of, Subject} from "rxjs";

import {PhotoInterface} from "@app/core/interfaces/photo.interface";

@Injectable()
export class PhotoFavoriteService {

  private KEY_TOKEN = 'PHOTO_FAVORITES';

  favorites$ = new BehaviorSubject<PhotoInterface[]>([]);
  destroy$ = new Subject<boolean>();

  constructor() {
    this.restoreFromStorage();
  }

  toggle({id}: PhotoInterface): void {
    const photo = {id};
    const existedFavorite = this.getFavorites().find( v => v.id === photo.id);
    if (existedFavorite) {
      this.removeFavorite(existedFavorite);
    } else {
      this.addFavorite(photo);
    }
  }

  get favorites(): Observable<PhotoInterface[]> {
    return this.favorites$.asObservable();
  }

  getFavorites(): PhotoInterface[] {
    return this.favorites$.getValue();
  }

  getFavorite(id: number): Observable<PhotoInterface | undefined> {
    const favorite = this.getFavorites().find( v => v.id === id)
    return of(favorite).pipe(
      delay(200)
    );
  }

  private addFavorite(photo: PhotoInterface): void {
    const favorites = this.getFavorites();
    favorites.push(photo);
    this.save(favorites);
  }

  private removeFavorite(photo: PhotoInterface): void {
    const favorites = this.getFavorites();

    this.save(favorites.filter( v => v.id !== photo.id));
  }

  private save(photos: PhotoInterface[]) : void {
    this.favorites$.next(photos);
    this.getStorage().setItem(this.KEY_TOKEN, JSON.stringify(photos));
  }

  private restoreFromStorage(): void {
    const value = this.getStorage().getItem(this.KEY_TOKEN) || '[]';
    const photos = JSON.parse(value);

    this.favorites$.next(photos as PhotoInterface[]);
  }

  private getStorage(): StorageInterface {
    return sessionStorage;
  }


}

interface StorageInterface {
  setItem: (key: string, value: string) => void;
  getItem: (key: string) => string | null;
  removeItem: (key: string) => void;
}
