import { Injectable } from '@angular/core';
import { CartService } from '../../cart/services/cart.service';
import { Category } from '../models/category.enum';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private productList: ProductModel[];

  constructor(private readonly cartService: CartService) {
    this.setProducts();
  }

  getProducts(): ProductModel[] {
    return this.productList;
  }

  getProduct(id: number): ProductModel {
    return this.productList.find(i => i.id === id);
  }

  decreaseProductAmountInStock(productId: number): boolean {
    const product = this.getProduct(productId);

    if(!product.isAvailable)
    {
      return false;
    }

    if (product.amount > 0) {
      product.amount--;
      console.log('decreased in stock');
    }

    if (product.amount === 0 && product.isAvailable) {
      product.isAvailable = false;
      console.log('Unfortunately, this product is unavailable');
    }

    return true;
  }

  increaseProductAmountInStock(productId: number, amount: number): void {
    const product = this.getProduct(productId);
    product.amount += amount;
    product.isAvailable = true;
    console.log('increased in stock');
  }

  private setProducts(): ProductModel[] {
    this.productList = [
      {
        id: 1,
        name: 'Apple',
        description: 'Golden',
        image: 'https://www.jesmondfruitbarn.com.au/wp-content/uploads/2016/10/Jesmond-Fruit-Barn-Golden-Delicious-Apples.jpg',
        price: 12.5,
        category: Category.Fruits,
        isAvailable: true,
        amount: 10,
      },
      {
        id: 2,
        name: 'Apple',
        description: 'McIntosh',
        image: 'https://www.gardeningknowhow.com/wp-content/uploads/2018/03/mcintosh-1-400x267.jpg',
        price: 15.0,
        category: Category.Fruits,
        isAvailable: true,
        amount: 10,
      },
      {
        id: 3,
        name: 'Banana',
        description: 'Typical yellow banana',
        image: 'https://cpimg.tistatic.com/05631725/b/4/Fresh-Yellow-Banana.jpg',
        price: 25.0,
        category: Category.Fruits,
        isAvailable: true,
        amount: 10,
      },
      {
        id: 4,
        name: 'Banana',
        description: 'Ripe discount banana',
        image: 'https://img1.mashed.com/img/gallery/heres-how-to-tell-if-a-banana-is-too-ripe-for-banana-bread/intro-1588707128.jpg',
        price: 25.0,
        category: Category.Fruits,
        isAvailable: true,
        amount: 10,
      },
      {
        id: 5,
        name: 'Pumpkin',
        description: 'Orange pumpkin',
        image: 'https://img.taste.com.au/bYS6wGYW/taste/2017/03/butternut-pumpkin-2-124997-1.jpg',
        price: 8.0,
        category: Category.Vegetables,
        isAvailable: true,
        amount: 10,
      },
      {
        id: 6,
        name: 'Potato',
        description: 'Fall harvest',
        image: 'https://vegtm.com/wp-content/uploads/2020/05/patato1.jpg',
        price: 3.0,
        category: Category.Vegetables,
        isAvailable: true,
        amount: 50,
      },
      {
        id: 7,
        name: 'Yoghurt',
        description: 'Natural dairy',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Natural_Yoghurt.jpg',
        price: 18.0,
        category: Category.Dairy,
        isAvailable: true,
        amount: 10,
      },
      {
        id: 8,
        name: 'Milk',
        description: 'From Alpian cows',
        image: 'https://s3.pricemestatic.com/Images/RetailerProductImages/StRetailer2362/0077925374.jpg',
        price: 15.0,
        category: Category.Dairy,
        isAvailable: true,
        amount: 10,
      },
      {
        id: 9,
        name: 'Wet wipes',
        description: 'With cotton smell',
        image: 'https://cdn.shopify.com/s/files/1/0272/9790/6765/products/vindawipes-1_1024x.png?v=1591110045',
        price: 4.0,
        category: Category.Hygiene,
        isAvailable: true,
        amount: 10,
      },
      {
        id: 10,
        name: 'Toothpaste',
        description: 'With mint taste',
        image: 'https://cdn.shopify.com/s/files/1/1240/5194/products/1024x1024px_grants110g_box_tube_angle_160920_mildmint_grande.jpg?v=1601849772',
        price: 7.0,
        category: Category.Hygiene,
        isAvailable: true,
        amount: 5,
      }
    ];

    return this.productList;
  }
}
