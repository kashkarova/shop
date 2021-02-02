import { Component, Input, OnInit } from '@angular/core';
import { ProductInCartModel } from '../../models/product-in-cart-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  productInCart: ProductInCartModel;

  constructor() { }

  ngOnInit(): void {
  }

}
