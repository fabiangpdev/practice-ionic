import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle, IonList, IonItem, IonInput } from '@ionic/angular/standalone';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';

type Enterprise = {
  username: string
  address: string
  country: string
  language: string
  currency: string
  avatarUrl: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonTitle, CommonModule, FormsModule, IonList, IonItem, IonInput, PageHeaderComponent]
})
export class HomePage {

  public titleEnterprise: string = "ARDIDAS S.A.S."

  public enterprise: Enterprise = {
    username: "Rogelio",
    address: "calle falsa 123",
    country: "Bogotá - Colombia",
    currency: "COP",
    language: "Español",
    avatarUrl: "https://i.pinimg.com/236x/c1/3c/09/c13c0920395ae11c8d5974402780bc8a.jpg"
  }

  constructor() { }

  onClick() {
    console.log(this.enterprise);
  }

}
