import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privatecomponent',
  templateUrl: './privatecomponent.component.html',
  styleUrl: './privatecomponent.component.css'
})
export class PrivatecomponentComponent {

  constructor(private router: Router) {}

  redirect = () => this.router.navigate(['/todo']);

}
