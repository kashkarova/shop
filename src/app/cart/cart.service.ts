import { Injectable } from '@angular/core';
import { ProductModel } from '../product/product-model';
import { ProductInCartModel } from './product-in-cart-model';

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

  public getCartItems(): ProductInCartModel[] {
    return this.itemsInCart;
  }

  public getTotalAmount(): number {
    return this.total;
  }

  public addToCart(item: ProductModel): ProductInCartModel[] {
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

    this.increaseTotalAmount();

    return this.itemsInCart;
  }

  private increaseTotalAmount(): void {

    this.total = 0;

    this.itemsInCart.forEach(item => {
      this.total += item.price * item.amount;
    });
    console.log('Total sum in shopping cart: ' + this.total + '$');
  }
}
