import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/product-model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  constructor(private readonly productService: ProductsService, private readonly cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddProductToCart(product: ProductModel): void {
    const isDecreasedInStock = this.productService.decreaseProductAmountInStock(product.id);
    if (isDecreasedInStock) {
      this.cartService.addToCart(product);
    } else {
      console.log('error!');
    }
  }
}
