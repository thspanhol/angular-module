import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstcomponentComponent } from './firstcomponent.component';
import { ItemtodoModule } from '../itemtodo/itemtodo.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FirstcomponentComponent],
  imports: [
    CommonModule,
    ItemtodoModule,
    FormsModule,
  ],
  exports: [FirstcomponentComponent]
})
export class FirstcomponentModule { }
