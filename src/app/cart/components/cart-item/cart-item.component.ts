import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInCartModel } from '../../models/product-in-cart-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  productInCart: ProductInCartModel;

  @Output()
  increaseAmountEvent = new EventEmitter<number>();

  @Output()
  decreaseAmountEvent = new EventEmitter<number>();

  @Output()
  deleteProductEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increaseAmount(): void{
    this.increaseAmountEvent.emit(this.productInCart.id);
  }

  decreaseAmount(): void{
    this.decreaseAmountEvent.emit(this.productInCart.id);
  }

  deleteProductFromCart(): void{
    this.deleteProductEvent.emit(this.productInCart.id);
  }
}
