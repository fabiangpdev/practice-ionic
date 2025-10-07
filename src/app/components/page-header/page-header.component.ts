import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonBadge
} from '@ionic/angular/standalone';
import { CartModalShopComponent } from '../cart-modal-shop/cart-modal-shop.component';
import { ProductService } from 'src/app/services/product-service/product-service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonBadge
  ],
  providers: [ModalController]
})
export class PageHeaderComponent {
  @Input() title: string = '';

  constructor(
    private modalController: ModalController,
    public productService: ProductService
  ) { }

  async openCartModal() {
    try {
      const modal = await this.modalController.create({
        component: CartModalShopComponent,
        cssClass: 'cart-modal'
      });
      
      await modal.present();
    } catch (error) {
      throw new Error('Failed to open cart modal: ' + error);
    }
  }
}
