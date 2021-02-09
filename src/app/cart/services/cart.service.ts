import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product-model';
import { ProductInCartModel } from '../models/product-in-cart-model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private readonly itemsInCart: ProductInCartModel[] = [];
  private totalAmount = 0;
  private totalQuantity = 0;

  getCartItems(): ProductInCartModel[] {
    return this.itemsInCart;
  }

  getTotalAmount(): number {
    return this.totalAmount;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  addToCart(item: ProductModel): ProductInCartModel[] {
    console.log('call add to cart in cart service');
    const isAmountIncreased = this.increaseProductAmountInCart(item.id);
    if (isAmountIncreased === false) {
      console.log('isAmountIncreased is false');
      const itemInCart = new ProductInCartModel();
      itemInCart.id = item.id;
      itemInCart.name = item.name;
      itemInCart.price = item.price;
      itemInCart.amount = 1;

      this.itemsInCart.push(itemInCart);
    }

    this.calculateTotalAmount();
    this.calculateTotalQuantity();

    return this.itemsInCart;
  }

  increaseProductAmountInCart(itemId: number): boolean {
    const existingItem = this.itemsInCart.find(i => i.id === itemId);

    if (existingItem) {
      existingItem.amount++;
      this.calculateTotalAmount();
      this.calculateTotalQuantity();
      return true;
    }
    return false;
  }

  decreaseProductAmountInCart(productId: number): boolean {
    const existingItem = this.itemsInCart.find(i => i.id === productId);

    if (!existingItem) {
      console.log('Error! There is no such product in the cart!');
      return false;
    }

    if (existingItem.amount > 1) {
      existingItem.amount--;
    } else {
      this.deleteProductFromCart(existingItem.id);
    }
    this.calculateTotalQuantity();
    this.calculateTotalAmount();
    return true;
  }

  deleteProductFromCart(productId: number): boolean {
    const existingItem = this.itemsInCart.find(i => i.id === productId);

    if (existingItem) {
      const itemIndex = this.itemsInCart.indexOf(existingItem);
      this.itemsInCart.splice(itemIndex, 1);
      this.calculateTotalQuantity();
      this.calculateTotalAmount();
      return true;
    }

    console.log('Error! There is no such product in the cart!');
    return false;
  }

  private calculateTotalQuantity(): void {

    this.totalQuantity = 0;

    this.itemsInCart.forEach(item => {
      this.totalQuantity += item.amount;
    });
    console.log('Total quantity in shopping cart: ' + this.totalQuantity + '$');
  }

  private calculateTotalAmount(): void {

    this.totalAmount = 0;

    this.itemsInCart.forEach(item => {
      this.totalAmount += item.price * item.amount;
    });
    console.log('Total sum in shopping cart: ' + this.totalAmount + '$');
  }
}
