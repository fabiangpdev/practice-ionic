import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton} from '@ionic/angular/standalone';
import { ProductService } from 'src/app/services/product-service/product-service';

//Se declara en este lugar el type debido a que para la calificación se envía solo el componente, normalmente va en la carpeta types

interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    images:      string[];
    brand:       string;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  styleUrls: ['./product-card.component.scss'],
  imports: [ IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton]
})
export class ProductCardComponent  implements OnInit {

  @Input() product!: Product

  constructor(private readonly productService: ProductService) { }

  ngOnInit() {}

  addToCart(product: Product) {
    this.productService.addProductToCart(product);
  }
}
