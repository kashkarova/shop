import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  public productsInBasket: ProductModel[];

  constructor() {
    this.productsInBasket = []
  }

  public addToBasket(item: ProductModel): void {
    item.amount = 1;
    var existingItem = this.productsInBasket.find(i => i.id == item.id);

    if (existingItem != null) {
      this.productsInBasket[this.productsInBasket.indexOf(existingItem)].amount++;
    } else {
      this.productsInBasket.push(item);
    }
  }

  public totalAmount(): number {

    let total = 0;

    this.productsInBasket.forEach(item => {
      total += item.price * item.amount;
    });

    return 0;
  }
}
