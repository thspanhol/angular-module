import { Component } from '@angular/core';

type User = {
  name: string;
  email: string;
};

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})

export class TemplateDrivenFormComponent {

  user: User = {name: '', email: ''};

  onSubmit = (form: any) => console.log('Dados enviados: ', form.value);

}
