import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductInCartModel } from '../../models/product-in-cart-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  productsInCart: ProductInCartModel[];
  totalAmount: number;

  constructor(private readonly cartService: CartService) {
    this.productsInCart = this.cartService.getCartItems();
    this.totalAmount = this.cartService.getTotalAmount();
  }

  ngOnInit(): void {
  }
}
