import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ProductInCartModel } from './product-in-cart-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public productsInCart: ProductInCartModel[];
  public totalAmount: number;

  constructor(private readonly cartService: CartService) {
    this.productsInCart = cartService.getCartItems();
    this.totalAmount = cartService.getTotalAmount();
  }

  ngOnInit(): void {
  }

}
