import { Component, DoCheck, OnInit, Optional } from '@angular/core';
import { CartService } from '../cart/services/cart.service';
import { LocalStorageService } from '../core/services/local-storage.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements DoCheck {

  isVisible = false;
  totalQuantity: number;

  hasLocalStorageService = false;

  constructor(private cartService: CartService, @Optional() private localStorageService?: LocalStorageService) 
  {
    if(localStorageService){
      this.hasLocalStorageService = true;
    }
  }

  ngDoCheck(): void {
    this.totalQuantity = this.cartService.getTotalQuantity();

    if (this.totalQuantity <= 0) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }
}
