import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle } from '@ionic/angular/standalone';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ProductCreateComponent } from 'src/app/components/product-create/product-create.component';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';
import { Product } from 'src/types/types';
import { ProductService } from 'src/app/services/product-service/product-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonTitle, CommonModule, FormsModule, ProductCardComponent, ProductCreateComponent, PageHeaderComponent]
})
export class ProductsPage implements OnInit {

  public products!: Product[]

  constructor(
    public readonly productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts("10")
  }

  async getProducts(limit: string): Promise<void> {
    this.products = await this.productService.getProducts(limit);
  }

  async addNewProduct(product: Omit<Product, 'id'>): Promise<void> {
    await this.productService.addNewProduct(product)
    this.products = this.productService.products
  }


}
