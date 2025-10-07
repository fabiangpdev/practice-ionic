import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonContent, 
  IonList, 
  IonItem, 
  IonThumbnail, 
  IonLabel, 
  IonCard, 
  IonCardContent, 
  IonFooter 
} from '@ionic/angular/standalone';
import { Product } from 'src/types/types';
import { ProductService } from 'src/app/services/product-service/product-service';

@Component({
  selector: 'app-cart-modal-shop',
  templateUrl: './cart-modal-shop.component.html',
  styleUrls: ['./cart-modal-shop.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DecimalPipe,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonCard,
    IonCardContent,
    IonFooter
  ],
  providers: [ModalController]
})
export class CartModalShopComponent implements OnInit {
  cartProducts: Product[] = [];

  constructor(
    private modalController: ModalController,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.cartProducts = [...this.productService.productsCarToShop];
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  removeFromCart(product: Product) {
    const index = this.productService.productsCarToShop.findIndex(p => p.id === product.id);
    if (index > -1) {
      this.productService.productsCarToShop.splice(index, 1);
      this.cartProducts = [...this.productService.productsCarToShop];
    }
  }

  getTotalPrice(): number {
    return this.cartProducts.reduce((total, product) => total + product.price, 0);
  }

  clearCart() {
    this.productService.productsCarToShop = [];
    this.cartProducts = [];
  }
}
