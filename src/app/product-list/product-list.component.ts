import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product/product-model';
import { ProductsService } from '../product/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[];

  constructor(private readonly productService: ProductsService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void { }
}
