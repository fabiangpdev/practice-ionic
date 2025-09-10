import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonList, IonItem, IonLabel, IonNote, IonCardSubtitle } from '@ionic/angular/standalone';

//Se declara en este lugar el type debido a que para la calificación se envía solo el componente, normalmente va en la carpeta types

type User = {
  nickname: string;
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  ocupation: string;
  enterprise: string;
  personalInfo: string;
  comments: string;
  personalPhoto: string;
}

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonList, IonItem, IonLabel, IonNote, IonCardSubtitle]
})

export class InfoUsuarioPage implements OnInit {

  public user: User = {
    nickname: "Elfabiou",
    firstName: "Fabián",
    secondName: "Esteban",
    lastName: "Gordillo",
    secondLastName: "Peña",
    email: "elmaspro@devspro.com",
    ocupation: "Ingeniero de Software",
    enterprise: "NASA",
    personalInfo: "Le gustan los videojuegos, la música, la revolución, y la física astronomica",
    comments: "Para contratar contactar por DM (Cobra mucho pero es muy bueno)",
    personalPhoto: "https://i.pinimg.com/736x/4e/7b/e2/4e7be291fa15c76926e9644f3b8d970f.jpg"
  };

  constructor() { }

  ngOnInit() {
  }

}