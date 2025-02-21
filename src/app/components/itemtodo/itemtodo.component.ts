import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-itemtodo',
  templateUrl: './itemtodo.component.html',
  styleUrl: './itemtodo.component.css'
})
export class ItemtodoComponent implements OnChanges, OnInit {

  @Input() data!: string;
  @Input() func!: Function;
  @Input() up!: Function;
  @Input() down!: Function;

  @Output() sendString: EventEmitter<string> = new EventEmitter<string>();

  emitString = () => this.sendString.emit(this.data);

  ngOnInit(): void {
    this.emitString();
  }

  // Chamado sempre que um @Input() muda.
  ngOnChanges(): void {
    console.log('ngOnChanges - PROP DO ITEM ATRIBUIDA.');
  }

}
