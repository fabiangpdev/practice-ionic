import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonList, IonItem, IonInput, IonButton, IonTitle } from '@ionic/angular/standalone';

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
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
  imports: [IonList, IonItem, IonInput, IonButton, FormsModule, IonTitle],
  standalone: true
})
export class ProductCreateComponent implements OnInit {

  @Output() newProductEvent = new EventEmitter<Omit<Product, 'id'>>();
  public product: Omit<Product, 'id'> = {
    title: '',
    price: 0,
    description: '',
    category: '',
    images: [],
    brand: ''
  };

  constructor() { }

  ngOnInit() { }

  sendInfo() {
    this.newProductEvent.emit(this.product);
  }

}
