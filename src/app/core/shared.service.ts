import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private mensagem: string = 'Mensagem Inicial';
  private login: boolean = false;


  getMensagem(): string {
    return this.mensagem;
  }

  setMensagem(novaMensagem: string) {
    this.mensagem = novaMensagem;
  }

  getLogin(): boolean {
    return this.login;
  }

  setLogin() {
    this.login = !this.login;
  }
}
