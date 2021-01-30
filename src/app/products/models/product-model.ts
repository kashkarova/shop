import { Category } from './category.enum';

export interface IProductModel {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    amount: number;
}

export class ProductModel implements IProductModel {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    amount: number;
}
