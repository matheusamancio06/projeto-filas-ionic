import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class Tab2Page {
  senhaSendoAtendida: any = null;

  constructor(public ticketService: TicketService) {}

  proximo() {
    this.senhaSendoAtendida = this.ticketService.chamarProximo();
    if (!this.senhaSendoAtendida) {
      alert('Não há mais senhas na fila!');
    }
  }
}
