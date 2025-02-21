import { Component } from '@angular/core';
import { SharedService } from '../../core/shared.service';
import { Router } from '@angular/router';
import { OnInit, DoCheck, AfterViewInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrl: './firstcomponent.component.css',
})
export class FirstcomponentComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {

  stringSolo: string = "";
  arrayStrings: string[] = []
  fontSize: string = "40px";
  global: string;
  login: boolean;
  outputString: string = "";
  today: Date = new Date()

  elvis = {
    nome: "Thales",
    cursos: { c1: {t1: "Angular"}, c2: {t1: null} },
  };

  constructor(private sharedService: SharedService, private router: Router) {
    this.global = this.sharedService.getMensagem();
    this.login = this.sharedService.getLogin();
    console.log('Construtor chamado!');    
  }
  
  // Executado uma vez logo após a criação do componente.
  ngOnInit(): void {
    console.log('ngOnInit - Componente inicializado.');
  }

  // Executado a cada ciclo de detecção de mudanças.
  ngDoCheck(): void {
    console.log('ngDoCheck - Verificação de mudanças.');
  }

  // Chamado após a visualização do componente ser renderizada.
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - Visualização carregada.');
  }

  // Executado antes do componente ser removido do DOM.
  ngOnDestroy(): void {
    console.log('ngOnDestroy - Componente destruído.');
  }

  outputFunction = (event: string) => this.outputString = event;

  logGlobal = () => console.log(this.global);

  redirect = (route: string) => this.router.navigate([route]);

  changeLogin = () => {
    this.sharedService.setLogin()
    this.login = this.sharedService.getLogin();
    console.log(this.login);
  }
  
  addTodo = () => {
    this.arrayStrings.push(this.stringSolo)
    this.stringSolo = "";
    this.fontSize = this.fontSize === "40px" ? "20px" : "40px"    
    console.log(this.arrayStrings);
  }

  attPropriedade = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    this.stringSolo = inputElement.value;
  }

  deletePropriedade = (prop: string) => {
    console.log(this.arrayStrings.indexOf(prop));
    this.arrayStrings = this.arrayStrings.filter((str) => str != prop);
  }

  upPropriedade = (prop: string) => {
    let index = this.arrayStrings.indexOf(prop);
    if (index > 0) { 
      [this.arrayStrings[index], this.arrayStrings[index - 1]] = 
      [this.arrayStrings[index - 1], this.arrayStrings[index]];
    }
  }

  downPropriedade = (prop: string) => {
    let index = this.arrayStrings.indexOf(prop);
    if (index !== -1 && index < this.arrayStrings.length - 1) {
      [this.arrayStrings[index], this.arrayStrings[index + 1]] = 
      [this.arrayStrings[index + 1], this.arrayStrings[index]];
    }
  }

}
