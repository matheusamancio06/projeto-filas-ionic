import { Component } from '@angular/core';
// Adicionei IonCard, IonCardHeader, IonCardTitle e IonCardContent abaixo:
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonBadge,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/angular/standalone';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  // Certifique-se de que todos eles estejam aqui na lista de imports também:
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonBadge,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ],
})
export class Tab3Page {
  constructor(public ticketService: TicketService) {}
}
