import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemtodoComponent } from './itemtodo.component';



@NgModule({
  declarations: [ItemtodoComponent],
  imports: [
    CommonModule
  ],
  exports: [ItemtodoComponent]
})
export class ItemtodoModule { }
