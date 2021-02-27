import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: new LocalStorageService()
})
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getItemByKey(key: string): string {
    const value = localStorage.getItem(key);
    if (!value) {
      console.log('Error! There is no value with such key! ');
      return null;
    }

    return value;
  }
}
