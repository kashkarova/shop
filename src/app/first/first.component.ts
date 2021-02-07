import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../cart/services/cart.service';
import { Category } from '../products/models/category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements DoCheck {

  isVisible = false;
  totalQuantity: number;

  constructor(private cartService: CartService) { }

  ngDoCheck(): void {
    this.totalQuantity = this.cartService.getTotalQuantity();

    if (this.totalQuantity <= 0) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }
}
