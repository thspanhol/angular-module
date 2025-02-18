import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itemtodo',
  templateUrl: './itemtodo.component.html',
  styleUrl: './itemtodo.component.css'
})
export class ItemtodoComponent {

  @Input() data!: string;
  @Input() func!: Function;
  @Input() up!: Function;
  @Input() down!: Function;

}
