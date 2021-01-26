import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from './product-model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  public product: ProductModel;

  constructor(private readonly productService: ProductsService) {  }

  ngOnInit(): void {  }

  public onBuy(): void {
    this.productService.decreaseProductAmount(this.product.id);
    console.log('The good was put into the shopping cart');
  }
}
