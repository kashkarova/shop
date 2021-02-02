import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product-model';
import { ProductInCartModel } from '../models/product-in-cart-model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private readonly itemsInCart: ProductInCartModel[];
  private total: number;

  constructor() {
    this.itemsInCart = [];
    this.total = 0;
  }

  getCartItems(): ProductInCartModel[] {
    return this.itemsInCart;
  }

  getTotalAmount(): number {
    return this.total;
  }

  addToCart(item: ProductModel): ProductInCartModel[] {
    const existingItem = this.itemsInCart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.amount++;
    } else {
      const itemInCart = new ProductInCartModel();
      itemInCart.id = item.id;
      itemInCart.name = item.name;
      itemInCart.price = item.price;
      itemInCart.amount = 1;

      this.itemsInCart.push(itemInCart);
    }

    this.calculateTotalAmount();

    return this.itemsInCart;
  }

  private calculateTotalAmount(): void {

    this.total = 0;

    this.itemsInCart.forEach(item => {
      this.total += item.price * item.amount;
    });
    console.log('Total sum in shopping cart: ' + this.total + '$');
  }
}
