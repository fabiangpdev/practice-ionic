import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { Product } from 'src/types/types';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  styleUrls: ['./product-card.component.scss'],
  imports: [ IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent ]
})
export class ProductCardComponent  implements OnInit {

  @Input() product!: Product

  constructor() { }

  ngOnInit() {}

}
