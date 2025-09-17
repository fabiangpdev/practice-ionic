import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ProductCreateComponent } from 'src/app/components/product-create/product-create.component';
import { Product } from 'src/types/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ProductCardComponent, ProductCreateComponent]
})
export class ProductsPage implements OnInit {

  public products!: Product[]

  constructor() { }

  ngOnInit() {
    this.getProducts("10")
  }

  async getProducts(limit: string): Promise<void> {
    try {
      const response = await (await fetch(`https://dummyjson.com/products?limit=${limit}&select=title,price,description,category,images,brand`)).json()
      this.products = response.products
      console.log(this.products)
    } catch (error) {
      console.log(error)
    }
  }

  async addNewProduct(product: Omit<Product, 'id'>): Promise<void> {
    const newProduct = { id: this.products.length + 1, ...product }
    console.log(newProduct);
  
    this.products.unshift(newProduct);
  }

}
