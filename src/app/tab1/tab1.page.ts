import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class Tab1Page {
  ultimaSenha: any = null;

  // Precisamos injetar o Service aqui no constructor
  constructor(private ticketService: TicketService) {}

  emitir(tipo: string) {
    this.ultimaSenha = this.ticketService.gerarSenha(tipo);
  }
}
