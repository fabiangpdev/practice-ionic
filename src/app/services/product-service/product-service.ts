import { Injectable } from '@angular/core';
import { Product } from 'src/types/types';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  public products: Product[] = []
  public productsCarToShop: Product[] = []

  async getProducts(limit: string): Promise<Product[]> {
    try {

      if (this.products.length > 0) {
        return this.products;
      }

      const response = await (await fetch(`https://dummyjson.com/products?limit=${limit}&select=title,price,description,category,images,brand`)).json()

      this.products = response.products

      return this.products

    } catch (error) {
      throw new Error('Failed to fetch products');
    }
  }

  async addNewProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const newProduct = { id: this.products.length + 1, ...product }

    this.products.unshift(newProduct);

    return newProduct;
  }

  async addProductToCart(product: Product): Promise<void> {
    this.productsCarToShop.push(product)
  }
}
