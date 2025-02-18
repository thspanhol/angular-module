import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private mensagem: string = 'Mensagem Inicial';

  getMensagem(): string {
    return this.mensagem;
  }

  setMensagem(novaMensagem: string) {
    this.mensagem = novaMensagem;
  }
}
