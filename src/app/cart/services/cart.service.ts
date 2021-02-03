import { Injectable } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
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

    return this.itemsInCart;
  }

  increaseProductAmountInCart(itemId: number): boolean {
    const existingItem = this.itemsInCart.find(i => i.id === itemId);

    if (existingItem) {
      existingItem.amount++;
      this.calculateTotalAmount();
      console.log('increased in cart');
      return true;
    }
console.log('not increased in cart');
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
      console.log('decreased in cart');
    } else {
      this.deleteProductFromCart(existingItem.id);
      console.log('deleted from cart');
    }

    this.calculateTotalAmount();
    return true;
  }

  deleteProductFromCart(productId: number): boolean {
    const existingItem = this.itemsInCart.find(i => i.id === productId);

    if (existingItem) {
      const itemIndex = this.itemsInCart.indexOf(existingItem);
      this.itemsInCart.splice(itemIndex, 1);
      return true;
    }

    console.log('Error! There is no such product in the cart!');
    return false;
  }

  private calculateTotalAmount(): void {

    this.total = 0;

    this.itemsInCart.forEach(item => {
      this.total += item.price * item.amount;
    });
    console.log('Total sum in shopping cart: ' + this.total + '$');
  }
}