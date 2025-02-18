import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-itemtodo',
  templateUrl: './itemtodo.component.html',
  styleUrl: './itemtodo.component.css'
})
export class ItemtodoComponent implements OnChanges  {

  @Input() data!: string;
  @Input() func!: Function;
  @Input() up!: Function;
  @Input() down!: Function;

  // Chamado sempre que um @Input() muda.
  ngOnChanges(): void {
    console.log('ngOnChanges - PROP DO ITEM ATRIBUIDA.');
  }

}
