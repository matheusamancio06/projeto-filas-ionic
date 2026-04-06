import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  public tickets: any[] = [];

  constructor() {}

  gerarSenha(tipo: string) {
    // Conta quantos tickets daquele tipo já existem para gerar o número correto
    const contagemTipo = this.tickets.filter(t => t.tipo === tipo).length + 1;
    const numeroFormatado = contagemTipo.toString().padStart(2, '0');

    const novaSenha = {
      numero: numeroFormatado,
      tipo: tipo,
      status: 'aguardando',
      hora: new Date()
    };

    this.tickets.push(novaSenha);
    return novaSenha;
  }

  chamarProximo() {
    // 1. Procura a primeira senha 'aguardando' que seja Prioritária (SP)
    let index = this.tickets.findIndex(t => t.status === 'aguardando' && t.tipo === 'SP');

    // 2. Se não achar SP, procura qualquer outra (SE ou SG) que esteja aguardando
    if (index === -1) {
      index = this.tickets.findIndex(t => t.status === 'aguardando');
    }

    // 3. Se achou alguém, marca como atendido e retorna
    if (index !== -1) {
      this.tickets[index].status = 'atendido';
      return this.tickets[index];
    }

    return null; // Ninguém na fila
  }
}
