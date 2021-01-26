import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { ProductModel } from '../product-model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  public productsInBasket: ProductModel[];

  constructor(private readonly basketService: BasketService) {
    this.productsInBasket = basketService.productsInBasket;
  }

  ngOnInit(): void {
  }

}
