import { Component } from '@angular/core';
import { SharedService } from '../../core/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrl: './listcomponent.component.css'
})
export class ListcomponentComponent { 

  global: string = '';

  constructor(private sharedService: SharedService, private router: Router) {
      this.global = this.sharedService.getMensagem();
    }
  
    logGlobal = () => {
      this.sharedService.setMensagem(this.sharedService.getMensagem() + "TH")
      console.log(this.sharedService.getMensagem()); 
    };

    redirect = () => this.router.navigate(['/todo'])


}
