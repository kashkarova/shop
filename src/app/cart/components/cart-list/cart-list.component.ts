import { OnChanges, Component, Input, SimpleChanges, DoCheck } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductInCartModel } from '../../models/product-in-cart-model';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements DoCheck {
  productsInCart: ProductInCartModel[];
  totalAmount: number;

  constructor(private readonly cartService: CartService, private readonly productService: ProductsService) {
    this.productsInCart = this.cartService.getCartItems();
    this.totalAmount = 0;
  }

  ngDoCheck(): void {
    this.totalAmount = this.cartService.getTotalAmount();
  }

  increaseProductAmountInCart(product: ProductInCartModel): void {
    const isDecreasedInStock = this.productService.decreaseProductAmountInStock(product.id);

    if (isDecreasedInStock) {
      this.cartService.increaseProductAmountInCart(product.id);
    } else {
      console.log('Error to increase product amount in cart!');
    }
  }

  decreaseProductAmountInCart(product: ProductInCartModel): void {
    const isDecreasedInCart = this.cartService.decreaseProductAmountInCart(product.id);

    if (isDecreasedInCart) {
      this.productService.increaseProductAmountInStock(product.id, 1);
    }
  }

  deleteProductFromCart(product: ProductInCartModel): void {
    const isDeletedFromCart = this.cartService.deleteProductFromCart(product.id);

    if (isDeletedFromCart) {
      this.productService.increaseProductAmountInStock(product.id, product.amount);
      console.log('Product has been deleted from the cart');
    }

  }
}
