import { Component } from '@angular/core';
import { SharedService } from '../../core/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrl: './firstcomponent.component.css',
})
export class FirstcomponentComponent {

  stringSolo: string = "";
  arrayStrings: string[] = []
  fontSize: string = "40px";
  global: string = "";

  constructor(private sharedService: SharedService, private router: Router) {
    this.global = this.sharedService.getMensagem();
  }

  logGlobal = () => console.log(this.global);

  redirect = () => this.router.navigate(['/list'])
  
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
